# CLAUDE.md - Project Guidelines

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build the project
- `npm run start` - Start production server
- `npm run lint` - Run linting checks

## Code Style Guidelines
- **TypeScript**: Use strong typing with interfaces (see `BlogPostProps` example)
- **React Component Style**: Functional components with hooks, explicit React.FC typing
- **Imports**: Group imports by external libraries first, then internal modules
- **Naming**: camelCase for variables/functions, PascalCase for components/interfaces
- **File Structure**: Component files use PascalCase (.tsx), utility files use camelCase (.ts)
- **Error Handling**: Prefer optional chaining (?.) and nullish coalescing (??) for safe access
- **State Management**: Use React hooks (useState, useEffect) for component state
- **Analytics**: Wrap tracking in conditional checks (typeof window !== "undefined")
- **CSS**: Use Tailwind CSS classes for styling with semantic class ordering
- **Client Components**: Mark with "use client" directive when using browser APIs

## Type Declarations
Declare global interfaces when extending window object (see analytics.ts)