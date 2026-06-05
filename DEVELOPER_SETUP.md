# ASU-UOH Portal - Developer Setup Guide

Complete step-by-step guide for setting up the development environment.

---

## 💻 System Requirements

- **Operating System**: Windows, macOS, or Linux
- **Node.js**: Version 16.0.0 or higher (LTS recommended)
- **npm**: Version 7.0.0 or higher (comes with Node.js)
- **Git**: Version 2.0.0 or higher (for version control)
- **Code Editor**: Visual Studio Code recommended (or similar)
- **Disk Space**: ~500MB for node_modules and build artifacts

---

## 📥 Step 1: Install Prerequisites

### 1.1 Install Node.js

**Windows:**
1. Visit [nodejs.org](https://nodejs.org) 
2. Download LTS version (20.x or current LTS)
3. Run the installer
4. Accept default options
5. Verify installation:
```bash
node --version
npm --version
```

**macOS (using Homebrew):**
```bash
brew install node
```

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 1.2 Install Git

Download from [git-scm.com](https://git-scm.com) and follow install instructions.

Verify:
```bash
git --version
```

### 1.3 Install Code Editor (Recommended: VS Code)

Download from [code.visualstudio.com](https://code.visualstudio.com)

**Recommended VS Code Extensions:**
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint
- Thunder Client (for testing, optional)

---

## 🚀 Step 2: Clone & Setup Project

### 2.1 Clone Repository

```bash
# HTTPS (simpler)
git clone https://github.com/asu-uoh/student-portal.git

# or SSH (if SSH keys configured)
git clone git@github.com:asu-uoh/student-portal.git

# Navigate into project
cd ASU-UOH
```

### 2.2 Install Dependencies

```bash
npm install
# or if using yarn
yarn install
```

This creates `node_modules/` folder with all required packages.

### 2.3 Verify Installation

```bash
npm list react
npm list tailwindcss
npm list lucide-react
```

---

## 🔧 Step 3: Configure Development Environment

### 3.1 Open Project in VS Code

```bash
code .
```

### 3.2 Create `.env.local` (Optional)

```bash
# .env.local
VITE_APP_TITLE=ASU-UOH Student Portal
VITE_APP_VERSION=1.0.0
```

### 3.3 Configure VS Code Settings

Create `.vscode/settings.json` in project root:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsx]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ],
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "prettier.tabWidth": 2,
  "prettier.singleQuote": true
}
```

---

## ▶️ Step 4: Start Development Server

### 4.1 Run Development Server

```bash
npm run dev
```

Expected output:
```
VITE v4.3.9 ready in 234 ms

➜  Local:   http://localhost:3000/
➜  press h to show help
```

### 4.2 Open in Browser

The browser should automatically open to `http://localhost:3000`. If not, manually open it.

### 4.3 Verify Everything Works

- [ ] Header displays with navigation
- [ ] Hero section loads
- [ ] Tabs in Bureaucracy Hub clickable
- [ ] Checklists interactive
- [ ] Search in Document Toolkit works
- [ ] FAQ accordion opens/closes
- [ ] No errors in browser console (F12)

---

## 📝 Step 5: Making Your First Change

### 5.1 Edit a Component

Open `src/components/Header.jsx` in VS Code:

```jsx
// Find this line:
<h1 className="text-lg font-bold text-navy-900">ASU-UOH</h1>

// Change to:
<h1 className="text-lg font-bold text-navy-900">ASU-UOH Student Portal</h1>
```

### 5.2 Save and Auto-Reload

- File auto-saves in VS Code
- Browser auto-refreshes with changes
- Changes appear instantly (hot module replacement)

### 5.3 Open Browser Console

- Press `F12` or `Ctrl+Shift+I`
- No red errors should appear
- You should see React DevTools info

---

## 🔨 Step 6: Common Development Tasks

### Build for Production
```bash
npm run build
```
Creates optimized `dist/` folder.

### Preview Production Build
```bash
npm run preview
```
Test production build locally before deployment.

### Format Code
```bash
npm run format
# or manually in VS Code: Shift+Alt+F
```

### Check for Linting Issues
```bash
npm run lint
```

### Install New Package
```bash
npm install package-name --save
```

---

## 🐛 Step 7: Debugging

### Browser DevTools (F12)

**Console Tab:**
- Shows all JavaScript errors
- Useful for debugging component issues
- Try typing: `window.location.href` to see current URL

**Elements Tab:**
- Inspect HTML structure
- Check Tailwind classes applied
- Right-click element → Inspect

**Network Tab:**
- Check if resources load (for future API integration)
- Monitor performance

### VS Code Debugging

Install Debugger for Chrome extension, then:

1. Go to Run → Start Debugging
2. Set breakpoints by clicking line numbers
3. Step through code execution

### React DevTools

Install React Developer Tools browser extension:
- See component tree
- Inspect props and state
- Track component renders

