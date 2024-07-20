import { SessionProvider } from "next-auth/react";
import "../app/globals.css";
//@ts-ignore
function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
