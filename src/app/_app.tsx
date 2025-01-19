"use client";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
