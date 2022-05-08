import { AppProps } from 'next/app';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import { NextUIProvider } from '@nextui-org/react';
import 'react-toastify/dist/ReactToastify.css';

interface IMyAppStates {
  isRouteChanging: boolean;
  loadingKey: number;
}

const initMyAppStates: IMyAppStates = {
  isRouteChanging: false,
  loadingKey: 0,
};

function MyApp(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;
  const router = useRouter();
  const [state, setState] = useState<IMyAppStates>(initMyAppStates);

  useEffect(() => {
    const handleRouteChangeStart = (): void => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey + 1,
      }));
    };

    const handleRouteChangeEnd = (url: string): void => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeEnd);
    router.events.on('routeChangeError', handleRouteChangeEnd);

    return (): void => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeEnd);
      router.events.off('routeChangeError', handleRouteChangeEnd);
    };
  }, [router.events]);

  return (
    <>
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </NextHead>
      <RecoilRoot>
        <NextUIProvider>
          <ToastContainer hideProgressBar closeOnClick position="top-right" autoClose={5000} />
          <Component {...pageProps} key={router.route} />
        </NextUIProvider>
      </RecoilRoot>
    </>
  );
}

export default appWithTranslation(MyApp);
