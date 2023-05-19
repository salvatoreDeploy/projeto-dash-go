import { AppProps } from "next/app";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SideBarDrawerProvider } from "../context/SidebarDrawerContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SideBarDrawerProvider>
        <Component {...pageProps} />
      </SideBarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
