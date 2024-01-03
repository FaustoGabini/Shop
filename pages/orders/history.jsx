import NextLink from 'next/link'

import { ShopLayout } from '@/components/layouts'
import { Chip, Grid, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const columns = [
    {field: 'id', headerName: 'ID', width: 100},
    {field: 'fullname', headerName: 'Nombre completo', width: 300},
    {field: 'paid', headerName: 'Pagado', width:200, 
        renderCell: (params) => (
            <Typography variant="body2">
                {params.row.paid ? 
                    <Chip color="success" label="Pagada" variant="outlined"/> 
                    : 
                    <Chip color="error" label="No Pagada" variant="outlined"/>
                }
            </Typography>
        )
    }, 
    {field: 'orden', headerName: 'Ver orden', width: 200, sortable: false, 
        renderCell: (params) => (
            <NextLink href={`/orders/${params.row.id}`} >
                Ver orden
            </NextLink>
            
        )   
    },
]

const rows = [

    {
        id: 1,
        paid: false, 
        fullname: "Fausto Gabini", 
    },

    {
        id: 2, 
        paid: true, 
        fullname: "Martina Gomez"
    },

    {
        id: 3,
        paid: false,  
        fullname: "Atom Gabini"
    },

    {
        id: 4,
        paid: true,  
        fullname: "Valeria Ribak"
    },

    {
        id: 5,
        paid: false,  
        fullname: "Ernesto Gabini"
    },

]

const HistoryPage = () => {
  return (
    <ShopLayout title="Historial de ordenes" pageDescription="Historial de ordenes del cliente">
        <Typography variant="h1" component="h1">Historial de ordenes</Typography>
        <Grid container>
            <Grid item xs={12} sx={{height:650, width:'100%'}}>
                <DataGrid
                    rows = {rows}
                    columns = {columns}
                    pageSize={10}
                    rowPerPageOptions={[10]}
                />    
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default HistoryPage