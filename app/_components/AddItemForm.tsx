'use client'

import { useState } from "react"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { UploadButton } from "@/utils/uploadthing"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function AddItemForm() {
  const router = useRouter()
  const addItem = useMutation(api.items.addItem)

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    type: "",
    size: "",
    condition: "",
    tags: "",
    imageUrls: [] as string[],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const tagsArray = form.tags.split(",").map(tag => tag.trim())
    await addItem({
        ...form,
        tags: tagsArray,
        imageUrls: form.imageUrls,
        userId: ""
    })
    router.push("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded shadow">
      {/* Upload Images */}
      <div>
        <Label>Upload Images</Label>
        <UploadButton
    endpoint="imageUploader"
    onClientUploadComplete={(res) => {
      const urls = res.map(file => file.url)
      setForm(prev => ({
        ...prev,
        imageUrls: [...prev.imageUrls, ...urls], // support multiple
      }))
    }}
    onUploadError={(error) => {
      alert(`Upload failed: ${error.message}`)
    }}
    appearance={{
      button: "bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition",
      container: "mt-2",
    }}
  />
      </div>

      <div>
        <Label>Title</Label>
        <Input name="title" value={form.title} onChange={handleChange} required />
      </div>

      <div>
        <Label>Description</Label>
        <Textarea name="description" value={form.description} onChange={handleChange} required />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Category</Label>
          <Input name="category" value={form.category} onChange={handleChange} required />
        </div>

        <div>
          <Label>Type</Label>
          <Input name="type" value={form.type} onChange={handleChange} required />
        </div>

        <div>
          <Label>Size</Label>
          <Input name="size" value={form.size} onChange={handleChange} required />
        </div>

        <div>
          <Label>Condition</Label>
          <Input name="condition" value={form.condition} onChange={handleChange} required />
        </div>
      </div>

      <div>
        <Label>Tags (comma-separated)</Label>
        <Input name="tags" value={form.tags} onChange={handleChange} />
      </div>

      <Button type="submit" className="w-full">Submit Item</Button>
    </form>
  )
}
