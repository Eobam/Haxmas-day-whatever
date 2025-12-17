import { getDb, reportStat, listStats } from "./db"
import { Hono } from 'hono'

type Env = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Env }>()

app.get("/api/santas_stats", async (c) => {
  const db = getDb(c.env)
  return c.json(await listStats(db))
})

app.post("/api/santas_stats", async (c) => {
  const db = getDb(c.env)
  const body = await c.req.json().catch(() => null)
  const item = (body?.item ?? "").toString().trim()
  const timeToFulfill = parseInt(body?.timeToFulfill ?? "0")
  const countryOfDelivery = (body?.countryOfDelivery ?? "").toString().trim()
  const elfApprovalRating = parseInt(body?.elfApprovalRating ?? "0")

  if (!item) return c.json({ error: "item is required" }, 400)

  return c.json(
    await reportStat(db, item, elfApprovalRating, countryOfDelivery, timeToFulfill), // ← Add db here
    201
  )
})
export default app