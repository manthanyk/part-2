// ===========================================
// RecipeJS - Functional Cooking Companion
// Part 2: Interactive Filters & Sorting
// Functional Programming Implementation
// ===========================================

// ============================================
// DATA LAYER - Recipe Database
// ============================================

const recipes = [
    {
        id: 1,
        title: "Spaghetti Carbonara",
        category: "pasta",
        difficulty: "easy",
        time: 25,
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&h=400&fit=crop",
        description: "Classic Italian pasta dish with eggs, cheese, and pancetta. Creamy and delicious comfort food that comes together in minutes."
    },
    {
        id: 2,
        title: "Chicken Tikka Masala",
        category: "curry",
        difficulty: "medium",
        time: 45,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&h=400&fit=crop",
        description: "Rich and creamy Indian curry with tender chicken pieces. A restaurant favorite you can make at home with aromatic spices."
    },
    {
        id: 3,
        title: "Caesar Salad",
        category: "salad",
        difficulty: "easy",
        time: 15,
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=400&fit=crop",
        description: "Crispy romaine lettuce with parmesan, croutons, and tangy Caesar dressing. Perfect as a side or light meal."
    },
    {
        id: 4,
        title: "Beef Wellington",
        category: "main course",
        difficulty: "hard",
        time: 120,
        image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=500&h=400&fit=crop",
        description: "Elegant British dish with tender beef fillet wrapped in puff pastry. An impressive centerpiece for special occasions."
    },
    {
        id: 5,
        title: "Vegetable Stir Fry",
        category: "asian",
        difficulty: "easy",
        time: 20,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&h=400&fit=crop",
        description: "Quick and healthy mix of colorful vegetables with savory sauce. Customize with your favorite veggies and protein."
    },
    {
        id: 6,
        title: "Homemade Pizza Margherita",
        category: "italian",
        difficulty: "medium",
        time: 60,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=400&fit=crop",
        description: "Fresh mozzarella, basil, and tomato sauce on homemade dough. The classic Italian pizza that started it all."
    },
    {
        id: 7,
        title: "Chocolate Lava Cake",
        category: "dessert",
        difficulty: "medium",
        time: 30,
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&h=400&fit=crop",
        description: "Decadent chocolate cake with a molten center. Serve warm with vanilla ice cream for the ultimate indulgence."
    },
    {
        id: 8,
        title: "Thai Green Curry",
        category: "curry",
        difficulty: "hard",
        time: 50,
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500&h=400&fit=crop",
        description: "Aromatic Thai curry with coconut milk and fresh herbs. Complex flavors balanced between spicy, sweet, and savory."
    }
];

// ============================================
// STATE MANAGEMENT
// ============================================

let currentFilter = 'all';
let currentSort = 'none';

// ============================================
// DOM REFERENCES
// ============================================

