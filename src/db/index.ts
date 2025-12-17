import { drizzle } from "drizzle-orm/d1"
import type { Env } from "./env"
import { santas_stats } from "./schema"
import { eq, desc } from "drizzle-orm"

export function getDb(env: { DB: D1Database }) {
  return drizzle(env.DB)
}

export function listStats(db: ReturnType<typeof getDb>) {
  return db.select().from(santas_stats).orderBy(desc(santas_stats.id)).all()
}

export function reportStat(
  db: ReturnType<typeof getDb>,
  item: string, 
  elfApprovalRating: number, 
  countryOfDelivery: string, 
  timeToFufill: number
) {
  return db.insert(santas_stats).values({  
    item,
    elfApprovalRating,
    countryOfDelivery,
    timeToFufill
  }).run()
}