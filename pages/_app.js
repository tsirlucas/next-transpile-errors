import App, { Container } from 'next/app';
import { Fragment } from 'react';
import Head from 'next/head';
import { PrismaProvider } from '@picter/prisma';
import { IntlProvider } from 'react-intl';

import Layout from '../components/Layout';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <IntlProvider locale="en">
        <PrismaProvider>
          <Fragment>
            <Head>
              <title>next-transpile-errors</title>
              <meta
                key="viewport"
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              <link
                key="favicon"
                rel="icon"
                type="image/png"
                href="/static/favicon.png"
              />
            </Head>
            <Container>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Container>
          </Fragment>
        </PrismaProvider>
      </IntlProvider>
    );
  }
}

export default MyApp;
