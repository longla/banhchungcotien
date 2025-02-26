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

describe('Facebook Pixel Events', () => {
  const mockFbq = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Mock Facebook Pixel
    Object.defineProperty(window, 'fbq', {
      writable: true,
      value: mockFbq,
    });
  });

  test('Purchase event is triggered when phone call button is clicked', () => {
    render(<HomePage />);
    
    // Find the phone call button
    const phoneButton = screen.getByText(/gọi đặt bánh/i, { selector: 'a' });
    
    // Click the button
    fireEvent.click(phoneButton);
    
    // Verify Facebook Pixel was called with Purchase event
    expect(mockFbq).toHaveBeenCalledWith('track', 'Purchase');
  });

  test('FindLocation event is triggered when address link is clicked', () => {
    render(<HomePage />);
    
    // Find the address link
    const addressLink = screen.getByText(/địa chỉ/i, { selector: 'a' });
    
    // Click the link
    fireEvent.click(addressLink);
    
    // Verify Facebook Pixel was called with FindLocation event
    expect(mockFbq).toHaveBeenCalledWith('track', 'FindLocation');
  });

  test('FindLocation event is triggered when map image is clicked', () => {
    // Mock window.open
    window.open = jest.fn();
    
    render(<HomePage />);
    
    // Find the map image
    const mapImage = screen.getByAltText('Parking Guide');
    
    // Click the image
    fireEvent.click(mapImage);
    
    // Verify Facebook Pixel was called with FindLocation event
    expect(mockFbq).toHaveBeenCalledWith('track', 'FindLocation');
  });

  test('PageView event is not triggered by user interactions', () => {
    render(<HomePage />);
    
    // Find and click various elements
    const phoneButton = screen.getByText(/gọi đặt bánh/i, { selector: 'a' });
    fireEvent.click(phoneButton);
    
    const addressLink = screen.getByText(/địa chỉ/i, { selector: 'a' });
    fireEvent.click(addressLink);
    
    // Verify PageView was not called by these interactions
    // (PageView should only be called during initialization)
    expect(mockFbq).not.toHaveBeenCalledWith('track', 'PageView');
  });
});