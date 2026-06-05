# ASU-UOH Student Portal - Deployment Checklist

Use this checklist before deploying to production to GitHub Pages.

---

## 📋 Pre-Deployment (1 week before)

### Content Verification
- [ ] All contact information verified and current
  - [ ] ISS phone: +92-995-616555
  - [ ] ISS email: iss@uoh.edu.pk
  - [ ] Embassy phone: +92-51-2107500
  - [ ] ASU email: uoh.asu@gmail.com
  - [ ] Office hours confirmed

- [ ] Processing timelines reviewed and accurate
  - [ ] Embassy NOC: 5-10 working days
  - [ ] Bonafide Certificate: 2-3 working days
  - [ ] HEC NOC: 5-15 working days

- [ ] Document templates reviewed for completeness
  - [ ] All placeholders clearly marked [LIKE THIS]
  - [ ] Contact information matches current details
  - [ ] Sample dates updated to current year

- [ ] FAQ entries reviewed
  - [ ] No outdated information
  - [ ] All links functional
  - [ ] Contact info in support section matches header

### Code Quality
- [ ] All files properly formatted (no console errors)
- [ ] No unused imports or variables
- [ ] Mobile responsive testing complete
  - [ ] Tested on iPhone (Safari)
  - [ ] Tested on Android (Chrome)
  - [ ] Tested on tablet (iPad/Android tablet)
  - [ ] Tested on desktop (Chrome, Firefox, Edge)

- [ ] All interactive elements tested
  - [ ] Tabs switch smoothly
  - [ ] Checklists track progress
  - [ ] Accordion opens/closes
  - [ ] Copy-to-clipboard works
  - [ ] Search filter works
  - [ ] Smooth scrolling navigation works

- [ ] Accessibility verified
  - [ ] Can navigate with keyboard only
  - [ ] Tab order makes sense
  - [ ] Color contrast sufficient (WCAG AA)
  - [ ] Screen reader friendly

### Performance
- [ ] No console errors or warnings
- [ ] Build completes without warnings: `npm run build`
- [ ] Build size reasonable (< 500KB gzipped)
- [ ] Images optimized (if any added)

---

## 🚀 Deployment Day

### Final Checks (2 hours before)
- [ ] Latest code committed and pushed to main
- [ ] All branches merged and unnecessary branches deleted
- [ ] .gitignore properly configured
- [ ] No sensitive information in code (no API keys, passwords)

### Build Process
- [ ] Clean install fresh: `npm ci`
- [ ] Build succeeds: `npm run build`
- [ ] Build output in `dist/` folder is clean
- [ ] No build errors or warnings

### Pre-Release Testing
- [ ] Test production build locally: `npm run preview`
- [ ] Verify all pages load correctly
- [ ] Test on actual mobile device (not just browser DevTools)
- [ ] Test all critical user paths:
  - [ ] Navigate to each pathway (Embassy, Bonafide, HEC)
  - [ ] Complete a checklist
  - [ ] Search in Document Toolkit
  - [ ] Expand FAQ items
  - [ ] Click all navigation links

### GitHub Pages Configuration
- [ ] Repository settings → Pages configured
- [ ] Branch set to `main`, folder `/dist`
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled
- [ ] Repository description updated

### Deployment
**Option 1: GitHub Actions (Recommended)**
- [ ] `.github/workflows/deploy.yml` created
- [ ] Workflow file tested (manual trigger or push to main)
- [ ] Deployment completed successfully
- [ ] Check Actions tab for successful workflow run

**Option 2: Manual gh-pages**
- [ ] `npm run deploy` executed successfully
- [ ] Check gh-pages branch created in repository

### Post-Deployment Verification
- [ ] Visit live URL in browser
  - [ ] URL: `https://github.com/asu-uoh/student-portal` (or custom domain)
  - [ ] Site loads without errors
  - [ ] All pages accessible
  - [ ] No 404 errors

