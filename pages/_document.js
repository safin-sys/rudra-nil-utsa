import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charSet="utf-8" />
            <meta property="og:url" content="https://rudranilutsa.netlify.app" key="ogurl" />
            <meta property="og:site_name" content="Rudra Nil Utsa" key="ogsitename" />
            <meta property="og:title" content="Rudra Nil Utsa" key="ogtitle" />
            <meta property="og:description" content="Welcome to world of nothing special" key="ogdesc" />
            <meta name="description" content="Welcome to world of nothing special" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument