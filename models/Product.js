import mongoose, { Schema, model, Model } from "mongoose";

const productSchema = new Schema(
  {
    description: { type: String, required: true },
    images: [{ type: String }],
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    sizes: [
      {
        type: String,
        enum: {
          values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
          message: "{VALUE} no es un tamaño permitido",
        },
      },
    ],
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, required: true, unique: true },
    type: {
      type: String,
      enum: ["shirts", "pants", "hoodies", "hats"],
      message: "{VALUE} no es un tipo permitido",
    },
    gender: {
      type: String,
      required: true,
      enum: ["men", "women", "kid", "unisex"],
      message: "{VALUE} no es un género permitido",
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({ title: "text", tags: "text" });

const Product = mongoose.models.Product || model("Product", productSchema);

export default Product;
