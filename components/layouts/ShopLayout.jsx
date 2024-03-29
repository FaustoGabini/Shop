import Head from "next/head"
import { Navbar, SideMenu } from "../ui"

export const ShopLayout = ({children, title, pageDescription, imageFullUrl}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={pageDescription} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={pageDescription} />
            { imageFullUrl && (<meta property="og:image" content={imageFullUrl} /> )}
        </Head>

        <nav>
            <Navbar/>
        </nav>

        <SideMenu/>

        <main style={{margin: "80px auto", maxWidth: "1440px", padding: "0px 30px"}}>
            {children}
        </main>

        <footer>
        </footer>
        
    </>
  )
}
