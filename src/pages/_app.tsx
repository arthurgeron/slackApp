import { Toast } from '@components/Toast';
import { FunctionComponent } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import reportWebVitals from 'src/reportWebVitals';
import './index.css';

export const queryClient = new QueryClient();

type Props<T> = {
  Component: FunctionComponent<T>;
  pageProps: T;
}

export default function App<T>({ Component, pageProps }: Props<T>) {
  return (<QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
    <Toast />
  </QueryClientProvider>);
}


reportWebVitals();
