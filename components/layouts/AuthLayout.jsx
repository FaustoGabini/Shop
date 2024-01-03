import { Box } from "@mui/material"
import Head from "next/head"

export const AuthLayout = ({children, title}) => {
  return (
  <>
    <Head>
        <title>{title}</title>
    </Head>

    <main>
        <Box display="flex"  bgcolor justifyContent="center" alignItems="center" height="calc(100vh - 100px)">
            {children}
        </Box> 
    </main>
  </>
  )
}
