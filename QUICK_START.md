# ASU-UOH Student Portal - Quick Start Guide

## 🚀 Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 📁 Component Overview

### Header (`Header.jsx`)
- Sticky navigation with smooth scrolling
- Mobile-responsive menu toggle
- Navigation links to all major sections

### Hero Section (`SecretaryAddress.jsx`)
- Welcome banner with university branding
- Academic Secretary's mission statement
- Feature highlights with icons

### Bureaucracy Hub (`BureaucracyHub.jsx`)
- Tab-based navigation for 3 pathways
- Smooth tab switching with animations

### Pathways (3 Components)
1. **EmbassyNOCPathway.jsx** - Embassy NOC procedures
2. **BonafideLetterPathway.jsx** - University Bonafide Letter process
3. **HECNOCPathway.jsx** - HEC NOC application workflow

Each includes:
- Interactive document checklist with progress tracking
- Step-by-step expandable process guide
- Important notes and critical warnings
- Contact information

### DocumentToolkit (`DocumentToolkit.jsx`)
- Searchable template library (6 templates)
- Copy-to-clipboard for easy template usage
- Category filtering system
- Template expansion with full text view

### AnnouncementsBoard (`AnnouncementsBoard.jsx`)
- Priority-based announcement display
- Type-based categorization (deadline, update, notice, event, message)
- Email subscription section
- Critical reminder banner

### FAQSection (`FAQSection.jsx`)
- 15+ FAQ entries organized by category
- Expandable accordion interface
- Category filtering
- Contact card with support options

### Footer (`Footer.jsx`)
- Company/organization info
- Quick links to all sections
- Contact information cards
- GitHub repository link
- Legal disclaimer

---

## 🎨 Styling System

### Color Palette
- **Primary (Teal)**: `text-teal-600`, `bg-teal-50`, `border-teal-200`
- **Secondary (Navy)**: `text-navy-800`, `bg-navy-900`
- **Accent (Amber)**: `text-amber-500`, `bg-amber-50`
- **Neutral**: Slate and stone grays

### Reusable Classes
```css
.btn-primary      /* Teal button */
.btn-secondary    /* Light gray button */
.btn-small        /* Amber small button */
.card-elevated    /* Card with shadow */
.card-outline     /* Card with border */
.heading-lg       /* H1 styling */
.heading-md       /* H2 styling */
.heading-sm       /* H3 styling */
.text-muted       /* Light gray text */
```

### Animations
- `animate-fade-in` - Smooth opacity transition
- `animate-slide-down` - Slide from top with opacity
- Transitions on all interactive elements

---

## 🔄 State Management

Uses React Hooks for local state:
- `useState` for tab selection, checkbox tracking, accordion expansion
- `setExpandedFAQ`, `setActiveTab`, `setChecklist` patterns
- No external state management needed (frontend-only architecture)

---

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px` (sm)
- **Tablet**: `640px - 1024px` (md, lg)
- **Desktop**: `> 1024px`

Mobile-first approach with:
- Collapsible navigation menu
- Full-width layouts on mobile
- Grid layouts on tablet+
- Adjusted padding and spacing per screen size

---

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

Creates `dist/` folder with optimized code.

### Preview Production Build Locally
```bash
npm run preview
```

### Deploy to GitHub Pages

**Option 1: Using GitHub Actions (Recommended)**
```bash
# Create `.github/workflows/deploy.yml` with provided config
# Push to main branch - auto-deploys
```

**Option 2: Manual Deployment**
```bash
npm run deploy
# Requires gh-pages installed and GitHub token configured
```

**Option 3: Web Interface**
- Go to Repository Settings → Pages
- Select `main` branch and `/dist` folder
- Save

---

## ✅ Content Maintenance Checklist

### Before Deployment
- [ ] Verify all phone numbers and email addresses are current
- [ ] Update processing timelines if changed
- [ ] Review document templates for accuracy
- [ ] Check FAQ entries for completeness
- [ ] Test all links and buttons work
- [ ] Test on mobile device (not just browser DevTools)

### During Visa Season (April-August)
- [ ] Update announcements weekly
- [ ] Monitor and adjust processing time estimates
- [ ] Add critical deadline alerts
- [ ] Increase engagement through email notifications

### Monthly Maintenance
- [ ] Review FAQ for new common questions
- [ ] Update announcements and deadlines
- [ ] Check for any procedure changes with ISS
- [ ] Monitor user feedback (uoh.asu@gmail.com)

---

## 🐛 Troubleshooting

### Port 3000 Already In Use
```bash
# Windows PowerShell
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Or change port in vite.config.js
```

### Dependencies Not Installing
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
```bash
# Clear cache and rebuild
npm run build -- --force
```

### Styles Not Applying
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild with `npm run build`
- Check that Tailwind config includes correct src paths

---

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide React Icons](https://lucide.dev)
- [Vite Documentation](https://vitejs.dev)

---

## 📞 Support

For issues or questions:
- Email: uoh.asu@gmail.com
- ISS Phone: +92-995-616555
- GitHub Issues: Report bugs in the repository

---

**Version**: 1.0.0  
**Last Updated**: June 2026  
**Status**: Ready for Production
