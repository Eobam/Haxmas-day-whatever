import "dotenv/config"
import { drizzle } from 'drizzle-orm/d1';
import { santas_stats } from "./schema"
import { eq, desc } from "drizzle-orm"

export const db = drizzle(process.env.DB_FILE_NAME!)




export function listStats() {
    return db.select().from(santas_stats).orderBy(desc(santas_stats.id)).all()
  }

export function reportStat(item: string, elfApprovalRating: number, countryOfDelivery: string, timeToFufill: number) {


    const res = db.insert(santas_stats).values({
       item,
       elfApprovalRating,
       countryOfDelivery,
       timeToFufill



    }).run()
    return { id: Number(res.lastInsertRowid) }

}

