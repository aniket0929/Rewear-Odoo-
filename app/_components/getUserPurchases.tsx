"use client"

import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

export default function UserPurchases() {
  const purchases = useQuery(api.purchases.getUserPurchases)

  if (!purchases) return <p>Loading purchases...</p>

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Your Purchases</h2>
      <ul className="space-y-4">
        {purchases.map((purchase) => (
          <li key={purchase._id} className="p-4 border rounded">
            <p className="font-semibold">{purchase.itemTitle || "Item unavailable"}</p>
            <p className="text-sm text-gray-600">
              Purchased on:{" "}
              {new Date(purchase.date).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
