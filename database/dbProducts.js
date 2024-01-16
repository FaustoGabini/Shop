import { Product } from "@/models";
import { db } from ".";

export const getProductsBySlug = async (slug) => {
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();

  if (!product) {
    return null;
  }

  return JSON.parse(JSON.stringify(product));
};

export const getAllProductSlugs = async (slug) => {
  await db.connect();
  const slugs = await Product.find({ slug }).select("slug -_id").lean();
  await db.disconnect();

  return slugs;
};

export const getProductsByTerm = async (term) => {
  term = term.toString().toLowerCase();

  await db.connect();
  const products = await Product.find({ $text: { $search: term } })
    .select("title images price inStock slug -_id")
    .lean();
  await db.disconnect();

  return products;
};

export const getAllProduct = async () => {
  await db.connect();
  const products = await Product.find()
    .select("title images price inStock slug -_id")
    .lean();
  await db.disconnect();

  return products;
};
