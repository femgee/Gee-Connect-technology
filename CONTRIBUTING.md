# Contributing to HRJ Consulting Website

Thank you for your interest in contributing to the HRJ Consulting website! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

If you find a bug or have a suggestion:

1. **Check existing issues** to avoid duplicates
2. **Create a new issue** with:
   - Clear, descriptive title
   - Detailed description of the problem
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser and device information

### Suggesting Features

For new features:

1. **Open an issue** with the "enhancement" label
2. **Describe the feature** and its benefits
3. **Provide use cases** and examples
4. **Consider implementation** complexity

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with clear messages**
6. **Push to your fork**
7. **Create a Pull Request**

## 📋 Development Guidelines

### Code Style

We use ESLint and TypeScript for code quality:

```bash
# Run linting
npm run lint

# Run type checking
npm run typecheck
```

### Code Standards

- **TypeScript**: Use TypeScript for all new code
- **Components**: Use functional components with hooks
- **Styling**: Use Tailwind CSS classes
- **Naming**: Use descriptive, camelCase names
- **Comments**: Add comments for complex logic

### File Organization

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── lib/           # Utility libraries and configurations
├── utils/         # Helper functions
└── types/         # TypeScript type definitions
```

### Component Guidelines

```typescript
// Good component structure
interface ComponentProps {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const Component: React.FC<ComponentProps> = ({ 
  title, 
  isActive = false, 
  onClick 
}) => {
  return (
    <div className="component-class">
      <h2>{title}</h2>
    </div>
  );
};
```

## 🧪 Testing

### Manual Testing

Before submitting:

1. **Test all features** work correctly
2. **Check responsive design** on different screen sizes
3. **Verify accessibility** with keyboard navigation
4. **Test form submissions** with valid/invalid data
5. **Check browser compatibility**

### Database Testing

When making database changes:

1. **Test with Supabase connected**
2. **Test without Supabase** (fallback behavior)
3. **Verify RLS policies** work correctly
4. **Test edge cases** and error handling

## 🎨 Design Guidelines

### Visual Design

- **Consistency**: Follow existing design patterns
- **Accessibility**: Ensure good contrast ratios
- **Responsiveness**: Test on mobile, tablet, desktop
- **Performance**: Optimize images and animations

### Tailwind CSS

- **Use existing classes** when possible
- **Create custom components** for repeated patterns
- **Follow mobile-first** responsive design
- **Use semantic color names** (blue-700, gray-600)

### Animation Guidelines

- **Subtle animations** that enhance UX
- **Respect user preferences** (prefers-reduced-motion)
- **Performance conscious** animations
- **Consistent timing** and easing

## 🔧 Technical Requirements

### Dependencies

- **Minimize new dependencies**: Only add if necessary
- **Use established libraries**: Prefer well-maintained packages
- **Check bundle size**: Avoid large dependencies
- **Update existing**: Keep dependencies current

### Performance

- **Optimize images**: Use appropriate formats and sizes
- **Code splitting**: Lazy load when beneficial
- **Bundle analysis**: Monitor bundle size
- **Core Web Vitals**: Maintain good performance scores

### Security

- **Input validation**: Validate all user inputs
- **Sanitization**: Clean user data
- **Environment variables**: Never commit secrets
- **Dependencies**: Keep packages updated

## 📝 Pull Request Process

### Before Submitting

1. **Update documentation** if needed
2. **Add/update tests** for new features
3. **Run all checks**:
   ```bash
   npm run lint
   npm run typecheck
   npm run build
   ```
4. **Test locally** with production build

### PR Description

Include in your PR:

- **Clear title** describing the change
- **Detailed description** of what was changed
- **Screenshots** for UI changes
- **Testing notes** for reviewers
- **Breaking changes** if any

### Review Process

1. **Automated checks** must pass
2. **Code review** by maintainers
3. **Testing** by reviewers
4. **Approval** required before merge

## 🐛 Bug Fix Guidelines

### Priority Levels

- **Critical**: Security issues, data loss, site down
- **High**: Major functionality broken
- **Medium**: Minor functionality issues
- **Low**: Cosmetic issues, enhancements

### Bug Fix Process

1. **Reproduce the bug** locally
2. **Identify root cause**
3. **Create minimal fix**
4. **Test thoroughly**
5. **Document the fix**

## 🚀 Feature Development

### Planning

- **Start with an issue** to discuss the feature
- **Consider user impact** and use cases
- **Plan implementation** approach
- **Consider breaking changes**

### Implementation

- **Start small**: MVP first, then iterate
- **Maintain backwards compatibility**
- **Add proper error handling**
- **Include user feedback**

## 📚 Documentation

### Code Documentation

- **JSDoc comments** for complex functions
- **README updates** for new features
- **Type definitions** for all interfaces
- **Examples** in documentation

### User Documentation

- **Update README** for new features
- **Add setup instructions** for new requirements
- **Include troubleshooting** for common issues
- **Provide examples** and use cases

## 🔍 Code Review Checklist

### For Reviewers

- [ ] Code follows style guidelines
- [ ] Changes are well-tested
- [ ] Documentation is updated
- [ ] No security vulnerabilities
- [ ] Performance impact considered
- [ ] Accessibility maintained
- [ ] Mobile responsiveness verified

### For Contributors

- [ ] All tests pass
- [ ] Code is properly formatted
- [ ] No console errors
- [ ] Responsive design works
- [ ] Accessibility tested
- [ ] Documentation updated
- [ ] Performance impact minimal

## 🎯 Getting Started

### First Contribution

1. **Look for "good first issue"** labels
2. **Start with documentation** improvements
3. **Fix small bugs** to get familiar
4. **Ask questions** in issues or discussions

### Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/hrj-consulting-website.git

# Install dependencies
npm install

# Start development server
npm run dev

# Create feature branch
git checkout -b feature/your-feature
```

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and ideas
- **Email**: admins@hrjconsulting.eu for urgent matters

## 🙏 Recognition

Contributors will be recognized in:
- **Contributors section** in README
- **Release notes** for significant contributions
- **GitHub contributors** page

Thank you for contributing to make this project better! 🚀