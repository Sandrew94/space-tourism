// pages/_document.js

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head>
          <meta name="googlebot" content="notranslate" />
          <meta property="og:image" content="../public/assets/logo/logo.svg" />
          <meta
            property="description"
            content="The spaceship and the crew of the next lands"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
