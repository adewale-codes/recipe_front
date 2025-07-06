import React, { useState } from 'react';

type Props = {
  ingredients: string[];
  setIngredients: (ings: string[]) => void;
  onSearch: () => void;
  loading: boolean;
};

export default function IngredientForm({ ingredients, setIngredients, onSearch, loading }: Props) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    const ing = input.trim().toLowerCase();
    if (ing && !ingredients.includes(ing)) {
      setIngredients([...ingredients, ing]);
    }
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd();
    }
  };

  const handleRemove = (rem: string) => {
    setIngredients(ingredients.filter((i) => i !== rem));
  };

  return (
    <div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add an ingredient"
          className="flex-1 p-2 border rounded text-black"
        />
        <button
          onClick={handleAdd}
          disabled={!input.trim()}
          className="px-4 py-2 bg-green-600 text-white rounded disabled:bg-gray-400"
        >
          Add
        </button>
        <button
          onClick={onSearch}
          disabled={loading || ingredients.length === 0}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {ingredients.map((ing) => (
          <span
            key={ing}
            className="flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm"
          >
            {ing}
            <button
              onClick={() => handleRemove(ing)}
              className="ml-2 text-gray-600 hover:text-gray-800"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}