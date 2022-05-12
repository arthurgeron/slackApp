import { Toast } from '@components/Toast';
import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import reportWebVitals from 'src/reportWebVitals';
import './index.css';

export const queryClient = new QueryClient();

type Props = {
  Component: ReactElement;
  pageProps: unknown;
}

export default function App({ Component, pageProps }: Props) {
  return (<QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
    <Toast />
  </QueryClientProvider>);
}


reportWebVitals();
