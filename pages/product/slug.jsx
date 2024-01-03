import React from 'react'

import { ShopLayout } from '@/components/layouts'
import { ProductSlideshow, SizeSelector } from '@/components/products'
import { initialData } from '@/database/product'
import { Box, Button, Chip, Grid, Typography } from '@mui/material'
import { ItemCounter } from '@/components/ui'

const product = initialData.products[0]


const ProducPage = () => {



  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={7}>
            <ProductSlideshow images={product.images}/>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box display="flex" flexDirection="column">
              {/* titulos */}
              <Typography variant='h1' component="h1">{product.title}</Typography>
              <Typography variant='subtitle' component="h2">${product.price}</Typography>

              {/* Cantidad */}
              <Box sx={{my: 2}}>
                <Typography variant="subtitle2">Cantidad</Typography>
                <ItemCounter/>
                <Typography variant="subtitle2">Talle</Typography>
                <SizeSelector sizes={product.sizes} selectedSize={product.sizes[2]}/>

              </Box>
                
                {/* Agregar al carrito*/}
                <Button
                  color="secondary"
                  className="circular-btn">
                    Agregar al carrito
                </Button>
                {/* <Chip label="No hay en Stock" color="error" variant="outlined"/> */}
                {/* Description */}
                
                <Box sx={{mt: 3}}>
                  <Typography variant="subtitle2">Descripción</Typography>
                  <Typography variant="body2">{product.description}</Typography>
                </Box>
            </Box>
          </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default ProducPage