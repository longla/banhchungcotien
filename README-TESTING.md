# Analytics and Facebook Pixel Testing

This repository includes comprehensive tests for analytics and Facebook Pixel event tracking. This document provides instructions for running these tests and understanding the testing strategy.

## Quick Start

To run the analytics tests:

```bash
# Using the test script (recommended)
./scripts/test-analytics.sh

# Or manually
npm test -- --testPathPattern=analytics
```

## Test Structure

The tests are organized as follows:

1. **analytics.test.tsx**: Tests for user interactions and their corresponding analytics events
2. **pixel-verification.test.ts**: Simple verification of Facebook Pixel and Google Analytics initialization

## What's Being Tested

These tests verify:

1. **Analytics Initialization**:
   - Facebook Pixel is initialized with the correct Pixel ID (1312231683111702)
   - Google Analytics is initialized with the correct tracking ID (G-JJ2JYJGKCP)
   - Microsoft Clarity is initialized

2. **Event Tracking**:
   - Phone button clicks trigger both Facebook "Purchase" event and Google Analytics "phone_click" event
   - Address link and map image clicks trigger Facebook "FindLocation" event
   - Window.open is called correctly for the map link

## Troubleshooting

If you encounter issues running the tests:

1. Make sure all dependencies are installed:
   ```bash
   npm install
   ```

2. Try running with the verbose flag for more detailed output:
   ```bash
   npm test -- --testPathPattern=analytics --verbose
   ```

3. If you're updating analytics code, make sure to update the tests to match the new implementation.

## Adding New Tests

When adding new analytics features:

1. Add tests for initialization of any new tracking services
2. Add tests for new events being tracked
3. Ensure tests pass with both the old and new code to maintain backward compatibility