"use server";

import { db } from "@/server/db";
import { products } from "@/server/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { ProductSchema } from "../schemas";

export const addProductAction = async (
  values: z.infer<typeof ProductSchema>,
) => {
  const validatedFields = ProductSchema.safeParse(values);

  if (validatedFields.error) {
    return { error: "invalid fields" };
  }

  const { name, description, imageUrl, stock, price, categoryId } =
    validatedFields.data;

  await db.insert(products).values({
    name,
    description,
    imageUrl,
    stock,
    price: price * 100,
    categoryId,
  });

  //TODO: revalidate path more neat. /products/${productname}
  revalidatePath("/products");
  redirect("/products/laptop");
};
