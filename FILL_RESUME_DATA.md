# 📝 How to Fill in Your Resume Data

Your PDF resume couldn't be automatically parsed, but I've created a template with sample data. Follow this guide to replace it with your actual information.

## 🎯 Quick Start

Open `app/page.tsx` and find these sections. Replace ALL the sample data with your actual resume information.

---

## 1️⃣ **Personal Information** (Lines 62-72)

```typescript
const personalInfo = {
  name: "Sameer Ansari",                    // ✏️ Your full name
  title: "Full Stack Developer | Software Engineer",  // ✏️ Your job title(s)
  location: "Your City, Country",           // ✏️ Your location
  email: "sameer.ansari@example.com",       // ✏️ Your email
  phone: "+1 (234) 567-8900",               // ✏️ Your phone number
  bio: "Passionate software engineer...",    // ✏️ Short bio (2-3 sentences)
  github: "https://github.com/sameeransari", // ✏️ Your GitHub profile
  linkedin: "https://linkedin.com/in/sameeransari", // ✏️ Your LinkedIn
  twitter: "https://twitter.com/sameeransari"  // ✏️ Optional: Twitter
};
```

---

## 2️⃣ **Skills** (Lines 74-91)

Update with your actual technical skills. Keep the emoji or change it!

```typescript
const skills = [
  { 
    category: "Frontend Development",  // Category name
    items: ["React.js", "Next.js", "TypeScript", ...],  // Your skills
    icon: "💻"  // Fun emoji (optional)
  },
  // Add more categories...
];
```

**Tips:**
- Group related skills together
- List most proficient skills first
- Include frameworks, languages, and tools

---

## 3️⃣ **Projects** (Lines 93-132)

Replace with 3-6 of your best projects:

```typescript
const projects = [
  {
    title: "Project Name",
    description: "What does it do? What problem does it solve?",
    tech: ["React", "Node.js", "MongoDB"],  // Technologies used
    github: "https://github.com/yourusername/project",  // GitHub link
    demo: "https://project-demo.com",  // Live demo link
    highlights: [
      "Key achievement with numbers (e.g., 10K users)",
      "Important feature",
      "Performance metric (e.g., 99.9% uptime)",
      "Another highlight"
    ]
  },
  // Add more projects...
];
```

**Tips:**
- Include metrics when possible (users, performance, etc.)
- Show impact and results
- If no live demo, link to screenshots or video

---

## 4️⃣ **Work Experience** (Lines 134-165)

Add your job history (most recent first):

```typescript
const experience = [
  {
    role: "Your Job Title",
    company: "Company Name",
    location: "City, State/Country",
    duration: "Jan 2023 - Present",  // or "Jan 2023 - Dec 2023"
    responsibilities: [
      "Led/Built/Developed... with specific impact",
      "Use action verbs + quantifiable results",
      "Include metrics (%, numbers, scale)",
      "Mention technologies used"
    ],
    tech: ["React", "Node.js", "AWS"]  // Optional: Main technologies
  },
  // Add more positions...
];
```

**Tips:**
- Start each bullet with an action verb
- Include numbers/metrics
- Show impact, not just tasks
- 4-6 bullets per job is ideal

---

## 5️⃣ **Education** (Lines 167-180)

Add your degree(s):

```typescript
const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    location: "City, State",
    duration: "2017 - 2021",
    gpa: "3.8/4.0",  // Optional: Include if 3.5+
    achievements: [
      "Dean's List",
      "Scholarship Name",
      "Award or Honor",
      "Competition wins"
    ]
  },
  // Add more degrees if applicable
];
```

---

## 🎨 **Customization Tips**

### Change Color Scheme

Find and replace these gradient classes in `app/page.tsx`:

**Current:** `from-cyan-500 via-purple-500 to-pink-500`

**Options:**
- Blue-Purple: `from-blue-500 via-purple-500 to-indigo-600`
- Green-Cyan: `from-green-400 via-cyan-500 to-blue-500`
- Orange-Red: `from-orange-500 via-red-500 to-pink-600`
- Sunset: `from-yellow-400 via-orange-500 to-red-500`

### Add Profile Photo

1. Add your photo to `public` folder as `profile.jpg`
2. In `app/page.tsx` around line 216, replace the initials div with:

```tsx
<Image
  src="/profile.jpg"
  alt={personalInfo.name}
  width={144}
  height={144}
  className="rounded-full object-cover"
/>
```

---

## 📄 **Add Your Resume PDF**

1. Export your resume as PDF
2. Name it `Resume_Sameer_Ansari.pdf` (or update the link in the code)
3. Place it in the `public` folder
4. The "Download Resume" button will work automatically!

---

## ✅ **Checklist Before Going Live**

- [ ] Updated all personal information
- [ ] Added all your skills
- [ ] Added 3-6 best projects with links
- [ ] Added work experience
- [ ] Added education
- [ ] Tested all links (email, GitHub, LinkedIn, project demos)
- [ ] Added resume PDF to public folder
- [ ] Tested on mobile and desktop
- [ ] Tested both light and dark modes
- [ ] Run `npm run build` to check for errors

---

## 🚀 **Deploy**

Once you're done:

```bash
# Test locally
npm run dev

# Build for production
npm run build

# Deploy to Vercel (free)
# 1. Push to GitHub
# 2. Go to vercel.com
# 3. Import your repository
# 4. Deploy!
```

---

## 🆘 **Need Help?**

- All data is in `app/page.tsx` - lines 62-180
- Don't change the structure, just the content
- Keep the format similar to the examples
- Test frequently: `npm run dev` and check http://localhost:3000

---

## 💡 **Pro Tips**

1. **Be Specific**: Use numbers, metrics, and concrete achievements
2. **Show Impact**: Don't just list tasks, show results
3. **Keep Updated**: Add new projects and skills regularly
4. **Test Everything**: Click every link before sharing
5. **Get Feedback**: Ask friends/colleagues to review
6. **Mobile First**: Most recruiters view on phones
7. **Professional Email**: Use a professional email address
8. **Working Links**: Ensure all project demos work

---

**Time to complete: ~30-45 minutes**

Once done, you'll have a stunning, professional portfolio that stands out! 🎉


