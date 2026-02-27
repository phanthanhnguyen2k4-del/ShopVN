# 🚀 Deployment Guide - FurniShop Frontend

## 📋 Prerequisites

- Node.js 14+
- Git
- Hosting account (Vercel, Netlify, AWS, DigitalOcean, etc.)
- Backend API deployed and accessible

## 🏗️ Build Process

### 1. Production Build

```bash
# Install dependencies
npm install

# Build for production
npm run build

# This creates an optimized production build in the 'build' folder
```

### 2. Optimize Build Size

```bash
# Check bundle size
npm run build -- --analyze

# Optimize images (optional)
npm install imagemin-cli
npx imagemin /* --out-dir=optimized-images
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest deployment option for React apps.

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

**Or via Git:**
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repo
3. Follow the setup wizard
4. Set environment variables in project settings
5. Deploy

### Option 2: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=build
```

**Or via Git:**
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repo
3. Deploy settings:
   - Build command: `npm run build`
   - Publish directory: `build`
4. Set environment variables
5. Deploy

### Option 3: AWS S3 + CloudFront

```bash
# Build the project
npm run build

# Install AWS CLI
pip install awscli

# Configure AWS credentials
aws configure

# Upload to S3
aws s3 sync build/ s3://your-bucket-name/ --delete

# Create CloudFront distribution (via AWS console)
# Point to S3 bucket as origin
```

### Option 4: Docker + Any Server

Create `Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/build ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
```

Build and run:

```bash
# Build Docker image
docker build -t furnishop-frontend .

# Run container
docker run -p 3000:3000 furnishop-frontend

# Push to Docker Hub
docker tag furnishop-frontend username/furnishop-frontend
docker push username/furnishop-frontend
```

## 🔧 Environment Configuration

### Create `.env.production`

```env
REACT_APP_API_URL=https://api.furnishop.com/api
REACT_APP_ENV=production
REACT_APP_ENABLE_ADMIN=true
REACT_APP_ENABLE_BLOG=true
REACT_APP_ENABLE_REVIEWS=true
```

### Set Environment Variables on Hosting Platform

**Vercel:**
- Project Settings → Environment Variables
- Add each variable as defined in `.env.production`

**Netlify:**
- Build & Deploy → Environment
- Add environment variables

**AWS:**
- Use Systems Manager Parameter Store or Secrets Manager

## ✅ Pre-Deployment Checklist

- [ ] All code committed to git
- [ ] No console.log() statements in production code
- [ ] Environment variables configured
- [ ] API endpoints point to production servers
- [ ] Testing completed (unit, integration, E2E)
- [ ] Performance optimized (image sizes, lazy loading)
- [ ] Security headers configured
- [ ] HTTPS enabled
- [ ] Error tracking setup (Sentry, etc.)
- [ ] Analytics configured (Google Analytics, etc.)

## 📊 Performance Optimization

### 1. Code Splitting

React Router automatically code-splits pages. No additional config needed.

### 2. Image Optimization

```javascript
// Use next-gen image formats
<img src="image.webp" alt="description" />

// Or use responsive images
<picture>
  <source srcSet="image-large.webp" media="(min-width: 1024px)" />
  <source srcSet="image-small.webp" media="(max-width: 768px)" />
  <img src="image-fallback.jpg" alt="description" />
</picture>
```

### 3. Lazy Loading

```javascript
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./components/Heavy'));

<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
```

### 4. Minimize Dependencies

```bash
# Analyze bundle
npm install --save-dev webpack-bundle-analyzer
```

## 🔒 Security

### 1. Security Headers

Add to web server config (nginx, Apache, etc.):

```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'
```

### 2. CORS Configuration

Backend should only allow requests from your domain:

```java
// Spring Boot
@Configuration
public class CorsConfig {
  @Bean
  public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowedOrigins(Arrays.asList("https://furnishop.com"));
    config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
    config.setAllowedHeaders(Arrays.asList("*"));
    config.setAllowCredentials(true);
    
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", config);
    return source;
  }
}
```

### 3. API Key Protection

Don't expose sensitive keys in frontend. Use:
- Backend middleware for sensitive operations
- OAuth tokens stored securely
- HTTP-only cookies for sessions

## 📈 Monitoring & Analytics

### 1. Error Tracking (Sentry)

```bash
npm install @sentry/react
```

```javascript
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'your-sentry-dsn',
  environment: process.env.REACT_APP_ENV,
});
```

### 2. Analytics (Google Analytics)

```bash
npm install react-ga
```

```javascript
import ReactGA from 'react-ga';

ReactGA.initialize('GA_TRACKING_ID');
ReactGA.pageview(window.location.pathname);
```

### 3. Performance Monitoring

```bash
npm install web-vitals
```

```javascript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## 🚨 Troubleshooting

### Issue: Build fails with memory error

```bash
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Issue: White screen after deployment

- Check browser console for errors
- Verify API URL in `.env.production`
- Check if backend is accessible
- Ensure routing setup is correct

### Issue: Slow performance

- Use Chrome DevTools to analyze
- Check Network tab for large files
- Use Lighthouse for audit
- Optimize images
- Enable gzip compression on server

## 🔄 CI/CD Pipeline Example

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## 📝 Further Reading

- [React Deployment Documentation](https://react.dev/learn/deployment)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

---

**Happy Deployment! 🚀**
