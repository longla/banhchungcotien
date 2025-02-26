#!/bin/bash

# Make the script exit on any error
set -e

echo "Starting Analytics Testing..."

# Install dependencies if needed
if [ ! -d "node_modules/@testing-library" ]; then
  echo "Installing testing dependencies..."
  npm install --no-save @testing-library/jest-dom@7.0.0 @testing-library/react@15.0.0 @types/jest@29.5.12 jest@29.7.0 jest-environment-jsdom@29.7.0 ts-jest@29.1.2
fi

# Run the tests
echo "Running analytics tests..."
npm test -- --testPathPattern=__tests__/analytics.test.tsx

echo "Analytics tests completed successfully!"