
import React from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  setSelectedCategory 
}: CategoryFilterProps) {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-2 max-w-full">
      <button
        onClick={() => setSelectedCategory(null)}
        className={`whitespace-nowrap px-3 py-1 rounded-full text-sm ${
          selectedCategory === null 
            ? 'bg-primary text-white' 
            : 'bg-muted hover:bg-muted/80 text-muted-foreground'
        }`}
      >
        All
      </button>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`whitespace-nowrap px-3 py-1 rounded-full text-sm ${
            selectedCategory === category 
              ? 'bg-primary text-white' 
              : 'bg-muted hover:bg-muted/80 text-muted-foreground'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
