'use client'

import { UserButton } from "@clerk/nextjs"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* App Name */}
      <Link href="/">
        <h1 className="text-2xl font-bold text-blue-600 hover:opacity-80 cursor-pointer">
          ReWear
        </h1>
      </Link>

      {/* Clerk User Button */}
      <UserButton/>
    </nav>
  )
}
