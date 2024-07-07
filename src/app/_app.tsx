"use client"
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import type { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      session: await getSession(context)
    }
  };
}

export default App;
