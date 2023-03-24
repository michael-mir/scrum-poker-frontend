import type { AppProps } from 'next/app';

import '@/public/styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
