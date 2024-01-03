import NextLink from "next/link"

import { initialData } from "@/database/product"
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material"
import { ItemCounter } from "../ui"


const productsInCart = [
    initialData.products[0], 
    initialData.products[1],
    initialData.products[2],
]

export const CartList = ({editable = false}) => {
  return (
    <>
        {productsInCart.map((product) => (

                <Grid container spacing={2}  sx ={{mb: 1}}key={product.slug}>
                        <Grid item xs={3}>
                            <NextLink href="/product/slug" >
                                        <CardActionArea>
                                            <CardMedia
                                                image={`/products/${product.images[0]}`}
                                                component="img"
                                                sx={{borderRadius: '5px'}}
                                            />                                            
                                        </CardActionArea>
                            </NextLink>
                        </Grid>
                        <Grid item xs={7}>
                            <Box display="flex" flexDirection="column">
                                <Typography variant="body1">{product.title}</Typography>
                                <Typography variant="body1">Talla <strong>M</strong></Typography>
                                {
                                    editable 
                                    ? <ItemCounter/>
                                    : <Typography variant="body1">Cantidad: <strong>1</strong></Typography> 
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={2} display="flex" alignItems="center" flexDirection="column">
                            <Typography>${product.price}</Typography>

                           {editable &&
                            ( <Button variant="text" color="secondary">
                                    Remover
                                </Button>)
                           }
                        </Grid>
                        
                </Grid>
            
            ))
        }
    </>
  )
}
