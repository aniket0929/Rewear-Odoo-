import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  items: defineTable({
  title: v.string(),
  description: v.string(),
  category: v.string(),
  type: v.string(),
  size: v.string(),
  condition: v.string(),
  tags: v.array(v.string()),
  imageUrls: v.array(v.string()),
  userId: v.optional(v.string()), // added optional coz of ome errors  Fix here
  createdAt: v.number(),

  }),

  purchases: defineTable({
    itemId: v.id("items"),
    buyerId: v.string(),
    purchasedAt: v.number(),
  }).index("by_buyerId", ["buyerId"]),
});
