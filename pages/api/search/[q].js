import { db } from "@/database";
import { Product } from "@/models";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return searchProducts(req, res);

    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

const searchProducts = async (req, res) => {
  let { q = "" } = req.query;

  if (q.length === 0) {
    return res.status(400).json({ message: "Debe especificar el query" });
  }

  q = q.toString().toLowerCase();

  await db.connect();
  const products = await Product.find({
    $text: { $search: q },
  }).lean();
  await db.disconnect();

  return res.status(200).json({ products });
};
