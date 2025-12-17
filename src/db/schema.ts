import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"

export const santas_stats = sqliteTable("santas_stats", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  item: text("item").notNull(),
  timeToFufill: integer("time").notNull().default(0),
  countryOfDelivery: text("country").notNull(),
  elfApprovalRating: integer("rating").notNull(),
})