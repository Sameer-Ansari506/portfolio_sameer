# 📝 Customization Guide

This guide will help you quickly customize the portfolio with your own information from your resume.

## Quick Start Checklist

### 1. Personal Information (5 minutes)

Open `app/page.tsx` and find the `personalInfo` object around line 44:

```typescript
const personalInfo = {
  name: "Sameer Ansari",           // ✏️ Your full name
  title: "Full Stack Developer",   // ✏️ Your job title
  location: "Your City, Country",  // ✏️ Your location
  email: "your.email@example.com", // ✏️ Your email
  phone: "+1234567890",            // ✏️ Your phone
  bio: "...",                      // ✏️ Short bio (2-3 sentences)
  github: "https://github.com/...",   // ✏️ Your GitHub profile
  linkedin: "https://linkedin.com/in/..." // ✏️ Your LinkedIn
};
```

### 2. Skills (5 minutes)

Update the `skills` array (around line 53) with your actual skills:

```typescript
const skills = [
  { 
    category: "Frontend", 
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"] 
  },
  { 
    category: "Backend", 
    items: ["Node.js", "Express", "Python", "Django", "REST APIs"] 
  },
  // Add more categories as needed
];
```

**Tips:**
- Group related skills together
- List skills in order of proficiency
- Include frameworks, languages, and tools

### 3. Projects (15 minutes)

Replace the `projects` array (around line 60) with your actual projects:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Brief description of what the project does and why it matters",
    tech: ["React", "Node.js", "MongoDB"], // Technologies used
    github: "https://github.com/yourusername/project", // GitHub link
    demo: "https://yourproject.com", // Live demo link
    highlights: [
      "Key feature or achievement 1",
      "Key feature or achievement 2",
      "Key feature or achievement 3"
    ]
  },
  // Add 3-6 of your best projects
];
```

**Tips:**
- Choose 3-6 of your best projects
- Focus on impact and results
- Include metrics when possible (e.g., "Served 10K+ users")
- If no live demo, you can link to screenshots or video

### 4. Work Experience (10 minutes)

Update the `experience` array (around line 94) with your work history:

```typescript
const experience = [
  {
    role: "Your Job Title",
    company: "Company Name",
    location: "City, Country",
    duration: "Jan 2023 - Present", // or "Jan 2023 - Dec 2023"
    responsibilities: [
      "Achievement or responsibility with specific impact",
      "Another key responsibility with metrics if possible",
      "Technical achievement or project you led",
      "Collaboration or leadership example"
    ]
  },
  // Add more positions (most recent first)
];
```

**Tips:**
- Start with most recent position
- Use action verbs (Led, Built, Improved, Developed)
- Include quantifiable results when possible
- 4-6 bullet points per position is ideal

### 5. Education (5 minutes)

Update the `education` array (around line 115):

```typescript
const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    location: "City, Country",
    duration: "2018 - 2022",
    gpa: "3.8/4.0", // Optional - remove if you prefer
    achievements: [
      "Dean's List",
      "Academic Scholarship",
      "Best Project Award"
    ]
  },
  // Add more degrees if applicable
];
```

**Tips:**
- Include relevant certifications
- Highlight academic achievements
- GPA is optional (include if 3.5+)

## 🎨 Design Customization

### Change Color Scheme

Find and replace these gradient classes in `app/page.tsx`:

**Blue-Purple (Default)**
```
from-blue-600 to-purple-600
```

**Other Options:**
- Green-Blue: `from-green-600 to-blue-600`
- Orange-Red: `from-orange-600 to-red-600`
- Pink-Purple: `from-pink-600 to-purple-600`
- Cyan-Blue: `from-cyan-600 to-blue-600`

### Update Metadata

In `app/layout.tsx`, update the metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your custom description",
  keywords: ["your", "keywords", "here"],
  // ...
};
```

## 📄 Add Your Resume

1. Export your resume as PDF
2. Name it `resume.pdf`
3. Place it in the `public` folder
4. The download button will automatically work

Or update the link in `app/page.tsx` (around line 183):
```typescript
href="/your-resume-name.pdf"
```

## 🖼️ Add Profile Photo (Optional)

Replace the initials circle with a photo:

1. Add your photo to `public` folder (e.g., `profile.jpg`)
2. In `app/page.tsx` (around line 172), replace the initials div with:

```tsx
<Image
  src="/profile.jpg"
  alt="Your Name"
  width={128}
  height={128}
  className="rounded-full"
/>
```

3. Import Image at the top:
```tsx
import Image from 'next/image';
```

## 📱 Social Media Links

Update social media links in the `personalInfo` object. You can also add more:

```typescript
// In personalInfo object
twitter: "https://twitter.com/yourusername",
instagram: "https://instagram.com/yourusername",
```

Then add the icons to the hero section (around line 195).

## 🚀 Going Live

### Before Deployment:

1. ✅ Replace ALL placeholder data with your information
2. ✅ Test all links (email, phone, social media, project links)
3. ✅ Add your resume PDF to the public folder
4. ✅ Test on mobile and desktop
5. ✅ Update README.md with your project name
6. ✅ Run `npm run build` to check for errors

### Deploy to Vercel:

1. Push code to GitHub
2. Sign up at vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
6. Done! Your site is live

## 💡 Pro Tips

1. **Keep It Updated**: Add new projects as you complete them
2. **Be Specific**: Use numbers and metrics in descriptions
3. **Quality Over Quantity**: 3 great projects > 10 mediocre ones
4. **Test Links**: Before sharing, click every link to ensure they work
5. **Get Feedback**: Ask friends or colleagues to review
6. **Mobile First**: Most recruiters view on mobile
7. **Loading Speed**: Optimize images before adding
8. **Personal Touch**: Add a photo and personal bio

## 🆘 Need Help?

- Check the main README.md for technical issues
- All data structures are in `app/page.tsx`
- Styling is in `app/globals.css` and Tailwind classes
- Search for "TODO" or "Replace" comments in the code

## 📊 Content Tips

### Bio (About Section)
- 2-3 sentences
- Who you are, what you do, what you're passionate about
- Keep it conversational but professional

### Project Descriptions
- What problem does it solve?
- Who is it for?
- What makes it special?
- 2-3 sentences max

### Experience Bullets
- Start with action verb
- Include result or impact
- Be specific with technologies
- Quantify when possible

### Skills
- List only skills you're comfortable discussing in an interview
- Group by category
- Order by proficiency
- Include soft skills in "Other" category if desired

---

**Time to Complete Full Customization: ~45 minutes**

Once you're done, you'll have a professional, modern portfolio ready to impress! 🎉

