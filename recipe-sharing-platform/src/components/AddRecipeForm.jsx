import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// The AddRecipeForm component for submitting new recipes
function AddRecipeForm() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    preparationSteps: '',
  });

  // State for form validation errors and submission status
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle changes to form inputs
  const handleChange = (e) => {
    // Explicitly using e.target.name and e.target.value as requested
    const name = e.target.name;
    const value = e.target.value;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If there are no errors, proceed with submission
    if (Object.keys(validationErrors).length === 0) {
      // In a real application, you would send this data to an API
      console.log("Submitting new recipe:", formData);

      // Simulate a successful submission
      setIsSubmitted(true);
      
      // Reset the form after submission
      setFormData({
        title: '',
        ingredients: '',
        preparationSteps: '',
      });
      // Optionally, clear the submission message after a few seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  // Basic validation logic
  const validateForm = (data) => {
    const errors = {};
    if (!data.title.trim()) {
      errors.title = "Recipe title is required.";
    }
    if (!data.ingredients.trim()) {
      errors.ingredients = "Ingredients are required.";
    }
    if (!data.preparationSteps.trim()) {
      errors.preparationSteps = "Preparation steps are required.";
    }
    return errors;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-sm md:max-w-md transition-all duration-300">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
        Add a New Recipe
      </h2>

      {isSubmitted && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded">
          <p className="font-bold">Success!</p>
          <p>Your recipe has been submitted.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white ${
              errors.title ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            placeholder="e.g., Classic Spaghetti Carbonara"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title}</p>
          )}
        </div>

        {/* Ingredients Field */}
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            rows="4"
            value={formData.ingredients}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            placeholder="200g spaghetti&#10;100g pancetta&#10;2 large eggs"
          ></textarea>
          {errors.ingredients && (
            <p className="mt-1 text-sm text-red-500">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps Field */}
        <div>
          <label htmlFor="preparationSteps" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Preparation Steps
          </label>
          <textarea
            id="preparationSteps"
            name="preparationSteps"
            rows="6"
            value={formData.preparationSteps}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white ${
              errors.preparationSteps ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            placeholder="1. Cook the spaghetti in salted water.&#10;2. Fry the pancetta until crispy.&#10;3. Mix the eggs and cheese..."
          ></textarea>
          {errors.preparationSteps && (
            <p className="mt-1 text-sm text-red-500">{errors.preparationSteps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 mt-2"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;