const recipeContainer = document.getElementById('recipe-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortButtons = document.querySelectorAll('.sort-btn');

// ============================================
// PURE FILTER FUNCTIONS
// ============================================

/**
 * Filter recipes by difficulty level
 * @param {Array} recipes - Array of recipe objects
 * @param {string} difficulty - Difficulty level ('easy', 'medium', 'hard')
 * @returns {Array} - New filtered array
 */
const filterByDifficulty = (recipes, difficulty) => {
    return recipes.filter(recipe => recipe.difficulty === difficulty);
};

/**
 * Filter recipes by time threshold
 * @param {Array} recipes - Array of recipe objects
 * @param {number} maxTime - Maximum cooking time in minutes
 * @returns {Array} - New filtered array
 */
const filterByTime = (recipes, maxTime) => {
    return recipes.filter(recipe => recipe.time <= maxTime);
};

/**
 * Apply filter based on filter type
 * @param {Array} recipes - Array of recipe objects
 * @param {string} filterType - Type of filter to apply
 * @returns {Array} - New filtered array
 */
const applyFilter = (recipes, filterType) => {
    switch (filterType) {
        case 'easy':
            return filterByDifficulty(recipes, 'easy');
        case 'medium':
            return filterByDifficulty(recipes, 'medium');
        case 'hard':
            return filterByDifficulty(recipes, 'hard');
        case 'quick':
            return filterByTime(recipes, 30);
        case 'all':
        default:
            return recipes;
    }
};

// ============================================
// PURE SORT FUNCTIONS
// ============================================

/**
 * Sort recipes by name alphabetically (A-Z)
 * @param {Array} recipes - Array of recipe objects
 * @returns {Array} - New sorted array
 */
const sortByName = (recipes) => {
    return [...recipes].sort((a, b) => a.title.localeCompare(b.title));
};

/**
 * Sort recipes by cooking time (fastest first)
 * @param {Array} recipes - Array of recipe objects
 * @returns {Array} - New sorted array
 */
const sortByTime = (recipes) => {
    return [...recipes].sort((a, b) => a.time - b.time);
};

/**
 * Apply sort based on sort type
 * @param {Array} recipes - Array of recipe objects
 * @param {string} sortType - Type of sort to apply
 * @returns {Array} - New sorted array
 */
const applySort = (recipes, sortType) => {
    switch (sortType) {
        case 'name':
            return sortByName(recipes);
        case 'time':
            return sortByTime(recipes);
        case 'none':
        default:
            return recipes;
    }
};

// ============================================
// UI RENDERING FUNCTIONS
// ============================================

/**
 * Create HTML for a single recipe card
 * @param {Object} recipe - Recipe object
 * @returns {string} - HTML string for recipe card
 */
const createRecipeCard = (recipe) => {
    return `
        <article class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
            <div class="recipe-content">
                <div class="recipe-header">
                    <span class="recipe-category">${recipe.category}</span>
                    <h2 class="recipe-title">${recipe.title}</h2>
                </div>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <div class="meta-item">
                        <span class="meta-icon">⏱️</span>
                        <span>${recipe.time} min</span>
                    </div>
                    <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
                </div>
            </div>
        </article>
    `;
};

/**
 * Render array of recipes to the DOM
 * @param {Array} recipes - Array of recipe objects to render
 * @returns {void}
 */
const renderRecipes = (recipes) => {
    if (recipes.length === 0) {
        recipeContainer.innerHTML = `
            <div class="empty-state">
                <p>No recipes found matching your criteria. Try a different filter!</p>
            </div>
        `;
        return;
    }
    
    const recipesHTML = recipes.map(createRecipeCard).join('');
    recipeContainer.innerHTML = recipesHTML;
};

// ============================================
// MAIN UPDATE FUNCTION
// ============================================

/**
 * Main orchestration function that combines filtering, sorting, and rendering
 * This is the core of our functional pipeline
 * @returns {void}
 */
const updateDisplay = () => {
    // Start with all recipes
    let recipesToDisplay = recipes;
    
    // Apply current filter (creates new array)
    recipesToDisplay = applyFilter(recipesToDisplay, currentFilter);
    
    // Apply current sort (creates new array)
    recipesToDisplay = applySort(recipesToDisplay, currentSort);
    
    // Render to DOM
    renderRecipes(recipesToDisplay);
    
    // Log for debugging
    console.log(`Displaying ${recipesToDisplay.length} recipes (Filter: ${currentFilter}, Sort: ${currentSort})`);
};

// ============================================
// BUTTON STATE MANAGEMENT
// ============================================

/**
 * Update active state for filter buttons
 * @param {string} filterType - The active filter type
 * @returns {void}
 */
const updateActiveFilterButton = (filterType) => {
    filterButtons.forEach(btn => {
        if (btn.dataset.filter === filterType) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
};

/**
 * Update active state for sort buttons
 * @param {string} sortType - The active sort type
 * @returns {void}
 */
const updateActiveSortButton = (sortType) => {
    sortButtons.forEach(btn => {
        if (btn.dataset.sort === sortType) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
};

// ============================================
// EVENT HANDLERS
// ============================================

/**
 * Handle filter button clicks
 * @param {Event} event - Click event object
 * @returns {void}
 */
const handleFilterClick = (event) => {
    const filterType = event.target.dataset.filter;
    
    // Update state
    currentFilter = filterType;
    
    // Update UI
    updateActiveFilterButton(filterType);
    updateDisplay();
};

/**
 * Handle sort button clicks
 * @param {Event} event - Click event object
 * @returns {void}
 */
const handleSortClick = (event) => {
    const sortType = event.target.dataset.sort;
    
    // Update state
    currentSort = sortType;
    
    // Update UI
    updateActiveSortButton(sortType);
    updateDisplay();
};

// ============================================
// EVENT LISTENER SETUP
// ============================================

/**
 * Set up all event listeners for buttons
 * @returns {void}
 */
const setupEventListeners = () => {
    // Attach filter button listeners
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });
    
    // Attach sort button listeners
    sortButtons.forEach(btn => {
        btn.addEventListener('click', handleSortClick);
    });
    
    console.log('Event listeners attached successfully');
};

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize the application
 * @returns {void}
 */
const init = () => {
    console.log('RecipeJS Part 2 - Initializing...');
    console.log('Total recipes loaded:', recipes.length);
    
    // Set up event listeners
    setupEventListeners();
    
    // Initial render with default state (all recipes, no sort)
    updateDisplay();
    
    console.log('Initialization complete!');
};

// Start the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============================================
// FUNCTIONAL PROGRAMMING CONCEPTS DEMONSTRATED
// ============================================

/*
 * 1. PURE FUNCTIONS:
 *    - filterByDifficulty(), filterByTime()
 *    - sortByName(), sortByTime()
 *    - applyFilter(), applySort()
 *    - createRecipeCard()
 *    All return new values without mutating inputs
 * 
 * 2. HIGHER-ORDER FUNCTIONS:
 *    - Array.filter() - takes predicate function
 *    - Array.sort() - takes comparator function
 *    - Array.map() - takes transformer function
 *    - forEach() - takes callback function
 * 
 * 3. FIRST-CLASS FUNCTIONS:
 *    - Functions passed as event handlers
 *    - Functions stored in variables
 *    - Functions returned from other functions
 * 
 * 4. IMMUTABILITY:
 *    - [...recipes] creates array copies
 *    - filter() returns new arrays
 *    - No mutation of original data
 * 
 * 5. FUNCTION COMPOSITION:
 *    - updateDisplay() chains filter → sort → render
 *    - Pure functions composed to create complex behavior
 * 
 * 6. SEPARATION OF CONCERNS:
 *    - Data layer (recipes)
 *    - Business logic (filter/sort functions)
 *    - UI layer (render functions)
 *    - Event handling (handlers)
 */
