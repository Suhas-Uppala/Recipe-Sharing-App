# Food Recipe Application

A modern React application for discovering and managing food recipes.

## Features

- Browse recipes by category
- Search recipes by name or ingredients
- Smart Ingredient-based Recipe Search
  - Simply add your available ingredients
  - Get instant recipe suggestions
  - Smart matching with minimum ingredient wastage
  - See what extra ingredients you need to buy
  - Filter by cuisine type and cooking time
- View detailed recipe instructions
- Save favorite recipes
- Mobile-friendly design

## Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm 6.0 or later

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Available Scripts

#### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

#### `npm test`
Launches the test runner

#### `npm run build`
Creates a production build in the `build` folder

## How to Use Ingredient-based Search

1. Navigate to the "Search by Ingredients" section
2. Add your available ingredients to the search panel
3. Optionally set filters (cuisine type, cooking time)
4. View matching recipes sorted by:
   - Best match (uses most of your ingredients)
   - Fewest missing ingredients
   - Preparation time

## Technologies Used

- React.js
- React Router
- CSS Modules
- Food Recipe API
- Ingredient Matching Algorithm

## Example Usage

```
Available Ingredients: chicken, tomatoes, onions, garlic
Possible Recipes:
- Chicken Cacciatore (100% match)
- Basic Chicken Curry (90% match, needs curry powder)
- Chicken Soup (85% match, needs celery)
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request


