"use client";

import { useEffect, useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
type AllProductsProps = {
  category: string;
  type: string;
};
const PAGE_SIZE = 8;

export default function AllProducts({ category, type }: AllProductsProps) {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState<any[]>([]);

  const data = useQuery(api.items.getAllItems, { skip: page * PAGE_SIZE, limit: PAGE_SIZE });

  useEffect(() => {
    if (data) {
      setItems(data);
    }
  }, [data]);

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 0));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item._id}
            className="border rounded-lg p-4 bg-white shadow hover:shadow-md transition"
          >
            <img src={item.imageUrls?.[0]} alt={item.title} className="w-full h-48 object-cover rounded" />
            <h4 className="font-semibold text-lg mt-2">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.category}</p>
            <p className="text-sm">{item.condition}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <Button onClick={prevPage} disabled={page === 0} variant="outline">
          Previous
        </Button>
        <Button onClick={nextPage} disabled={!data || data.length < PAGE_SIZE}>
          Next
        </Button>
      </div>
    </div>
  );
}
