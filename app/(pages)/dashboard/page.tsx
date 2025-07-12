"use client";

import UserPurchases from "@/app/_components/getUserPurchases";
import UserDetails from "@/app/_components/UserDetails";
import UserListings from "@/app/_components/UserListings";


export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-10 px-4 max-w-5xl mx-auto space-y-10">
      {/* User Details */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Your Profile</h2>
        <UserDetails />
      </section>

      {/* User Listings */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Your Listings</h2>
        <UserListings />
      </section>

      {/* User Purchases */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Your Purchases</h2>
        <UserPurchases />
      </section>
    </div>
  );
}
