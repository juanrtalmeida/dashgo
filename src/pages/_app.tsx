import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SideBarContextProvider } from "../Contexts/SideBarContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SideBarContextProvider>
        <Component {...pageProps} />
      </SideBarContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
