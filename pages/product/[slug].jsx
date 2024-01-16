import React, { useContext, useState } from "react";
import { useRouter } from "next/router";

import { ShopLayout } from "@/components/layouts";
import { ProductSlideshow, SizeSelector } from "@/components/products";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { ItemCounter } from "@/components/ui";
import { getProductsBySlug } from "@/database/dbProducts";
import { dbProducts } from "@/database";
import { CartContext } from "@/context";

const ProducPage = ({ product }) => {
  const router = useRouter();

  const { cart, onAddProductToCart } = useContext(CartContext);

  const [tempCartProduct, setTempCartProduct] = useState({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    quantity: 1,
  });

  const selectedSize = (size) => {
    setTempCartProduct({
      ...tempCartProduct,
      size,
    });
  };

  const onUpdateQuantity = (value) => {
    setTempCartProduct({
      ...tempCartProduct,
      quantity: value,
    });
  };

  const onAddProduct = () => {
    if (!tempCartProduct.size) {
      return;
    }
    // Llamar la action del context para agregar al carrito
    onAddProductToCart(tempCartProduct);
    router.push("/cart");
  };

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            {/* titulos */}
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography variant="subtitle" component="h2">
              ${product.price}
            </Typography>

            {/* Cantidad */}
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
              <ItemCounter
                currentValue={tempCartProduct.quantity}
                updateQuantity={(value) => onUpdateQuantity(value)}
                maxValue={5}
              />
              <Typography variant="subtitle2">Talle</Typography>
              <SizeSelector
                sizes={product.sizes}
                selectedSize={tempCartProduct.size}
                onSelectSize={(size) => selectedSize(size)}
              />
            </Box>

            {product.inStock > 0 ? (
              <Button
                color="secondary"
                className="circular-btn"
                onClick={onAddProduct}
              >
                {tempCartProduct.size
                  ? "Agregar al carrito"
                  : "Selecciona un talle"}
              </Button>
            ) : (
              <Chip label="No hay en Stock" color="error" variant="outlined" />
            )}

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Descripción</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

/*
export const getServerSideProps = async ({ params }) => {
  const { slug } = params;
  const product = await getProductsBySlug(slug);

  if (!product) {
    return {
      redirec: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
  };
}; */

// GetStaticPaths
export const getStaticPaths = async (ctx) => {
  const productsSlug = await dbProducts.getAllProductSlugs();

  return {
    paths: productsSlug.map(({ productsSlug }) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug = "" } = params;
  const product = await getProductsBySlug(slug);

  if (!product) {
    return {
      redirec: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 84600,
  };
};

export default ProducPage;
