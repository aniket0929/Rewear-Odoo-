import AllProducts from "@/app/_components/AllProducts";
import CategoryCards from "@/app/_components/CategoryCards";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 bg-green-50">
        <h2 className="text-4xl font-bold mb-4">Swap, Save, Sustain</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
          ReWear helps you exchange unused clothing directly or via a point-based system. Join our mission to reduce textile waste and promote sustainable fashion.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/dashboard">
            <Button>Start Swapping</Button>
          </Link>
          <Link href="/browse-items">
            <Button variant="outline">Browse Items</Button>
          </Link>
          <Link href="/add-items">
            <Button variant="outline">List an Item</Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Categories</h3>
        <CategoryCards/>
      </section>

      {/* All Products Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Explore All Items</h3>
        <AllProducts />
      </section>
    </div>
  );
}
