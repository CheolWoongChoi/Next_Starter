import '@/public/normalize.css';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';

import { GlobalStyle } from '@/styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const cache = createCache({ key: 'next' });

  return (
    <CacheProvider value={cache}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle />
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </CacheProvider>
  );
}
