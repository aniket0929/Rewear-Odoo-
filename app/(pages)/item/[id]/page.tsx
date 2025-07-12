"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Id } from "@/convex/_generated/dataModel";
import { useState } from "react";
import Link from "next/link";

export default function ItemDetailPage() {
  const { id } = useParams();
  const [purchased, setPurchased] = useState(false);

  const item = useQuery(api.items.getItemById, { id: id as Id<"items"> });
  const makePurchase = useMutation(api.purchases.makePurchase);

  const handleBuy = async () => {
    try {
      await makePurchase({ itemId: id as Id<"items"> });
      setPurchased(true);
    } catch (error) {
      alert("Purchase failed: " + error);
    }
  };

  if (!item) return <p className="p-4">Loading item...</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <img
        src={item.imageUrls?.[0]}
        alt={item.title}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
      <p className="text-gray-600 mb-4">{item.description}</p>
      <div className="mb-4 space-y-1">
        <p><strong>Category:</strong> {item.category}</p>
        <p><strong>Type:</strong> {item.type}</p>
        <p><strong>Size:</strong> {item.size}</p>
        <p><strong>Condition:</strong> {item.condition}</p>
        <p><strong>Tags:</strong> {item.tags.join(", ")}</p>
      </div>

      {!purchased ? (
        <Button onClick={handleBuy}>Buy</Button>
      ) : (
        <Link href="/dashboard">
          <Button >Go to Dashboard</Button>
        </Link>
      )}
    </div>
  );
}
