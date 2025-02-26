/**
 * This is a simple verification test for Facebook Pixel events.
 * It tests that the analytics utility correctly initializes the Facebook Pixel code
 * and that event tracking functions are properly set up.
 */

import React from 'react';
import { render } from './test-utils';
import useAnalytics from '../ultilities/analystic';

// Create a test component that uses the analytics hook
const TestComponent = () => {
  useAnalytics();
  return <div>Test Component</div>;
};

// Mock window methods and properties
global.fbq = jest.fn();
global.gtag = jest.fn();
global.dataLayer = [];
global.document.createElement = jest.fn().mockReturnValue({
  async: false,
  src: '',
  parentNode: null,
});
global.document.getElementsByTagName = jest.fn().mockReturnValue([{
  parentNode: {
    insertBefore: jest.fn(),
  },
}]);

describe('Facebook Pixel Verification', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Facebook Pixel is initialized with correct Pixel ID', () => {
    // Render the test component to trigger the useAnalytics hook
    render(<TestComponent />);

    // Verify Facebook Pixel initialization
    expect(global.fbq).toHaveBeenCalledWith('init', '1312231683111702');
    expect(global.fbq).toHaveBeenCalledWith('track', 'PageView');
  });

  test('Google Analytics is initialized with correct tracking ID', () => {
    // Render the test component to trigger the useAnalytics hook
    render(<TestComponent />);

    // Verify Google Analytics initialization
    expect(global.gtag).toHaveBeenCalledWith('config', 'G-JJ2JYJGKCP');
  });
});