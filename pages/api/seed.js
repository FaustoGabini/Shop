import { db, seedDatabase } from "@/database";
import { Product } from "@/models";

export default async function handler(req, res) {
  if (process.env.NODE_ENV !== "development") {
    return res.status(401).json({ message: "No tiene acceso a esta API" });
  }
  await db.connect();

  await Product.deleteMany({});
  await Product.insertMany(seedDatabase.initialData.products);

  await db.disconnect();
  res.status(200).json({ message: "Proceso realizado correctamente" });
}
