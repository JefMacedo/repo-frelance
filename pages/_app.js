import Preloader from "@/src/components/Preloader";
import "@/styles/globals.css";
import { Fragment, useEffect, useState } from "react";
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 950);
  }, []);

  return (
    <Fragment>
      {loader && <Preloader />}
      <Component {...pageProps} />
      <SpeedInsights />
    </Fragment>
  );
}
