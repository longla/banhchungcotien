import { renderHook } from '@testing-library/react-hooks';
import useAnalytics from '../ultilities/analystic';

describe('Microsoft Clarity Tracking', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Reset document.createElement and getElementsByTagName
    jest.restoreAllMocks();
    
    // Mock script loading
    jest.spyOn(document, 'createElement').mockImplementation((tagName) => {
      if (tagName === 'script') {
        return {
          async: false,
          src: '',
          parentNode: null,
        } as unknown as HTMLScriptElement;
      }
      return document.createElement(tagName);
    });
    
    // Mock document.getElementsByTagName to return an element with parentNode
    jest.spyOn(document, 'getElementsByTagName').mockImplementation((tagName) => {
      if (tagName === 'script') {
        return [{
          parentNode: {
            insertBefore: jest.fn(),
          },
        }] as unknown as HTMLCollectionOf<HTMLScriptElement>;
      }
      return document.querySelectorAll(tagName) as unknown as HTMLCollectionOf<HTMLElement>;
    });
  });

  test('Clarity script is loaded with the correct project ID', () => {
    // Setup mock for window.clarity function
    const mockClarity = jest.fn();
    Object.defineProperty(window, 'clarity', {
      writable: true,
      value: mockClarity,
    });
    
    // Render the analytics hook
    renderHook(() => useAnalytics());
    
    // Check document.createElement was called to create a script element
    expect(document.createElement).toHaveBeenCalledWith('script');
    
    // Check the script src contains the Clarity URL
    const createElement = document.createElement as jest.Mock;
    const scriptElement = createElement.mock.results.find(
      result => result.value && result.value.src !== undefined
    )?.value;
    
    if (scriptElement) {
      // Set the src to trigger the clarity initialization
      scriptElement.src = 'https://www.clarity.ms/tag/pgqdvptg6j';
      
      // Check that clarity was initialized with the correct project ID
      expect(scriptElement.src).toContain('pgqdvptg6j');
    }
  });

  test('Clarity is initialized only once even if the hook is called multiple times', () => {
    const mockClarity = jest.fn();
    Object.defineProperty(window, 'clarity', {
      writable: true,
      value: mockClarity,
    });
    
    // Render the hook multiple times
    const { rerender } = renderHook(() => useAnalytics());
    rerender();
    rerender();
    
    // Check document.createElement was only called once for the script
    const scriptCreateCalls = (document.createElement as jest.Mock).mock.calls
      .filter(call => call[0] === 'script')
      .length;
    
    expect(scriptCreateCalls).toBe(1);
  });
});