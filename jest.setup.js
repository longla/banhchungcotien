// Learn more: https://github.com/testing-library/jest-dom
require('@testing-library/jest-dom');

// Mock IntersectionObserver which isn't available in JSDom
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
};

// Set up global window properties
beforeEach(() => {
  // Mock window.fbq and window.gtag before any tests run
  global.fbq = jest.fn();
  global.gtag = jest.fn();
  global.dataLayer = [];
  
  // Mock matchMedia which isn't available in JSDom
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});