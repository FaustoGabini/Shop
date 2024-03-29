import NextLink from 'next/link'

import { ShopLayout } from '@/components/layouts'
import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const EmptyPage = () => {
  return (
    <ShopLayout title="Carrito vacio" pageDescription="No hay articulos en el carrito">
        <Box 
                display="flex" 
                justifyContent="center" 
                alignItems="center" 
                height="calc(100vh - 200px)"
                sx = {{flexDirection: {xs: 'column', sm:'row'}}}>
                <RemoveShoppingCartOutlined sx={{fontSize:100}}/>
                <Box display="flex" flexDirection={"column"} alignItems={"center"}>
                    <Typography>El carrito esta vacio</Typography>
                    <NextLink href="/" passHref>
                    <Typography variant="h4" color="secondary">Regresar</Typography>

                    </NextLink>
                </Box>

            </Box>
    </ShopLayout>
  )
}

export default EmptyPage