# 🚀 Personal Portfolio Website

A modern, creative, and responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, beautiful gradients, and an intuitive user experience.

## ✨ Features

- **Modern Design**: Clean, creative interface with gradient accents and smooth animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Fast Performance**: Built with Next.js for optimal loading speed
- **Easy Customization**: Simple data structures to update your information
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility

## 🎨 Sections

- **Hero**: Eye-catching introduction with social links
- **About**: Personal information and contact details
- **Skills**: Organized technical skills by category
- **Projects**: Showcase of your best work with live demos and source code
- **Experience**: Professional work history with detailed responsibilities
- **Education**: Academic background and achievements
- **Contact**: Multiple ways to get in touch

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation

1. Navigate to the project directory:
```bash
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Customization

### Update Your Information

Edit the data in `app/page.tsx`:

1. **Personal Information** (`personalInfo` object):
   - Update name, title, location, email, phone
   - Add your bio
   - Update social media links

2. **Skills** (`skills` array):
   - Modify skill categories
   - Add or remove technical skills

3. **Projects** (`projects` array):
   - Add your project details
   - Update descriptions, tech stack, and links
   - Include project highlights

4. **Experience** (`experience` array):
   - Add your work history
   - Include responsibilities and achievements

5. **Education** (`education` array):
   - Update degree, institution, and dates
   - Add academic achievements

### Customize Colors

The portfolio uses a blue-to-purple gradient theme. To change colors, search and replace in `app/page.tsx`:
- `from-blue-600 to-purple-600` - Main gradient
- `bg-blue-600` - Primary color
- Modify Tailwind colors as needed

### Add Your Resume PDF

Place your resume PDF in the `public` folder and name it `resume.pdf`, or update the download link in the hero section.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Other Platforms

You can also deploy to:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Your own server

## 📄 Build for Production

```bash
npm run build
npm start
```

## 🎯 Performance

- Lighthouse Score: 95+
- Fast page loads with Next.js optimization
- Optimized images and assets
- Smooth animations without performance hit

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📝 License

This project is open source and available under the MIT License.

## 💡 Tips

1. **Images**: Add professional photos to make it more personal
2. **Projects**: Include live demos and GitHub links
3. **Metrics**: Add quantifiable achievements in experience section
4. **Keep Updated**: Regularly update with new projects and skills
5. **Analytics**: Consider adding Google Analytics or similar

## 🐛 Troubleshooting

If you encounter issues:
1. Delete `node_modules` and `.next` folders
2. Run `npm install` again
3. Clear browser cache
4. Check Node.js version (v18+ recommended)

## 📧 Support

For questions or issues, feel free to open an issue on GitHub or reach out directly.

---

**Built with ❤️ using Next.js**
