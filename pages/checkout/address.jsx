import { ShopLayout } from '@/components/layouts'
import { FormControl, Grid, InputLabel, TextField, Typography, Select, MenuItem, Box, Button } from '@mui/material'
import React from 'react'

const AdressPage = () => {
  return (
    <ShopLayout title="Dirección" pageDescription="Ingresa tu dirección de envio">
        <Typography variant="h1" component="h1">Dirección</Typography>
        <Grid container spacing={2} sx={{mt: 2}}>
            <Grid item xs={12} sm={6}>
                <TextField label="Nombre" variant="filled" fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label="Apellido" variant="filled" fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label="Direccion" variant="filled" fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label="Direccion 2 (opcional)" variant="filled" fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label="Codigo Postal" variant="filled" fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label="Ciudad" variant="filled" fullWidth/>
            </Grid>

            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Select
                      value={1}
                      label="Pais"
                      variant="filled"
                  >
                      <MenuItem value={10}>Argentina</MenuItem>
                      <MenuItem value={20}>Brasil</MenuItem>
                      <MenuItem value={30}>Uruguay</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label="Telefono" variant="filled" fullWidth/>
            </Grid>
        </Grid>
        
        <Box sx={{mt:5}} display="flex" justifyContent={"end"}>
          <Button color="secondary" className='circular-btn' size="large">
            Revisar pedido
          </Button>
        </Box>

    </ShopLayout>
  )
}

export default AdressPage