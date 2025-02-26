# Analytics and Event Tracking Tests

This directory contains tests for verifying the analytics and event tracking functionality of the Banh Chung Co Tien website.

## Test Suite Overview

The tests are organized into several categories:

1. **analytics.test.tsx**: General tests for the analytics integration in the application.
2. **analyticsUtil.test.tsx**: Tests for the `useAnalytics` hook implementation.
3. **facebookPixel.test.tsx**: Tests specifically for Facebook Pixel event tracking.
4. **googleAnalytics.test.tsx**: Tests specifically for Google Analytics event tracking.
5. **clarity.test.tsx**: Tests for Microsoft Clarity tracking initialization.
6. **integration.test.tsx**: Comprehensive tests that verify all tracking services working together.

## Running the Tests

You can run the tests using the following commands:

```bash
# Run all tests
npm test

# Run tests with watch mode (useful during development)
npm run test:watch

# Run only analytics-related tests
npm run test:analytics

# Run tests with coverage report
npm run test:coverage
```

## Coverage

The test suite aims to cover:

1. Proper initialization of all tracking services (Google Analytics, Facebook Pixel, Microsoft Clarity)
2. Correct event tracking for user interactions:
   - Phone number clicks (Purchase event)
   - Address and map image clicks (FindLocation event)
3. Proper parameters being passed to each tracking service

## Test Implementation Details

- The tests mock the global `window.fbq`, `window.gtag`, and other tracking functions
- Script loading is simulated by mocking document.createElement and related DOM methods
- User interactions are simulated using React Testing Library's fireEvent
- The tests verify both the tracking initialization and event tracking functionality

## Adding New Tests

When adding new analytics tracking features to the application, remember to:

1. Add tests for initialization of any new tracking services
2. Add tests for new events being tracked
3. Update the integration tests to include the new tracking functionality