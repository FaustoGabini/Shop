import { UiProvider } from "@/context";
import { CartProvider } from "@/context/cart";
import "@/styles/globals.css";
import { lightTheme } from "@/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SWRConfig } from "swr/_internal";

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: (...args) => fetch(...args).then((res) => res.json()),
      }}
    >
      <CartProvider>
        <UiProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UiProvider>
      </CartProvider>
    </SWRConfig>
  );
}
