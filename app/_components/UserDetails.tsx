'use client'

import { useUser } from '@clerk/nextjs'

export default function UserDetails() {
  const { user } = useUser()

  if (!user) return <p>Loading...</p>

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">User Details</h2>
      <p><strong>Name:</strong> {user.fullName}</p>
      <p><strong>Email:</strong> {user.primaryEmailAddress?.emailAddress}</p>
    </div>
  )
}
