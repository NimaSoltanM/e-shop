import { sql } from "drizzle-orm";
import { index, int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

export const createTable = sqliteTableCreator((name) => `e-shop_${name}`);

export const categories = createTable("category", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  description: text("description", { length: 256 }),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date(),
  ),
});

export type Category = typeof categories.$inferSelect;

export const products = createTable("product", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }),
  description: text("description", { length: 256 }),
  imageUrl: text("image_url", { length: 256 }),
  stock: int("stock", { mode: "number" }),
  price: int("price", { mode: "number" }),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date(),
  ),

  categoryId: int("category_id").references(() => categories.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
});

export type Product = typeof products.$inferSelect;

//Realtions

export const categoriesRelations = relations(categories, ({ many }) => {
  return {
    products: many(products),
  };
});

export const productsRelations = relations(products, ({ one, many }) => {
  return {
    category: one(categories, {
      fields: [products.categoryId],
      references: [categories.id],
    }),
  };
});
