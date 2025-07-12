// convex/purchases.ts
import { query } from "./_generated/server"

export const getUserPurchases = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()

    if (!identity) {
      throw new Error("Not authenticated")
    }

    return await ctx.db
      .query("purchases")
      .filter((q) => q.eq(q.field("buyerId"), identity.subject))
      .order("desc")
      .collect()
  },
})
