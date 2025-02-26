import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../app/page';
import useAnalytics from '../ultilities/analystic';

// Mock the Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: () => '/',
}));

describe('Analytics Integration Tests', () => {
  // Setup mocks for all tracking services
  const mockGtag = jest.fn();
  const mockFbq = jest.fn();
  const mockClarityInit = jest.fn();
  
  // Track script loading
  const loadedScripts: string[] = [];
  
  beforeEach(() => {
    jest.clearAllMocks();
    loadedScripts.length = 0;
    
    // Mock window.fbq
    Object.defineProperty(window, 'fbq', {
      writable: true,
      value: mockFbq,
    });
    
    // Mock window.gtag
    Object.defineProperty(window, 'gtag', {
      writable: true,
      value: mockGtag,
    });
    
    // Mock dataLayer
    window.dataLayer = [];
    
    // Mock script loading
    const originalCreateElement = document.createElement;
    const scriptElements: HTMLScriptElement[] = [];
    
    jest.spyOn(document, 'createElement').mockImplementation((tagName) => {
      if (tagName === 'script') {
        const script = {
          async: false,
          src: '',
          parentNode: null,
          onload: null,
          setAttribute: function(key: string, value: string) {
            (this as any)[key] = value;
          },
        } as unknown as HTMLScriptElement;
        
        // Define a setter for src to track script loading
        Object.defineProperty(script, 'src', {
          set: function(url: string) {
            loadedScripts.push(url);
            this._src = url;
            // Simulate script load
            if (this.onload) {
              setTimeout(() => this.onload(new Event('load')), 0);
            }
          },
          get: function() {
            return this._src;
          }
        });
        
        scriptElements.push(script);
        return script;
      }
      return originalCreateElement.call(document, tagName);
    });
    
    // Mock document.getElementsByTagName
    jest.spyOn(document, 'getElementsByTagName').mockImplementation((tagName) => {
      if (tagName === 'script') {
        return [{
          parentNode: {
            insertBefore: jest.fn((script, referenceNode) => {
              // Do nothing, we're tracking script src changes instead
            }),
          },
        }] as unknown as HTMLCollectionOf<HTMLScriptElement>;
      }
      return document.querySelectorAll(tagName);
    });
    
    // Mock window.clarity
    Object.defineProperty(window, 'clarity', {
      writable: true,
      value: jest.fn((command, id) => {
        if (command === 'script') {
          mockClarityInit(id);
        }
      }),
    });
  });

  test('All tracking scripts are loaded and initialized correctly', async () => {
    // Render HomePage which initializes analytics
    render(<HomePage />);
    
    // Wait for all script onload callbacks to fire
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    // Check Facebook Pixel script is loaded
    expect(loadedScripts.some(url => url.includes('facebook.net/en_US/fbevents.js'))).toBe(true);
    
    // Check Clarity script is loaded
    expect(loadedScripts.some(url => url.includes('clarity.ms/tag/'))).toBe(true);
    
    // Check Facebook Pixel is initialized
    expect(mockFbq).toHaveBeenCalledWith('init', '1312231683111702');
    expect(mockFbq).toHaveBeenCalledWith('track', 'PageView');
    
    // Check Google Analytics is initialized
    expect(mockGtag).toHaveBeenCalledWith('js', expect.any(Date));
    expect(mockGtag).toHaveBeenCalledWith('config', 'G-JJ2JYJGKCP');
  });

  test('All tracking events are fired when user interacts with the page', async () => {
    // Mock window.open
    window.open = jest.fn();
    
    // Render HomePage
    render(<HomePage />);
    
    // Wait for scripts to load
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    // Reset mocks to clear initialization calls
    mockFbq.mockClear();
    mockGtag.mockClear();
    
    // Test phone button click
    const phoneButton = screen.getByText(/gọi đặt bánh/i, { selector: 'a' });
    fireEvent.click(phoneButton);
    
    // Verify both Facebook and Google events
    expect(mockFbq).toHaveBeenCalledWith('track', 'Purchase');
    expect(mockGtag).toHaveBeenCalledWith('event', 'phone_click', {
      event_category: 'Contact',
      event_label: 'Phone Call',
      value: 1,
    });
    
    // Reset mocks
    mockFbq.mockClear();
    mockGtag.mockClear();
    
    // Test address link click
    const addressLink = screen.getByText(/địa chỉ/i, { selector: 'a' });
    fireEvent.click(addressLink);
    
    // Verify Facebook event only
    expect(mockFbq).toHaveBeenCalledWith('track', 'FindLocation');
    expect(mockGtag).not.toHaveBeenCalled();
    
    // Reset mocks
    mockFbq.mockClear();
    mockGtag.mockClear();
    
    // Test map image click
    const mapImage = screen.getByAltText('Parking Guide');
    fireEvent.click(mapImage);
    
    // Verify map opens and FindLocation event is fired
    expect(window.open).toHaveBeenCalledWith(
      'https://www.google.com/maps/search/?api=1&query=8128+W+Cerritos+Ave,+Stanton,+CA+90680',
      '_blank'
    );
    expect(mockFbq).toHaveBeenCalledWith('track', 'FindLocation');
  });
});