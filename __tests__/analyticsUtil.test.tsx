import { renderHook } from '@testing-library/react-hooks';
import useAnalytics from '../ultilities/analystic';

// Mock window objects and methods
const mockFbqInit = jest.fn();
const mockFbqTrack = jest.fn();
const mockGtagJs = jest.fn();
const mockGtagConfig = jest.fn();
const mockClarityInit = jest.fn();

describe('useAnalytics hook', () => {
  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();
    
    // Setup window mocks
    Object.defineProperty(window, 'dataLayer', {
      writable: true,
      value: [],
    });
    
    Object.defineProperty(window, 'gtag', {
      writable: true,
      value: jest.fn((...args) => {
        if (args[0] === 'js') {
          mockGtagJs(args[1]);
        } else if (args[0] === 'config') {
          mockGtagConfig(args[1]);
        }
      }),
    });
    
    Object.defineProperty(window, 'fbq', {
      writable: true,
      value: jest.fn((...args) => {
        if (args[0] === 'init') {
          mockFbqInit(args[1]);
        } else if (args[0] === 'track') {
          mockFbqTrack(args[1]);
        }
      }),
    });
    
    // Setup document.createElement and other DOM methods for script loading
    const originalCreateElement = document.createElement;
    const mockScripts: HTMLScriptElement[] = [];
    
    jest.spyOn(document, 'createElement').mockImplementation((tagName) => {
      if (tagName === 'script') {
        const scriptElement = {
          async: false,
          src: '',
          parentNode: null,
          onload: null,
        } as unknown as HTMLScriptElement;
        
        mockScripts.push(scriptElement);
        return scriptElement;
      }
      return originalCreateElement.call(document, tagName);
    });
    
    jest.spyOn(document, 'getElementsByTagName').mockImplementation((tagName) => {
      if (tagName === 'script') {
        return [{
          parentNode: {
            insertBefore: jest.fn((script, sibling) => {
              // Mock script loading
              if (script.src && typeof script.onload === 'function') {
                setTimeout(() => script.onload(new Event('load')), 0);
              }
            }),
          },
        }] as unknown as HTMLCollectionOf<HTMLScriptElement>;
      }
      return document.querySelectorAll(tagName);
    });

    // Mock clarity
    Object.defineProperty(window, 'clarity', {
      writable: true,
      value: jest.fn((command, id) => {
        if (command === 'script') {
          mockClarityInit(id);
        }
      }),
    });
  });

  test('initializes Google Analytics with correct tracking ID', () => {
    // Render the hook
    renderHook(() => useAnalytics());
    
    // Verify Google Analytics was initialized with the correct tracking ID
    expect(mockGtagJs).toHaveBeenCalled();
    expect(mockGtagConfig).toHaveBeenCalledWith('G-JJ2JYJGKCP');
  });

  test('initializes Facebook Pixel with correct ID', () => {
    // Render the hook
    renderHook(() => useAnalytics());
    
    // Verify Facebook Pixel was initialized with the correct ID
    expect(mockFbqInit).toHaveBeenCalledWith('1312231683111702');
    expect(mockFbqTrack).toHaveBeenCalledWith('PageView');
  });

  test('only initializes analytics once even if hook is called multiple times', () => {
    // Render the hook multiple times
    const { rerender } = renderHook(() => useAnalytics());
    rerender();
    rerender();
    
    // Verify initialization was only done once
    expect(mockGtagConfig).toHaveBeenCalledTimes(1);
    expect(mockFbqInit).toHaveBeenCalledTimes(1);
  });
});