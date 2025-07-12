// components/CategoryCards.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = ["Men", "Women", "Kids", "Accessories", "Footwear", "Winterwear"];

export default function CategoryCards() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (category: string) => {
    setSelected(category === selected ? null : category);
    // You can trigger a filter event to parent via props or context
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {categories.map((cat) => (
        <Button
          key={cat}
          variant={selected === cat ? "default" : "outline"}
          onClick={() => handleClick(cat)}
          className="py-6 text-lg"
        >
          {cat}
        </Button>
      ))}
    </div>
  );
}
