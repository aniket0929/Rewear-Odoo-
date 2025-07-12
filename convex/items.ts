// convex/items.ts
import { mutation } from "./_generated/server"
import { v } from "convex/values"

export const addItem = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    category: v.string(),
    type: v.string(),
    size: v.string(),
    condition: v.string(),
    tags: v.array(v.string()),
    imageUrls: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const identity=await ctx.auth.getUserIdentity()

        if(!identity){
            throw new Error("Unauthorized")
        }

    await ctx.db.insert("items", {
      ...args,
      createdAt: Date.now(),
    })
  },
})
