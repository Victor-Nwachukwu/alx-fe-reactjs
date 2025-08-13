import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data.json';
import { createRoot } from 'react-dom/client';



function RecipeDetail() {
  // Use useParams hook to get the 'id' from the URL
  const { id } = useParams();
  console.log("ID from URL:", id);

  // State to store the recipe data
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data based on the ID from the URL
    // In a real app, this might be an API call
    const foundRecipe = data.find(rec => rec.id === id);

    if (foundRecipe) {
      setRecipe(foundRecipe);
    }
    setLoading(false);
  }, [id]); // Re-run this effect if the URL 'id' changes

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">Loading recipe details...</p>
      </div>
    );
  }

  // Handle case where recipe is not found
  if (!recipe) {
    return (
      <div className="container mx-auto text-center p-8">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Recipe Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">The recipe you are looking for does not exist.</p>
        <Link to="/" className="text-blue-500 hover:underline">
          &larr; Back to all recipes
        </Link>
      </div>
    );
  }

  // Main component rendering for a found recipe
  return (
    <div className="container mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden my-8 lg:my-12 transition-transform duration-300 transform hover:scale-[1.01]">
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover sm:h-80 md:h-96"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {recipe.title}
          </h1>
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-8 grid md:grid-cols-2 gap-8">
        {/* Summary and Ingredients */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Summary
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
            {recipe.summary}
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-base">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Cooking Instructions */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Instructions
          </h2>
          <pre className="whitespace-pre-wrap font-sans text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            {recipe.instructions}
          </pre>
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-8 border-t border-gray-200 dark:border-gray-700">
        <Link to="/" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-200 text-lg flex items-center">
          &larr; Back to all recipes
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;
