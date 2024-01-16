import NextLink from "next/link";

import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { ItemCounter } from "../ui";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context";

export const CartList = ({ editable = false }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { cart } = useContext(CartContext);

  return (
    <div>
      {isClient
        ? cart.map((product) => (
            <Grid container spacing={2} sx={{ mb: 1 }} key={product.slug}>
              <Grid item xs={3}>
                <NextLink href={`/product/${product.slug}`}>
                  <CardActionArea>
                    <CardMedia
                      image={`/products/${product.image}`}
                      component="img"
                      sx={{ borderRadius: "5px" }}
                    />
                  </CardActionArea>
                </NextLink>
              </Grid>
              <Grid item xs={7}>
                <Box display="flex" flexDirection="column">
                  <Typography variant="body1">{product.title}</Typography>
                  <Typography variant="body1">
                    Talla <strong>M</strong>
                  </Typography>
                  {editable ? (
                    <ItemCounter
                      currentValue={product.quantity}
                      maxValue={10}
                      updateQuantity={() => {}}
                    />
                  ) : (
                    <Typography variant="body1">
                      Cantidad:{" "}
                      <strong>
                        {product.quantity}{" "}
                        {product.quantity > 1 ? "producto" : "productos"}
                      </strong>
                    </Typography>
                  )}
                </Box>
              </Grid>
              <Grid
                item
                xs={2}
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <Typography>${product.price}</Typography>

                {editable && (
                  <Button variant="text" color="secondary">
                    Remover
                  </Button>
                )}
              </Grid>
            </Grid>
          ))
        : null}
    </div>
  );
};
