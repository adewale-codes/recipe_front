'use client';

import React, { useState } from 'react';
import IngredientForm from './components/IngredientForm';
import RecipeCard from './components/RecipeCard';
import { fetchRecommendations } from '@/utils/api';

export default function HomePage() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [results, setResults] = useState<{ id: number; title?: string; cuisine?: string; ingredients: string[] }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (ingredients.length === 0) return;
    setLoading(true);
    const data = await fetchRecommendations(ingredients);
    setResults(data);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">Recipe Recommendations</h1>
      <div className="max-w-3xl mx-auto">
        <IngredientForm ingredients={ingredients} setIngredients={setIngredients} onSearch={handleSearch} loading={loading} />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </main>
  );
}