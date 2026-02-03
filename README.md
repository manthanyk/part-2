# RecipeJS - Functional Cooking Companion (Part 2)

A modern recipe app built with **functional programming principles** using vanilla JavaScript. This project demonstrates filter and sort functionality with pure functions, higher-order functions, and immutable data patterns.

## 🎯 Project Overview

RecipeJS Part 2 extends the static recipe app with interactive filtering and sorting capabilities:
- **Filter by difficulty**: Easy, Medium, Hard
- **Filter by time**: Quick recipes (under 30 minutes)
- **Sort alphabetically**: A-Z by name
- **Sort by time**: Fastest recipes first
- **Responsive design** with smooth animations

## 🚀 Features

### Interactive Controls
- ✅ Filter recipes by difficulty level
- ✅ Filter quick recipes (under 30 min)
- ✅ Sort recipes alphabetically
- ✅ Sort recipes by cooking time
- ✅ Active button state indicators
- ✅ Smooth animations and transitions

### Functional Programming
- ✅ Pure functions with no side effects
- ✅ Higher-order functions (filter, sort, map)
- ✅ Immutable data (no mutations)
- ✅ Function composition
- ✅ Clear separation of concerns

## 📁 Project Structure

```
RecipeJS-Part2/
├── index.html          # HTML structure with filter/sort buttons
├── style.css           # Distinctive styling with animations
├── app.js              # Functional programming implementation
└── README.md           # This file
```

## 🔧 How to Run

1. **Clone or download** the repository
2. Open `index.html` in a web browser
3. No build process or dependencies required!

```bash
# Simply open the file
open index.html
```

## 💻 Code Architecture

### Data Layer
```javascript
const recipes = [/* 8 recipe objects */];
```

### State Management
```javascript
let currentFilter = 'all';
let currentSort = 'none';
```

### Pure Filter Functions
```javascript
// Returns NEW array, doesn't modify input
const filterByDifficulty = (recipes, difficulty) => {
    return recipes.filter(recipe => recipe.difficulty === difficulty);
};

const filterByTime = (recipes, maxTime) => {
    return recipes.filter(recipe => recipe.time <= maxTime);
};
```

### Pure Sort Functions
```javascript
// Creates copy first, then sorts (no mutation)
const sortByName = (recipes) => {
    return [...recipes].sort((a, b) => a.title.localeCompare(b.title));
};

const sortByTime = (recipes) => {
    return [...recipes].sort((a, b) => a.time - b.time);
};
```

### Main Update Pipeline
```javascript
const updateDisplay = () => {
    let recipesToDisplay = recipes;
    
    // Chain pure functions
    recipesToDisplay = applyFilter(recipesToDisplay, currentFilter);
    recipesToDisplay = applySort(recipesToDisplay, currentSort);
    
    renderRecipes(recipesToDisplay);
};
```

## 🎓 Functional Programming Concepts

### 1. Pure Functions
**Definition**: Functions that always return the same output for the same input and have no side effects.

```javascript
// ✅ PURE - No mutation, predictable
const filterByDifficulty = (recipes, difficulty) => {
    return recipes.filter(recipe => recipe.difficulty === difficulty);
};

// ❌ IMPURE - Mutates input
const badFilter = (recipes, difficulty) => {
    return recipes.filter(recipe => {
        recipe.checked = true;  // Side effect!
        return recipe.difficulty === difficulty;
    });
};
```

### 2. Higher-Order Functions
**Definition**: Functions that take functions as arguments or return functions.

```javascript
// filter() is a higher-order function
const easyRecipes = recipes.filter(recipe => recipe.difficulty === 'easy');

// sort() is a higher-order function
const sorted = recipes.sort((a, b) => a.time - b.time);

// map() is a higher-order function
const titles = recipes.map(recipe => recipe.title);
```

### 3. Immutability
**Definition**: Data that cannot be changed after creation.

```javascript
// ❌ MUTATES original array
const badSort = (recipes) => {
    return recipes.sort(...);  // Mutates original!
};

// ✅ CREATES new array
const goodSort = (recipes) => {
    return [...recipes].sort(...);  // Copy first, then sort
};
```

### 4. Function Composition
**Definition**: Combining simple functions to build complex operations.

```javascript
// Small, focused functions
const filterEasy = (recipes) => filterByDifficulty(recipes, 'easy');
const sortByTime = (recipes) => [...recipes].sort((a, b) => a.time - b.time);

// Composed together
const getEasyRecipesByTime = (recipes) => {
    return sortByTime(filterEasy(recipes));
};
```

