import { useMemo, useState } from "react";
import NextLink from "next/link";

import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";

export const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const productImage = useMemo(() => {
    return isHovered
      ? `/products/${product.images[1]}`
      : `/products/${product.images[0]}`;
  }, [isHovered, product.images]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href={`/product/${product.slug}`} passHref prefetch={false}>
          <CardActionArea>
            {product.inStock === 0 && (
              <Chip
                color="primary"
                label="Sin Stock"
                sx={{
                  position: "absolute",
                  zIndex: 99,
                  top: "10px",
                  left: "10px",
                }}
              />
            )}

            <CardMedia
              component="img"
              image={productImage}
              alt={product.title}
              className="fadeIn"
              onLoad={() => {
                setIsImageLoaded(true);
              }}
            />
          </CardActionArea>
        </NextLink>
      </Card>

      <Box
        sx={{ mt: 1, display: isImageLoaded ? "block" : "none" }}
        className="fadeIn"
      >
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>${product.price}</Typography>
      </Box>
    </Grid>
  );
};
