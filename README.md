# Afghan Student Union - University of Haripur (ASU-UOH) Student Portal

**Official Portal for International Student Bureaucratic Procedures**

A modern, responsive React-based single-page application (SPA) serving as the authoritative guide for Afghan students navigating critical visa, documentation, and administrative procedures in Pakistan.

---

## 🎯 Mission

Empower Afghan students studying at the University of Haripur by providing clear, organized, and reliable guidance through three essential bureaucratic processes:

1. **Embassy NOC** (No Objection Certificate) - Afghan Embassy clearance
2. **Bonafide Letter** - University student verification certificate  
3. **HEC NOC** - Higher Education Commission approval for visa extensions

---

## ✨ Features

### 🎨 User Experience
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Intuitive Navigation**: Fixed header with sticky tabs for easy access
- **Step-by-Step Guidance**: Visual process flows with expandable detail sections
- **Interactive Checklists**: Track document gathering progress with real-time feedback

### 📋 Core Components

#### 1. Hero & Secretary Address
- Bold welcome header with ASU-UOH branding
- Official message from Academic Secretary
- Key feature highlights

#### 2. International Bureaucracy Hub
- **Tab-based navigation** for three core pathways
- **Document checklists** with progress tracking
- **Step-by-step workflows** with collapsible details
- **Important notes** and procedural reminders

#### 3. Student Document Toolkit
- **Searchable template library** (6+ templates)
- **Copy-to-clipboard** functionality
- **Pre-formatted templates** with variable placeholders
- **Category filtering** (Bonafide, Embassy, HEC, Emergency)

#### 4. Announcements & Deadlines Board
- **Priority-based notifications** (High/Medium/Low)
- **Real-time deadline tracking**
- **Critical alerts** during visa season
- **Email subscription** option

#### 5. FAQ Section
- **15+ common questions** across categories
- **Category filtering** (All, Visa, NOC, Bonafide, etc.)
- **Expandable accordion** interface
- **Direct contact information**

#### 6. Professional Footer
- Quick links and navigation
- Contact information for ISS and ASU
- GitHub repository link
- Legal disclaimer and accessibility notice

---

## 🛠️ Tech Stack

- **Framework**: React 18 (Functional Components, Hooks)
- **Styling**: Tailwind CSS (Utility-first, fully customizable)
- **Icons**: Lucide React (Modern, lightweight icon library)
- **Build Tool**: Vite (Fast, optimized bundling)
- **Package Manager**: npm/yarn

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager
- Git

### 1. Clone or Download Repository
```bash
git clone https://github.com/asu-uoh/student-portal.git
cd ASU-UOH
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will open at `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
# or
yarn build
```

This creates an optimized `dist/` folder ready for deployment.

---

## 🚀 Deployment to GitHub Pages

### Option 1: Automated GitHub Actions

1. Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Push to `main` branch - GitHub Actions will automatically build and deploy

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Install GitHub Pages deployment tool:
```bash
npm install --save-dev gh-pages
```

3. Update `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

### Option 3: Using GitHub Pages Web Interface

1. Build: `npm run build`
2. Commit `dist/` folder: `git add dist/` → `git commit` → `git push`
3. Go to Repository Settings → Pages
4. Select "Deploy from a branch" → Choose `main` branch → select `/dist` folder
5. Save

## 🎨 Customization

### Brand Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  emerald: { /* Primary green/teal */ },
  navy: { /* Deep blue/slate */ },
  amber: { /* Gold/warm accent */ }
}
```

### Typography
Modify global styles in `src/index.css`:
```css
@layer components {
  .heading-lg { /* h1 styles */ }
  .heading-md { /* h2 styles */ }
  .btn-primary { /* primary button */ }
}
```

### Contact Information
Update contact details in:
- `Footer.jsx` - Footer contact cards
- `HECNOCPathway.jsx` - ISS contact section
- `FAQSection.jsx` - Support section

### Announcements & FAQs
Add new items to arrays in:
- `AnnouncementsBoard.jsx` - `announcements` array
- `FAQSection.jsx` - `faqs` array

### Document Templates
Add templates to:
- `DocumentToolkit.jsx` - `documents` array

## 🚨 Important Notes for Maintainers

## 📄 License

This project is maintained by the Afghan Student Union at the University of Haripur. Use for educational and informational purposes.

## ⚖️ Disclaimer

This portal provides information based on procedures as of the deployment date. Administrative procedures, fees, and timelines may change. Always verify current requirements with official offices:
- UOH International Student Office
- Afghan Embassy in Islamabad
- Higher Education Commission (HEC)

This is a community resource maintained by the Afghan Student Union and is not an official government or university publication.

---

**Last Updated**: June 2026  
**Version**: 1.0.0  
**Status**: Production-Ready for GitHub Pages Deployment
