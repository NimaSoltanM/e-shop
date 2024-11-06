import { db } from "@/server/db";
import AddProcutForm from "../../../../features/products/components/product-form";
import Container from "@/components/ui/container";

export default async function AddProcutPage() {
  const categories = await db.query.categories.findMany();

  return (
    <Container>
      <AddProcutForm categories={categories} />
    </Container>
  );
}
