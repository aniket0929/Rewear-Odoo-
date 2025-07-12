// convex/items.ts
import {query, mutation } from "./_generated/server"
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
     userId: v.string(),
    imageUrls: v.array(v.string()),
    
  },
  handler: async (ctx, args) => {
    const identity=await ctx.auth.getUserIdentity()

        if(!identity){
            throw new Error("Unauthorized")
        }
     
    await ctx.db.insert("items", {
      ...args,
       userId: identity.subject, 
      createdAt: Date.now(),
    })
  },
})

export const getItemsByUser = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");

    return await ctx.db
      .query("items")
      .filter((q) => q.eq(q.field("userId"), identity.subject))
      .order("desc")
      .collect();
  },
});

// convex/items.ts
export const getItemById = query({
  args: { id: v.id("items") },
  handler: async (ctx, args) => {
    const item = await ctx.db.get(args.id);
    if (!item) throw new Error("Item not found");
    return item;
  },
});



export const getAllItems = query({
  args: {
    skip: v.number(),
    limit: v.number(),
  },
  handler: async (ctx, { skip, limit }) => {
    const allItems = await ctx.db
      .query("items")
      .order("desc")
      .collect(); // fetch all, then slice

    return allItems.slice(skip, skip + limit);
  },
});
