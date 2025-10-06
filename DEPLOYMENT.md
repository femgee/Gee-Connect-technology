# Deployment Guide

This guide covers different deployment options for the HRJ Consulting website.

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended)

Vercel provides excellent React/Vite support with automatic deployments.

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Vite settings

3. **Add Environment Variables**:
   - In Vercel dashboard, go to Project Settings > Environment Variables
   - Add:
     ```
     VITE_SUPABASE_URL = https://your-project-id.supabase.co
     VITE_SUPABASE_ANON_KEY = your-anon-key-here
     ```

4. **Deploy**: Click "Deploy" - your site will be live in minutes!

### Option 2: Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to deploy
   - Or connect your GitHub repository for automatic deployments

3. **Configure Environment Variables**:
   - In Netlify dashboard: Site Settings > Environment Variables
   - Add your Supabase credentials

### Option 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## 🔧 Build Configuration

### Vite Configuration

The project uses Vite with these optimizations:

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
  }
});
```

### Environment Variables

Required environment variables for production:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 🗄️ Database Setup for Production

### Supabase Production Setup

1. **Create Production Project**:
   - Create a new Supabase project for production
   - Use a strong database password
   - Choose a region close to your users

2. **Run Migrations**:
   - Go to SQL Editor in Supabase dashboard
   - Copy and run the migration from `supabase/migrations/`
   - Verify tables are created correctly

3. **Configure RLS Policies**:
   - Ensure Row Level Security is enabled
   - Test policies work correctly
   - Verify anonymous users can submit forms

4. **Test Database Connection**:
   - Submit a test contact form
   - Check data appears in Supabase dashboard
   - Verify real-time updates work

## 🔒 Security Checklist

Before deploying to production:

- [ ] Environment variables are set correctly
- [ ] Database RLS policies are enabled
- [ ] API keys are the anon/public keys (not service role)
- [ ] Rate limiting is configured
- [ ] Input validation is working
- [ ] CORS headers are properly set
- [ ] No sensitive data in client-side code

## 📊 Performance Optimization

### Build Optimizations

The production build includes:
- Code splitting
- Tree shaking
- Asset optimization
- Gzip compression
- Source map generation (disabled for smaller builds)

### Runtime Optimizations

- Lazy loading of components
- Image optimization
- Efficient re-renders with React hooks
- Debounced form inputs
- Cached API responses

## 🔍 Monitoring and Analytics

### Production Monitoring

Consider adding:
- Error tracking (Sentry)
- Performance monitoring (Web Vitals)
- User analytics (Google Analytics, Plausible)
- Uptime monitoring (Pingdom, UptimeRobot)

### Supabase Monitoring

Monitor your Supabase project:
- Database performance
- API usage
- Storage usage
- Real-time connections

## 🚨 Troubleshooting

### Common Deployment Issues

1. **Environment Variables Not Working**:
   - Ensure variables start with `VITE_`
   - Restart development server after changes
   - Check deployment platform has variables set

2. **Database Connection Fails**:
   - Verify Supabase project is active
   - Check API keys are correct
   - Ensure RLS policies allow access

3. **Build Fails**:
   - Run `npm run typecheck` to find TypeScript errors
   - Check all imports are correct
   - Verify all dependencies are installed

4. **404 Errors on Refresh**:
   - Configure your hosting provider for SPA routing
   - Add `_redirects` file for Netlify
   - Configure `vercel.json` for Vercel

### Debugging Steps

1. **Check Browser Console**: Look for JavaScript errors
2. **Network Tab**: Check API requests are working
3. **Supabase Logs**: Check database logs for errors
4. **Build Locally**: Test production build locally with `npm run preview`

## 📈 Scaling Considerations

As your application grows:

### Database Scaling
- Monitor Supabase usage limits
- Consider upgrading Supabase plan
- Implement database indexing
- Add caching layers

### Frontend Scaling
- Implement CDN for static assets
- Add service worker for offline support
- Consider code splitting for larger applications
- Implement lazy loading for images

### Performance Monitoring
- Set up Core Web Vitals monitoring
- Track user interactions
- Monitor API response times
- Set up alerts for downtime

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    - name: Install dependencies
      run: npm install
    - name: Build
      run: npm run build
      env:
        VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
        VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
    - name: Deploy to Vercel
      uses: vercel/action@v1
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

This ensures automatic deployments when you push to the main branch.