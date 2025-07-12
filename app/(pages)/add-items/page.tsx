'use client'

import AddItemForm from "@/app/_components/AddItemForm"


export default function AddItemPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Item</h1>
      <AddItemForm />
    </main>
  )
}
