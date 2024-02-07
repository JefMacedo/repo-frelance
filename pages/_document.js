import { Head, Html, Main, NextScript } from "next/document";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Jeferson Macedo" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="keywords" content="Jeferson Macedo - Site principal" />
        <meta name="description" content="Jeferson Macedo - Site principal" />
        {/* title */}
        <title>Jeferson Macedo - Site principal</title>
        {/* Favicon */}
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        {/* theme css */}
        <link href="assets/css/style.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <SpeedInsights />
      </body>
    </Html>
  );
}
