import NextLink from "next/link"

import { CartList, OrderSummary } from "@/components/cart"
import { ShopLayout } from "@/components/layouts"
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material"

const SummaryPage = () => {
  return (
    <ShopLayout title="Resumen de orden" pageDescritpion={"Resumen de la orden"}>
        <Typography variant="h1">Resumen de la orden</Typography>
        <Grid container>
            <Grid item xs={12} sm={7}>
                <CartList />
            </Grid> 
            <Grid item xs={12} sm={5}>
                <Card className="summary-card">
                    <CardContent>
                        <Typography variant="h2">Resumen (3 productos)</Typography>
                        <Divider sx={{my:1}}/>

                        <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">Direccion de entrega</Typography>
                            <NextLink href="/checkout/address">
                                Editar
                            </NextLink>
                        </Box>

                       
                        <Typography >Fausto Gabini</Typography>
                        <Typography >Boeer 336</Typography>
                        <Typography >San Nicolas, Buenos Aires</Typography>
                        <Typography >Argentina</Typography>
                        <Typography >+54 3364549410</Typography>
                        
                        <Divider sx={{my:1}}/>
                        
                        <Box display="flex" justifyContent="end">
                            <NextLink href="/cart">
                                Editar Pedido
                            </NextLink>
                        </Box>


                        <OrderSummary/>
                        <Box
                         sx={{mt: 3}}>
                            <Button color="secondary" className='circular-btn' fullWidth>Confirmar orden</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>    
        </Grid>
    </ShopLayout>
  )
}

export default SummaryPage