# Game Developer Portfolio - UmbraGaming

A modern, responsive portfolio website showcasing game development projects and skills.

## 🚀 Quick Start

1. Clone this repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## 📁 Project Structure

```
├── public/           # Static assets (images, logos, etc.)
├── src/
│   ├── components/   # React components
│   ├── App.tsx       # Main app component
│   ├── main.tsx      # Entry point
│   └── index.css     # Global styles
├── dist/             # Built files (generated)
└── package.json      # Dependencies and scripts
```

## 🛠️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **EmailJS** - Contact form

## 📧 Contact Form Setup

The contact form uses EmailJS. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the IDs in `src/components/Contact.tsx`:
   - Service ID: `service_6d0cgjh`
   - Template ID: `template_d0ua8qf`
   - Public Key: `3jWORblftQyjbCb8U`

## 🚀 Deployment

### GitHub Pages

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select "GitHub Actions" as source
4. The workflow in `.github/workflows/deploy.yml` will handle deployment

### Manual Deployment

1. Run `npm run build`
2. Upload the `dist` folder contents to your web server

## 🎮 Features

- **Responsive Design** - Works on all devices
- **Solar Eclipse Hero** - Animated background with eclipse effect
- **Project Showcase** - Major projects, other projects, and upcoming projects
- **Skills Section** - Interactive dropdowns for tech stack and other skills
- **Testimonials** - Colleague recommendations
- **Contact Form** - Working contact form with validation
- **Smooth Animations** - CSS animations and transitions

## 📱 Sections

1. **Hero** - Introduction with animated solar eclipse
2. **About** - Personal story and core expertise
3. **Skills** - Tech stack and other skills with interactive dropdowns
4. **Projects** - Showcase of games and projects
5. **Testimonials** - Colleague recommendations
6. **Contact** - Contact form and social links

## 🎨 Design Features

- Dark theme with blue accent colors
- Custom animations and micro-interactions
- Glassmorphism effects
- Responsive grid layouts
- Hover states and transitions

## 📄 License

This project is for portfolio purposes. Feel free to use as inspiration for your own portfolio.

---

Built with ❤️ by Joshua Goulden - UmbraGaming