- [ ] Test on mobile again at live URL
- [ ] Test critical features at live URL
- [ ] Verify responsive design on live site
- [ ] Check console for any errors (F12 → Console tab)

---

## ✅ Post-Deployment (Day 1-7)

### Monitoring
- [ ] Check deployment success in GitHub Actions
- [ ] Monitor for user feedback (check email: uoh.asu@gmail.com)
- [ ] Check for any error reports
- [ ] Verify site is accessible from different networks/locations

### Follow-up Tasks
- [ ] Create release notes documenting changes
- [ ] Update version number in README.md
- [ ] Send announcement to ASU members about new portal
- [ ] Share feedback form link with students

### Contingency
- [ ] Keep previous working version available
- [ ] Document any issues encountered
- [ ] Prepare rollback plan if critical issues found
- [ ] Have backup contacts ready for urgent issues

---

## 📅 Ongoing Maintenance Schedule

### Weekly (During Visa Season: April-August)
- [ ] Check announcements for relevance
- [ ] Update processing time estimates if changed
- [ ] Monitor email for student questions
- [ ] Address any reported issues

### Monthly
- [ ] Review FAQ for new common questions
- [ ] Update announcements and deadlines
- [ ] Verify all contact information still current
- [ ] Check for any administrative procedure changes

### Quarterly (Every 3 months)
- [ ] Full content audit
- [ ] Test all functionality end-to-end
- [ ] Review analytics (if tracking enabled)
- [ ] Plan next feature/update release

### Annually
- [ ] Major version update if significant changes
- [ ] Update all dependencies to latest stable versions
- [ ] Security audit of code
- [ ] Comprehensive UX/UI review

---

## 🚨 Critical Issues - Immediate Action Required

### Issue: Site not loading
- [ ] Check GitHub Actions workflow for build errors
- [ ] Verify dist/ folder deployed to correct branch
- [ ] Check GitHub Pages settings in repository
- [ ] Clear browser cache and try again
- [ ] Check mobile network access (not just WiFi)

### Issue: Broken links or 404 errors
- [ ] Check file paths in components
- [ ] Verify all imports correct in App.jsx
- [ ] Rebuild and redeploy: `npm run build && npm run deploy`

### Issue: Outdated contact information is live
- [ ] Update immediately in relevant component
- [ ] Add announcement to AnnouncementsBoard about correction
- [ ] Rebuild and deploy: `npm run build && npm run deploy`
- [ ] Notify affected users via email

### Issue: Incorrect procedural information
- [ ] Mark as URGENT
- [ ] Verify information with ISS or official source
- [ ] Update component if confirmed wrong
- [ ] Add correction announcement
- [ ] Notify student community immediately

---

## 📞 Emergency Contacts

**If critical issue affects students:**
- ISS Director: +92-995-616555
- ASU Leadership: uoh.asu@gmail.com
- Academic Secretary: (Available during office hours)

---

## 📝 Version History

### Version 1.0.0 (Current)
- Initial production release
- 3 core pathways (Embassy NOC, Bonafide, HEC NOC)
- Document toolkit with 6 templates
- Announcements board
- FAQ section with 15+ entries
- Mobile-responsive design
- GitHub Pages compatible

---

## ✨ Template for Release Notes

When deploying updates:

```markdown
## Release Notes - ASU-UOH Portal v[VERSION]

**Release Date**: [DATE]
**Status**: [PRODUCTION / BETA]

### ✨ New Features
- [Feature 1]
- [Feature 2]

### 🔧 Improvements
- [Improvement 1]
- [Improvement 2]

### 🐛 Bugfixes
- [Bug fix 1]
- [Bug fix 2]

### ⚠️ Important Notes
- [Any critical information for users]

### 📞 Support
For issues: uoh.asu@gmail.com
ISS Contact: +92-995-616555
```

---

**Deployment Guide Version**: 1.0  
**Last Updated**: June 2026  
**Next Review**: September 2026 (After visa season peak)
