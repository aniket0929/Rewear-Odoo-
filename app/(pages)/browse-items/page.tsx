"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";
import CategoryCards from "@/app/_components/CategoryCards";
import AllProducts from "@/app/_components/AllProducts";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
    
      {/* Categories Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Categories</h3>
        <CategoryCards />
      </section>

      {/* Filter Dropdowns */}
      <section className="px-4 max-w-6xl mx-auto mb-6 flex gap-4 items-end">
        <div className="flex flex-col">
          <Label>Filter by Category</Label>
          <Select value={selectedCategory} onValueChange={(val) => setSelectedCategory(val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Men">Men</SelectItem>
              <SelectItem value="Women">Women</SelectItem>
              <SelectItem value="Kids">Kids</SelectItem>
              <SelectItem value="Accessories">Accessories</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col">
          <Label>Filter by Type</Label>
          <Select value={selectedType} onValueChange={(val) => setSelectedType(val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="T-Shirt">T-Shirt</SelectItem>
              <SelectItem value="Jeans">Jeans</SelectItem>
              <SelectItem value="Shoes">Shoes</SelectItem>
              <SelectItem value="Dress">Dress</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* All Products Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Explore All Items</h3>
        <AllProducts category={selectedCategory} type={selectedType} />
      </section>
    </div>
  );
}
