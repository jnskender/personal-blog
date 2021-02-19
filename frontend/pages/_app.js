import { useState, createContext } from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import Layout from "../components/layout";
import GlobalStyles from "../styles/GlobalStyles";
import { PalletteContext } from "../context/pallette-context";
// Store Strapi Global object in context
import themes from "../theme/themes";

export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global, categories } = pageProps;
  const [pallette, setPallette] = useState("green");
  const value = { pallette, setPallette };
  const theme = themes.find((t) => t.name === pallette);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <PalletteContext.Provider value={value}>
        <ThemeProvider theme={theme}>
          <GlobalContext.Provider value={global}>
            <GlobalStyles />
            <Layout categories={categories}>
              <Component {...pageProps} />
            </Layout>
          </GlobalContext.Provider>
        </ThemeProvider>
      </PalletteContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const [global, categories] = await Promise.all([
    fetchAPI("/global"),
    fetchAPI("/categories"),
  ]);

  // Pass the data to our page via props
  return { ...appProps, pageProps: { global, categories } };
};

export async function getStaticProps({ params }) {
  const categories = await fetchAPI("/categories");

  return {
    props: { categories },
    revalidate: 1,
  };
}

export default MyApp;
