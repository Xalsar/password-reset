import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import { ComposerProvider } from "@cmpsr/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ComposerProvider>
      <Component {...pageProps} />
    </ComposerProvider>
  );
}
