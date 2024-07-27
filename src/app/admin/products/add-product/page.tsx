import { db } from "@/server/db";
import AddProcutForm from "./addProcutForm";
import Container from "@/components/ui/container";

export default async function AddProcutPage() {
  const categories = await db.query.categories.findMany();

  return (
    <Container>
      <AddProcutForm categories={categories} />
    </Container>
  );
}
