import * as React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppWrapper } from "@store/context";
import "@/styles/globals.css";
import { dark, light } from "@/styles/theme/theme";
import createEmotionCache from "@/utility/createEmotionCache";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  seoTitle: string;
  seoContent: string;
}

export const metadata = {
  title: "Goepi web page",
  description:
    "Goepi is FnB small business which is sell some stuff based on tea",
};

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    seoTitle = metadata.title,
    seoContent = metadata.description,
  } = props;

  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/icon.svg" />
        <meta name="google" content="notranslate" />
        <link rel="canonical" href="https://goepi.vercel.app" />
        <meta name={seoTitle} content={seoContent} />
      </Head>
      <CacheProvider value={emotionCache}>
        
          <ThemeProvider theme={isDarkMode ? dark : light}>
            <CssBaseline />
<AppWrapper>
            <AppNavbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            
            <Component className="mt-30" {...pageProps} /></AppWrapper>
            <Footer />
          </ThemeProvider>
        
      </CacheProvider>
    </>
  );
};

export function reportWebVitals(metric: any) {
  console.log(metric);
}

export default MyApp;
