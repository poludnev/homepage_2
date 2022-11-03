import type { AppProps } from 'next/app';
import 'i18n/index.ts';
import 'styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
