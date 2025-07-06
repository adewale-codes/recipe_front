import React from 'react';

type Recipe = {
  id: number;
  title?: string;
  cuisine?: string;
  ingredients: string[];
};

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
  return (
    <div className="bg-white shadow rounded p-4 flex flex-col h-full text-black">
      <h2 className="text-xl font-semibold mb-2">{recipe.title ?? `Recipe ${recipe.id}`}</h2>
      {recipe.cuisine && (
        <p className="text-sm text-gray-500 mb-2 capitalize">
          {recipe.cuisine.replace('_', ' ')}
        </p>
      )}
      <ul className="flex-1 list-disc list-inside text-sm space-y-1 overflow-auto">
        {recipe.ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
    </div>
  );
}
