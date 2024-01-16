import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { FullScreenLoading } from "@/components/ui";
import { useProducts } from "@/hooks";
import { Typography } from "@mui/material";

const MenPage = () => {
  const { products, isLoading } = useProducts("/products?gender=kid");

  return (
    <ShopLayout
      title="Teslo-Shop - Kid"
      pageDescription={"Los mejores productos para chicos de Teslo Shop"}
    >
      <Typography variant="h1" component="h1">
        Kids
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para Kids
      </Typography>

      {isLoading ? (
        <FullScreenLoading />
      ) : (
        <ProductList products={products.products} />
      )}
    </ShopLayout>
  );
};

export default MenPage;
