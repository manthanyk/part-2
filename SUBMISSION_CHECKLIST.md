# 📋 RecipeJS Part 2 - Submission Checklist & Guide

## 🎯 Overview

This checklist ensures you submit everything correctly for the RecipeJS Part 2 assignment.

---

## ✅ Pre-Submission Checklist

### 1. Code Quality Check

#### HTML (`index.html`)
- [ ] Filter buttons section is present
- [ ] Sort buttons section is present
- [ ] All buttons have correct `data-filter` or `data-sort` attributes
- [ ] Recipe container div is present
- [ ] No HTML errors (validate at https://validator.w3.org/)

#### CSS (`style.css`)
- [ ] Controls section is styled
- [ ] Filter and sort buttons are styled
- [ ] Active state styling works
- [ ] Hover effects work
- [ ] Responsive design works on mobile
- [ ] Animations are smooth

#### JavaScript (`app.js`)
- [ ] All 8 recipes are defined
- [ ] State variables (`currentFilter`, `currentSort`) exist
- [ ] Pure filter functions are implemented
- [ ] Pure sort functions are implemented
- [ ] `applyFilter()` function works
- [ ] `applySort()` function works
- [ ] `updateDisplay()` orchestrates everything
- [ ] Event listeners are attached
- [ ] No console errors
- [ ] Code is well-commented

---

### 2. Functional Programming Requirements

- [ ] **Pure Functions**: Filter and sort functions don't mutate input
- [ ] **Higher-Order Functions**: Uses `filter()`, `sort()`, `map()`
- [ ] **Immutability**: Uses spread operator `[...recipes]` before sorting
- [ ] **Function Composition**: `updateDisplay()` chains functions
- [ ] **Separation of Concerns**: Data, logic, and UI are separated

---

### 3. Feature Testing

#### All Filters Work:
- [ ] "Show All" displays all 8 recipes
- [ ] "Easy" displays only easy recipes
- [ ] "Medium" displays only medium recipes
- [ ] "Hard" displays only hard recipes
- [ ] "Quick" displays recipes under 30 minutes

#### All Sorts Work:
- [ ] "Default Order" shows original order
- [ ] "Name (A-Z)" sorts alphabetically
- [ ] "Time (Fastest First)" sorts by cooking time

#### Combined Functionality:
- [ ] Filter + Sort works (e.g., Easy + Sort by Time)
- [ ] Active button states update correctly
- [ ] No console errors during interaction

#### Edge Cases:
- [ ] Empty results show appropriate message
- [ ] Switching between filters updates correctly
- [ ] Switching between sorts updates correctly

---

## 📦 GitHub Preparation

### Step 1: Create Repository Structure

```bash
# Navigate to your project folder
cd RecipeJS-Part2

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: RecipeJS Part 2 complete"

# Create repository on GitHub (if not already done)
# Go to github.com → New Repository
# Name: RecipeJS-Part2
# Public repository
# Don't add README (we already have one)

# Connect to GitHub
git remote add origin https://github.com/YOUR-USERNAME/RecipeJS-Part2.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Create a Pull Request

**Important**: Your repository MUST be **PUBLIC** for grading!

#### Option A: If working with branches (recommended)
```bash
# Create a feature branch
git checkout -b feature/part-2-filters-and-sorting

# Make sure all changes are committed
git add .
git commit -m "feat: Add filter and sort functionality with functional programming"

# Push the branch
git push -u origin feature/part-2-filters-and-sorting

# Go to GitHub → Your Repository
# Click "Compare & pull request"
# Set base: main
# Set compare: feature/part-2-filters-and-sorting
# Add description (see template below)
# Create Pull Request
```

#### Option B: If working directly on main (simpler)
```bash
# Create a new branch from main
git checkout -b part-2-submission

# Push the branch
git push -u origin part-2-submission

# Go to GitHub → Your Repository
# Click "Pull requests" → "New pull request"
# Set base: main
# Set compare: part-2-submission
# Add description
# Create Pull Request
```

### Step 3: Pull Request Description Template

Copy and paste this into your PR description:

```markdown
# RecipeJS Part 2: Interactive Filters & Sorting

## 🎯 Summary
This PR implements interactive filtering and sorting functionality for the RecipeJS app using functional programming principles.

## ✨ Features Added
- Filter buttons (Show All, Easy, Medium, Hard, Quick)
- Sort buttons (Default, Name A-Z, Time)
- Active button state indicators
- Combined filter + sort functionality
- Smooth animations and transitions

## 🧪 Functional Programming Concepts
- ✅ Pure functions (no mutations)
- ✅ Higher-order functions (filter, sort, map)
- ✅ Immutability (spread operator)
- ✅ Function composition
- ✅ Separation of concerns

## 📝 Files Modified/Added
- `index.html` - Added controls section with filter/sort buttons
- `style.css` - Styled buttons and controls with animations
- `app.js` - Implemented functional programming logic
- `README.md` - Comprehensive documentation

## ✅ Testing
All features tested and working:
- All filter buttons functional
- All sort buttons functional
- Combined filter + sort works correctly
- Active states update properly
- No console errors

## 🎥 Video Demo
Video link: [TO BE ADDED - Google Drive link]

---
**Assignment**: Kalvium RecipeJS Part 2
**Student**: [Your Name]
```

### Step 4: Verify PR Quality

- [ ] PR title is descriptive
- [ ] PR description is complete
- [ ] All files are included in the PR
- [ ] Repository is PUBLIC
- [ ] PR is against the correct base branch (usually `main`)
- [ ] Commits have meaningful messages

---

## 🎥 Video Recording Guide

### Recording Setup

#### Choose a Tool:
- **Loom** (Easiest - https://www.loom.com/)
- **OBS Studio** (Free, powerful)
- **QuickTime** (Mac users)
- **Windows Game Bar** (Windows users)
- **Zoom** (Record yourself presenting)

#### Before Recording:
```
Screen Setup:
- Close unnecessary tabs/windows
- Set browser to full screen
- Zoom: 100% or 125%
- Resolution: 1920x1080 or 1280x720

Code Editor:
- Font size: 16-18px
- Theme: High contrast (readable)
- Close file explorer/sidebars

Audio:
- Test microphone
- Find quiet space
- Speak at normal volume
```

### Video Structure (3-5 minutes)

**Suggested Timeline:**

| Time | Section | Content |
|------|---------|---------|
| 0:00-0:30 | Introduction | Who you are, what you built |
| 0:30-1:30 | Filter Demo | Show all filter buttons working |
| 1:30-2:00 | Sort Demo | Show all sort buttons working |
| 2:00-2:30 | Combined Demo | Show filter + sort combinations |
| 2:30-3:30 | Code Explanation | Explain filter(), sort(), pure functions |
| 3:30-4:00 | Functional Programming | Explain key concepts |
| 4:00-4:30 | Conclusion | Wrap up, thank viewers |

### Script Template

```
"Hi, I'm [Name] and this is my RecipeJS Part 2 submission where I've 
implemented interactive filtering and sorting using functional programming 
principles.

[Demo all features - 90 seconds]

Now let me show you the code. [Open app.js]

This is the filterByDifficulty function - it's a pure function because 
it doesn't mutate the input and always returns the same output for the 
same input. It uses the filter() method, which is a higher-order function.

[Explain sort functions - 45 seconds]

Notice I create a copy of the array using the spread operator before 
sorting to maintain immutability.

[Show updateDisplay() - 30 seconds]

This orchestrates everything - it chains filter and sort functions 
together. This is function composition in action.

[Wrap up - 30 seconds]

So I've implemented all the requirements using functional programming 
principles: pure functions, higher-order functions, immutability, and 
function composition. Thanks for watching!"
```

### Recording Checklist

- [ ] Test recording setup first (do a 30-second test)
- [ ] Check audio levels
- [ ] Ensure screen is visible
- [ ] Close notifications
- [ ] Charge laptop / plug in power
- [ ] Have water nearby (stay hydrated!)

### After Recording

- [ ] Watch the entire video
- [ ] Check audio quality
- [ ] Verify screen is readable
- [ ] Ensure all features are demonstrated
- [ ] Check video length (3-5 minutes)

---

## ☁️ Google Drive Upload

### Step 1: Upload Video

1. Go to https://drive.google.com
2. Click "New" → "File upload"
3. Select your video file
4. Wait for upload to complete

### Step 2: Set Sharing Permissions

**CRITICAL**: Must be set to "Anyone with the link can view"

```
1. Right-click the video file
2. Click "Share"
3. Under "General access" click "Restricted"
4. Select "Anyone with the link"
5. Ensure role is set to "Viewer"
6. Click "Copy link"
7. Click "Done"
```

### Step 3: Verify Link

- [ ] Copy the link
- [ ] Open in incognito/private window
- [ ] Verify video plays without login
- [ ] If asked to login, sharing is NOT set correctly!

### Common Drive Link Formats

✅ Correct format:
```
https://drive.google.com/file/d/1234567890abcdefgh/view?usp=sharing
```

❌ Wrong format (requires login):
```
https://drive.google.com/file/d/1234567890abcdefgh/view
```

---

## 📤 Final Submission

### What You Need to Submit:

1. **GitHub Pull Request URL**
   - Format: `https://github.com/YOUR-USERNAME/RecipeJS-Part2/pull/1`
   - Must be accessible (public repository)
   - Must contain all required files

2. **Google Drive Video URL**
   - Format: `https://drive.google.com/file/d/.../view?usp=sharing`
   - Must be viewable without login
   - Video should be 3-5 minutes

### Submission Form Fields

```
GitHub PR URL: https://github.com/[username]/RecipeJS-Part2/pull/[number]
Video URL: https://drive.google.com/file/d/[id]/view?usp=sharing
```

### Before Clicking Submit

- [ ] PR link opens in incognito mode
- [ ] Repository is PUBLIC
- [ ] All code is visible in PR
- [ ] Video link opens in incognito mode
- [ ] Video plays without login
- [ ] Video shows all features
- [ ] Video includes code explanation

---

## 🎯 Grading Rubric Understanding

### Pull Request (50 points)

| Criteria | Points | What They're Looking For |
|----------|--------|--------------------------|
| Filter features | 15 | All 5 filters work correctly |
| Sort features | 15 | All 3 sorts work correctly |
| Pure functions | 10 | No mutations, predictable |
| State management | 5 | currentFilter, currentSort used properly |
| Code quality | 5 | Clean, commented, organized |

### Video Demo (50 points)

| Criteria | Points | What They're Looking For |
|----------|--------|--------------------------|
| Filter demo | 12 | Shows all filters working |
| Sort demo | 12 | Shows all sorts working |
| Code explanation | 20 | Explains filter(), sort(), pure functions |
| Presentation | 6 | Clear, confident, well-paced |

---

## 🆘 Troubleshooting

### Issue: PR link doesn't work

**Solutions:**
- Ensure repository is PUBLIC (not private)
- Verify PR is created (check pull requests tab)
- Copy the full URL including the PR number

### Issue: Video link requires login

**Solutions:**
- Change sharing to "Anyone with the link"
- Don't use "Restricted" access
- Test in incognito window before submitting

### Issue: Can't create PR

**Solutions:**
- Ensure you have commits on a branch
- Push branch to GitHub first
- Create PR from GitHub web interface

### Issue: Features don't work

**Solutions:**
- Check browser console for errors
- Verify event listeners are attached
- Test each function individually
- Review the code against the assignment

---

## 📞 Support Resources

### If You're Stuck:

1. **Review the Assignment Document**
   - Read the requirements again
   - Check the examples provided
   - Follow the step-by-step guide

2. **Check Your Code**
   - Console.log() is your friend
   - Test each function independently
   - Verify data structures

3. **Debug Systematically**
   ```javascript
   console.log('Recipes:', recipes);
   console.log('Current filter:', currentFilter);
   console.log('Filtered recipes:', filteredRecipes);
   ```

4. **Ask for Help**
   - Kalvium Discord
   - Teaching Assistants
   - Fellow students
   - Stack Overflow (for technical questions)

---

## ✅ Final Pre-Submission Checklist

### Code
- [ ] All files created (HTML, CSS, JS)
- [ ] All 8 recipes present
- [ ] All 5 filters work
- [ ] All 3 sorts work
- [ ] Combined filter + sort works
- [ ] No console errors
- [ ] Code is commented
- [ ] Follows functional programming principles

### GitHub
- [ ] Repository is PUBLIC
- [ ] All files are committed
- [ ] PR is created
- [ ] PR has good description
- [ ] PR link is copied

### Video
- [ ] 3-5 minutes long
- [ ] Shows all features
- [ ] Explains code
- [ ] Uploaded to Google Drive
- [ ] Sharing is "Anyone with link"
- [ ] Link is copied
- [ ] Tested in incognito mode

### Submission
- [ ] PR URL is ready
- [ ] Video URL is ready
- [ ] Both links tested
- [ ] Ready to submit!

---

## 🎉 You're Ready!

If all checkboxes are checked, you're ready to submit!

**Good luck! You've got this! 🚀**

---

## 📊 Estimated Timeline

| Task | Time | Tips |
|------|------|------|
| Final code review | 15 min | Check everything works |
| Git setup & PR | 10 min | Follow the commands exactly |
| Record video | 20 min | Do 1-2 practice runs first |
| Upload & verify | 10 min | Test links in incognito |
| Submit | 2 min | Double-check URLs |
| **Total** | **~60 min** | Don't rush! |

---

Remember: The assignment is about demonstrating your understanding of functional programming. Take your time, be clear, and show what you've learned!
