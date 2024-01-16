import { ShopLayout } from "@/components/layouts";
import { Box, Typography } from "@mui/material";
import { ProductList } from "@/components/products";
import { FullScreenLoading } from "@/components/ui";
import { dbProducts } from "@/database";

export default function SearchPage({ products, foundProducts, query }) {
  return (
    <ShopLayout
      title="Teslo-Shop - Home"
      pageDescription={"Encuentra los mejores productos de Teslo aqui"}
    >
      <Typography variant="h1" component="h1">
        Buscar Producto
      </Typography>
      {foundProducts ? (
        <Typography variant="h2" sx={{ mb: 1 }} textTransform="capitalize">
          Termino: {query}
        </Typography>
      ) : (
        <Box display="flex">
          <Typography variant="h2" sx={{ mb: 1 }}>
            No encontramos ningún producto
          </Typography>
          <Typography
            variant="h2"
            sx={{ ml: 1 }}
            color="secondary"
            textTransform="capitalize"
          >
            {query}
          </Typography>
        </Box>
      )}

      <ProductList products={products} />
    </ShopLayout>
  );
}

export async function getServerSideProps({ params }) {
  const { query = "" } = params;

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  let products = await dbProducts.getProductsByTerm(query);
  const foundProducts = products.length > 0;
  // ToDo: Retornar otros productos

  if (!foundProducts) {
    products = await dbProducts.getAllProduct();
  }

  return {
    props: {
      products,
      foundProducts,
      query,
    },
  };
}
