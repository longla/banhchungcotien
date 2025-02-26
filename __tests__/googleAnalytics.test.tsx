import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { render } from './test-utils';
import '@testing-library/jest-dom';
import HomePage from '../app/page';

// Mock the Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: () => '/',
}));

// Mock the analytics hook
jest.mock('../ultilities/analystic', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Google Analytics Events', () => {
  const mockGtag = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Mock Google Analytics
    Object.defineProperty(window, 'gtag', {
      writable: true,
      value: mockGtag,
    });
    
    // Mock Facebook Pixel to avoid errors
    Object.defineProperty(window, 'fbq', {
      writable: true,
      value: jest.fn(),
    });
    
    // Mock dataLayer
    window.dataLayer = [];
  });

  test('phone_click event is triggered with correct parameters when phone button is clicked', () => {
    render(<HomePage />);
    
    // Find the phone call button
    const phoneButton = screen.getByText(/gọi đặt bánh/i, { selector: 'a' });
    
    // Click the button
    fireEvent.click(phoneButton);
    
    // Verify Google Analytics was called with the correct event and parameters
    expect(mockGtag).toHaveBeenCalledWith('event', 'phone_click', {
      event_category: 'Contact',
      event_label: 'Phone Call',
      value: 1,
    });
  });

  test('no Google Analytics events are triggered when clicking on the address link', () => {
    render(<HomePage />);
    
    // Find the address link
    const addressLink = screen.getByText(/địa chỉ/i, { selector: 'a' });
    
    // Click the link
    fireEvent.click(addressLink);
    
    // Verify Google Analytics was not called
    expect(mockGtag).not.toHaveBeenCalled();
  });

  test('no Google Analytics events are triggered when clicking on the map image', () => {
    // Mock window.open
    window.open = jest.fn();
    
    render(<HomePage />);
    
    // Find the map image
    const mapImage = screen.getByAltText('Parking Guide');
    
    // Click the image
    fireEvent.click(mapImage);
    
    // Verify Google Analytics was not called for the map click
    expect(mockGtag).not.toHaveBeenCalled();
  });

  test('dataLayer is initialized', () => {
    render(<HomePage />);
    
    // Verify dataLayer exists
    expect(window.dataLayer).toBeDefined();
  });
});