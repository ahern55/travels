import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Pictures from my Travels!" />
          <meta property="og:site_name" content="travels.jasonahern.com" />
          <meta property="og:description" content="Pictures from my Travels!" />
          <meta property="og:title" content="Jason's Travels" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Jason's Travels" />
          <meta
            name="twitter:description"
            content="Pictures from my Travels!"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
