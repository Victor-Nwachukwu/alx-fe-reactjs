import { useEffect, useState,  } from 'react';
import data from './data.json'; // Import the JSON data. This path assumes data.json is in the parent 'src' directory.
import './App.css'


function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen p-4">
      <HomePage />
    </div>
  );
}

function HomePage() {
  // 1. Initialize state to store the recipes
  const [recipes, setRecipes] = useState([]);

  // 2. Use useEffect to load the data when the component mounts
  useEffect(() => {
    // The data is already imported, so we just set it to the state
    setRecipes(data);
  }, []); // The empty dependency array ensures this runs only once on mount

  return (
    <div className="container mx-auto p-4 sm:p-12 lg:p-8">
      <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-600 dark:text-blue-400 mb-8 sm:mb-12">
        My Recipes
      </h1>
      
      {/* 3. Use a responsive grid to display the recipe cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          // Card for each recipe, with responsive padding, shadow, and hover effect
          <div
            key={recipe.id}
            className=" dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-3xl border-2 border-transparent hover:border-red-500"
          >
            {/* The recipe image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover sm:h-56 md:h-64"
            />
            
            {/* Card content with responsive padding and text sizes */}
            <div className="p-4 sm:p-6">
              <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900 dark:text-white mb-2">
                {recipe.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-red-400 leading-relaxed">
                {recipe.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
