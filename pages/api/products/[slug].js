import { db } from "@/database";
import { Product } from "@/models";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getProducts(req, res);

    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

const getProducts = async (req, res) => {
  const { slug } = req.query;

  await db.connect();
  const product = await Product.findOne({ slug })
    .select(
      "title description images price inStock sizes slug type gender -_id"
    )
    .lean();
  await db.disconnect();

  if (!product) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  return res.status(200).json({ product });
};
