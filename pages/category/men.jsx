import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { FullScreenLoading } from "@/components/ui";
import { useProducts } from "@/hooks";
import { Typography } from "@mui/material";

const MenPage = () => {
  const { products, isLoading } = useProducts("/products?gender=men");
  return (
    <ShopLayout
      title="Teslo-Shop - Men"
      pageDescription={"Los mejores productos para hombres de Teslo Shop"}
    >
      <Typography variant="h1" component="h1">
        Hombres
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para hombres
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
