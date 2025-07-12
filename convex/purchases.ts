// convex/purchases.ts
import { v } from "convex/values";
import { mutation, query } from "./_generated/server"


export const makePurchase = mutation({
  args: {
    itemId: v.id("items"),
    
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");
    
   


    const item = await ctx.db.get(args.itemId);
    if (!item) throw new Error("Item not found");

    await ctx.db.insert("purchases", {
      itemId: args.itemId,
      buyerId: identity.subject,
      purchasedAt: Date.now(),
    });
  },
});


export const getUserPurchases = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");

    try {
      const purchases = await ctx.db
        .query("purchases")
        .withIndex("by_buyerId", (q) => q.eq("buyerId", identity.subject))
        .order("desc")
        .collect();

      return await Promise.all(
        purchases.map(async (purchase) => {
          const item = await ctx.db.get(purchase.itemId);
          return {
            ...purchase,
            itemTitle: item?.title ?? "Unknown Item",
            date: purchase.purchasedAt,
          };
        })
      );
    } catch (err: any) {
      if (err.message.includes("backfilling")) {
        console.warn("Index is still backfilling. Returning empty list temporarily.");
        return [];
      }
      throw err;
    }
  },
});



