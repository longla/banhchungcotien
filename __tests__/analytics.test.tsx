import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { render } from './test-utils';
import '@testing-library/jest-dom';
import HomePage from '../app/page';
import useAnalytics from '../ultilities/analystic';

// Mock the context providers and Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  }),
  usePathname: () => '/',
}));

// Mock the LanguageContext
jest.mock('../context/LanguageContext', () => ({
  useLanguage: () => ({
    language: 'vi',
    setLanguage: jest.fn(),
    t: (key: string) => key === 'title' ? 'Bánh Chưng Cô Tiên' : 
                        key === 'callButton' ? 'Gọi Đặt Bánh: 657-272-6533' :
                        key === 'address' ? 'Địa chỉ: 8128 W Cerritos Ave' : key
  }),
  LanguageProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock the analytics functions
jest.mock('../ultilities/analystic', () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Global mocks
const mockFbq = jest.fn();
const mockGtag = jest.fn();

describe('Analytics Tracking', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    
    // Define global mocks
    global.fbq = mockFbq;
    global.gtag = mockGtag;
    global.dataLayer = [];
  });

  test('useAnalytics is called when HomePage is rendered', () => {
    render(<HomePage />);
    expect(useAnalytics).toHaveBeenCalled();
  });

  test('Phone click triggers both Google Analytics and Facebook Pixel events', () => {
    const { container } = render(<HomePage />);
    
    // Find the phone button using partial text and role
    const phoneButton = screen.getByRole('link', { name: /đặt bánh/i });
    fireEvent.click(phoneButton);
    
    // Check if Facebook Pixel event was triggered
    expect(mockFbq).toHaveBeenCalledWith('track', 'Purchase');
    
    // Check if Google Analytics event was triggered
    expect(mockGtag).toHaveBeenCalledWith('event', 'phone_click', {
      event_category: 'Contact',
      event_label: 'Phone Call',
      value: 1,
    });
  });

  test('Location click triggers Facebook Pixel event', () => {
    const { container } = render(<HomePage />);
    
    // Find the address link - use container query since it may have dangerouslySetInnerHTML
    const addressLink = container.querySelector('a[href*="google.com/maps"]');
    if (addressLink) {
      fireEvent.click(addressLink);
      
      // Check if Facebook Pixel event was triggered
      expect(mockFbq).toHaveBeenCalledWith('track', 'FindLocation');
    } else {
      fail('Address link not found');
    }
  });

  test('Map image click triggers location tracking and opens map in new window', () => {
    // Mock window.open
    const mockOpen = jest.fn();
    window.open = mockOpen;
    
    const { container } = render(<HomePage />);
    
    // Find the map image using its classname if alt text doesn't work
    const mapContainer = container.querySelector('.image-container');
    if (mapContainer) {
      fireEvent.click(mapContainer);
      
      // Check if window.open was called with correct URL
      expect(mockOpen).toHaveBeenCalledWith(
        expect.stringContaining('google.com/maps'),
        '_blank'
      );
      
      // Check if Facebook Pixel event was triggered
      expect(mockFbq).toHaveBeenCalledWith('track', 'FindLocation');
    } else {
      fail('Map image container not found');
    }
  });
});