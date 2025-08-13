import React from 'react';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail';
import { createRoot } from 'react-dom/client';


function App() {
  return (
    // Router component to enable client-side routing
    <Router>
      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen font-sans">
        {/* Routes component to define the different pages */}
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<HomePage />} />
          
          {/* Route for the recipe detail page with a dynamic ID parameter */}
          <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
