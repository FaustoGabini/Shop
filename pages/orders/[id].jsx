import NextLink from "next/link"

import { CartList, OrderSummary } from "@/components/cart"
import { ShopLayout } from "@/components/layouts"
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Typography } from "@mui/material"
import { CreditCardOffOutlined, CreditCardOutlined } from "@mui/icons-material"

const OrderPage = () => {
  return (
    <ShopLayout title="Resumen de la orden #345" pageDescritpion={"Resumen de la orden"}>
        <Typography variant="h1">Orden: #345</Typography>
       {/* 
        <Chip
            sx={{my:2}}
            label="Pendiente de pago"
            variant="outlined"
            color="error"
            icon={<CreditCardOffOutlined/>}
        />
  */}
        <Chip
            sx={{my:2}}
            label="La orden ya fue pagada"
            variant="outlined"
            color="success"
            icon={<CreditCardOutlined/>}
        />

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
                            <h1>Pagar</h1>
                            <Chip
            sx={{my:2}}
            label="La orden ya fue pagada"
            variant="outlined"
            color="success"
            icon={<CreditCardOutlined/>}
        />
                        </Box>
                    </CardContent>
                </Card>
            </Grid>    
        </Grid>
    </ShopLayout>
  )
}

export default OrderPage