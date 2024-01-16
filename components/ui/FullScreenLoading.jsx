import { Box, CircularProgress, Typography } from '@mui/material'

export const FullScreenLoading = () => {
  return (
    <Box 
    display="flex" 
    flexDirection="column"  
    justifyContent="center" 
    alignItems="center" 
    height="calc(100vh - 200px)"
    >
        <Box mb={2}>
            <Typography variant="h2" fontWeight={200} >Cargando...</Typography>
        </Box>
        <CircularProgress thickness={2} />
  </Box>
  )
}