## 🧪 Testing Guide

### Manual Testing Checklist

#### Initial Load
- [ ] All 8 recipes display
- [ ] "Show All" filter is highlighted
- [ ] "Default Order" sort is highlighted
- [ ] No console errors

#### Filter Testing
- [ ] Click "Easy" → Shows only easy recipes
- [ ] Click "Medium" → Shows only medium recipes
- [ ] Click "Hard" → Shows only hard recipes
- [ ] Click "Quick" → Shows recipes under 30 min
- [ ] Click "Show All" → Shows all 8 recipes

#### Sort Testing
- [ ] Click "Name (A-Z)" → Recipes in alphabetical order
- [ ] Click "Time" → Recipes ordered by cooking time
- [ ] Click "Default" → Original order restored

#### Combined Testing
- [ ] Filter "Easy" + Sort "Time" → Easy recipes sorted by time
- [ ] Filter "Quick" + Sort "Name" → Quick recipes alphabetically
- [ ] All filter/sort combinations work

### Console Testing
Open DevTools (F12) and check:
```javascript
// Should see initialization messages
"RecipeJS Part 2 - Initializing..."
"Event listeners attached successfully"
"Displaying X recipes (Filter: ..., Sort: ...)"
```

## 🎨 Design Features

### Visual Design
- **Typography**: Playfair Display (elegant serif) + Karla (clean sans-serif)
- **Color Palette**: Warm, inviting colors with terracotta and gold accents
- **Animations**: Smooth transitions and staggered card animations
- **Responsive**: Mobile-first design that works on all devices

### Interactive Elements
- **Hover effects** on buttons with expanding backgrounds
- **Active states** with distinct styling
- **Card hover** with lift effect and enhanced shadow
- **Smooth transitions** using cubic-bezier easing

## 📊 File Sizes
- `index.html`: ~2KB
- `style.css`: ~9KB
- `app.js`: ~11KB
- **Total**: ~22KB (tiny!)

## 🔄 Data Flow

```
User Action (Click)
        ↓
Event Handler (handleFilterClick / handleSortClick)
        ↓
Update State (currentFilter / currentSort)
        ↓
Update UI (updateActiveButtons)
        ↓
Main Pipeline (updateDisplay)
        ↓
Apply Filter (pure function)
        ↓
Apply Sort (pure function)
        ↓
Render (DOM update)
```

## 🎯 Learning Objectives Achieved

### Functional Programming
- [x] Write pure functions
- [x] Use higher-order functions
- [x] Maintain immutability
- [x] Compose functions
- [x] Separate concerns

### JavaScript Skills
- [x] Array methods (filter, sort, map)
- [x] Spread operator
- [x] Arrow functions
- [x] Event handling
- [x] DOM manipulation
- [x] State management

### Code Organization
- [x] Modular function design
- [x] Clear naming conventions
- [x] Logical code structure
- [x] Comprehensive comments

## 🚦 Next Steps (Part 3 Preview)

Coming in Part 3:
- Expandable recipe details
- Cooking steps toggle
- Ingredients list
- Recursion for nested steps
- IIFE module pattern

## 📝 Assignment Requirements

✅ **Filter Buttons**: All, Easy, Medium, Hard, Quick
✅ **Sort Buttons**: Default, Name (A-Z), Time (Fastest)
✅ **Pure Functions**: All filters and sorts are pure
✅ **Higher-Order Functions**: Uses filter(), sort(), map()
✅ **State Management**: Tracks currentFilter and currentSort
✅ **Clean Code**: Well-commented and organized

## 🎥 Video Demo Talking Points

When recording your video, cover:

1. **Features Demo**
   - Show all filter options working
   - Show all sort options working
   - Show combined filter + sort

2. **Code Explanation**
   - Explain `filterByDifficulty()` - how filter() works
   - Explain `sortByName()` - why we copy the array
   - Explain `updateDisplay()` - the functional pipeline

3. **Functional Programming**
   - What makes functions "pure"
   - What are higher-order functions
   - Why immutability matters

## 🤝 Contributing

This is an educational project. Feel free to:
- Add new filter options
- Add new sort options
- Enhance the styling
- Add more recipes
- Improve accessibility

## 📄 License

MIT License - Feel free to use for learning!

## 👨‍💻 Author

Created as part of the Kalvium RecipeJS assignment series.

---

**Happy Functional Programming! 🚀**
