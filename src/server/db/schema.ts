import { sql } from "drizzle-orm";
import { index, int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

export const createTable = sqliteTableCreator((name) => `e-shop_${name}`);

export const categories = createTable(
  "category",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name", { length: 256 }).notNull(),
    description: text("description", { length: 256 }),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
      () => new Date(),
    ),
  },
  (table) => ({
    nameIdx: index("category_name_idx").on(table.name),
  }),
);

export type Category = typeof categories.$inferSelect;

export const products = createTable(
  "product",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name", { length: 256 }).notNull(),
    description: text("description", { length: 256 }),
    imageUrl: text("image_url", { length: 256 }),
    stock: int("stock", { mode: "number" }).notNull().default(0),
    price: int("price", { mode: "number" }).notNull(),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
      () => new Date(),
    ),

    categoryId: int("category_id")
      .notNull()
      .references(() => categories.id, {
        onDelete: "restrict",
        onUpdate: "cascade",
      }),
  },
  (table) => ({
    nameIdx: index("product_name_idx").on(table.name),
    categoryIdx: index("product_category_idx").on(table.categoryId),
    priceIdx: index("product_price_idx").on(table.price),
  }),
);

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
