# GitHub Pages Deployment Guide

## Method 1: Download and Upload (Recommended)

### Step 1: Download Your Project
1. In this environment, all your files are ready
2. The build has been created in the `dist` folder
3. Download all project files to your computer

### Step 2: Create New GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click "New repository" (green button)
3. Name it: `game-dev-portfolio` (or any name you prefer)
4. Make sure it's **PUBLIC** (required for free GitHub Pages)
5. Check "Add a README file"
6. Click "Create repository"

### Step 3: Upload Your Files
1. In your new repository, click "uploading an existing file"
2. Drag and drop ALL the files from your downloaded project
3. Or click "choose your files" and select everything
4. Write commit message: "Initial portfolio upload"
5. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to your repository Settings tab
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The deployment workflow will automatically run

### Step 5: Access Your Site
- Your site will be available at: `https://yourusername.github.io/game-dev-portfolio`
- It may take 5-10 minutes for the first deployment

## Method 2: Git Clone and Push

If you prefer using Git commands:

```bash
# On your computer
git clone https://github.com/yourusername/game-dev-portfolio.git
cd game-dev-portfolio

# Copy all your downloaded files into this folder
# Then:
git add .
git commit -m "Add portfolio website"
git push origin main
```

## Important Files for GitHub Pages

Make sure these files are included:
- `.github/workflows/deploy.yml` - Deployment workflow
- `package.json` - Dependencies and build scripts
- `vite.config.ts` - Build configuration with correct base path
- All `src/` files - Your React components
- All `public/` files - Your images and assets

## Troubleshooting

### Site Not Loading
- Check that repository is public
- Verify GitHub Pages is enabled in Settings
- Check Actions tab for deployment status
- Wait 5-10 minutes after first deployment

### Images Not Showing
- Make sure all images are in the `public/` folder
- Check that image paths start with `./` (like `./image.png`)
- Verify image files were uploaded correctly

### Contact Form Not Working
- EmailJS configuration is already set up
- Form should work immediately after deployment

## Custom Domain (Optional)

To use your own domain:
1. Add a `CNAME` file to the `public/` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

---

Your portfolio will be live and accessible worldwide once deployed!