---

## 📚 Step 8: Understanding Project Structure

```
src/
├── main.jsx                    # React app entry point
├── index.css                   # Tailwind & global styles
├── App.jsx                     # Main app component
└── components/
    ├── Header.jsx              # Navigation header
    ├── SecretaryAddress.jsx    # Hero/welcome section
    ├── BureaucracyHub.jsx      # Pathway tabs
    ├── EmbassyNOCPathway.jsx   # Pathway 1: Embassy NOC
    ├── BonafideLetterPathway.jsx # Pathway 2: Bonafide
    ├── HECNOCPathway.jsx       # Pathway 3: HEC NOC
    ├── DocumentToolkit.jsx     # Template library
    ├── AnnouncementsBoard.jsx  # Deadlines/announcements
    ├── FAQSection.jsx          # FAQ accordion
    └── Footer.jsx              # Footer section
```

### File Purposes

- **React Components** (`.jsx`): UI elements using JSX syntax
- **CSS** (`index.css`): Tailwind directives and global styles
- **Config Files**: Vite, Tailwind, PostCSS configuration

---

## 🎯 Step 9: Workflow Tips

### Hot Module Replacement (HMR)
- Save a file → changes instant without page reload
- Component state preserved during edits
- Perfect for rapid development

### Common Dev Patterns

**Working on a Component:**
```javascript
// 1. Open component file
// 2. Make changes
// 3. Save (Ctrl+S)
// 4. See changes in browser instantly
// 5. Use browser DevTools to inspect
```

**Adding New Feature:**
```javascript
// 1. Create new component file
// 2. Import in App.jsx or parent component
// 3. Add to JSX
// 4. Style with Tailwind classes
// 5. Test in browser
```

### Staying Organized

- Keep components focused on single responsibility
- Use consistent naming (PascalCase for components)
- Comment complex logic
- Group related state with useState

---

## 🆘 Step 10: Troubleshooting

### Issue: Port 3000 Already In Use

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID [PID] /F
npm run dev
```

**macOS/Linux:**
```bash
lsof -i :3000
kill -9 [PID]
npm run dev
```

### Issue: Dependencies Not Installing

```bash
# Clear npm cache
npm cache clean --force

# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Changes Not Appearing

- [ ] Hard refresh browser: Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)
- [ ] Check browser console for errors (F12)
- [ ] Verify file saved in VS Code
- [ ] Check that component is imported in App.jsx

### Issue: Styling Broken

- [ ] Verify Tailwind classes spelled correctly
- [ ] Check `tailwind.config.js` paths include your files
- [ ] Restart dev server: Stop (Ctrl+C) and `npm run dev`
- [ ] Clear browser cache

### Issue: Build Fails

```bash
# Try with --force flag
npm run build -- --force

# Or full clean
npm cache clean --force
rm -rf dist node_modules
npm install
npm run build
```

---

## 💡 Step 11: Best Practices

### Code Style
- 2 spaces for indentation
- Use arrow functions: `() => {}`
- Destructure props: `{ name, email }` instead of `props.name`
- Use semantic HTML: `<button>` not `<div onClick>`

### Performance
- Use `React.memo()` for expensive components
- Avoid inline object/array creation in render
- Keep components focused and small

### Accessibility
- Include alt text for images
- Use semantic HTML elements
- Ensure color contrast sufficient
- Make interactive elements keyboard accessible

### Version Control with Git

```bash
# Check status
git status

# Stage changes
git add .

# Commit with message
git commit -m "Description of changes"

# Push to GitHub
git push origin main

# Create feature branch
git checkout -b feature/new-feature
# ... make changes ...
# git push origin feature/new-feature
# (Create Pull Request on GitHub)
```

---

## 📖 Learning Resources

- [React Docs](https://react.dev) - Official React documentation
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility CSS framework
- [Lucide Icons](https://lucide.dev) - Icon library documentation
- [Vite Docs](https://vitejs.dev) - Build tool documentation
- [MDN Web Docs](https://developer.mozilla.org) - Web fundamentals

---

## ✅ Setup Complete Checklist

- [ ] Node.js installed and verified
- [ ] Git installed and configured
- [ ] Project cloned from GitHub
- [ ] Dependencies installed (`npm install`)
- [ ] Development server runs (`npm run dev`)
- [ ] Browser opens to localhost:3000
- [ ] All pages load without errors
- [ ] Edited a component and saw changes
- [ ] Browser DevTools working
- [ ] Ready to start contributing!

---

## 🎉 You're Ready!

You now have a complete development environment set up. Start by:

1. Reading individual component files to understand structure
2. Making small changes and observing results
3. Checking console for any errors
4. Using browser DevTools to inspect elements
5. Contributing improvements to the portal!

---

**Setup Guide Version**: 1.0  
**Last Updated**: June 2026  
**Support**: uoh.asu@gmail.com
