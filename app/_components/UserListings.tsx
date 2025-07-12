'use client'

import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

export default function UserListings() {
  const listings = useQuery(api.items.getItemsByUser)

  if (!listings) return <p>Loading listings...</p>

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Your Listings</h2>
      <ul className="space-y-2">
        {listings.map(item => (
          <li key={item._id}>
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm text-gray-600">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
