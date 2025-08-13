import React, { useState, useEffect } from 'react';
import data from '../data.json'; // Import the JSON data. Adjust the path as necessary.
import { Link } from 'react-router-dom';


function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-8 sm:mb-12">
        Our Recipes
      </h1>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          // Link makes the entire card clickable and navigates to the detail page
          <Link
            to={`/recipes/${recipe.id}`}
            key={recipe.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl border-2 border-transparent hover:border-blue-500 block"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover sm:h-56 md:h-64"
            />
            
            <div className="p-4 sm:p-6">
              <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900 dark:text-white mb-2">
                {recipe.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {recipe.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
