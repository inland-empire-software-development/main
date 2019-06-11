import Document, {Html, Head, Main, NextScript} from 'next/document';
import React from 'react';

class main extends Document {

  render() {
    return (
        <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="../static/icons/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="../static/icons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="../static/icons/favicon-16x16.png"/>
          <link rel="manifest" href="../static/icons/site.webmanifest"/>
          <link rel="mask-icon" href="../static/icons/safari-pinned-tab.svg" color="#5bbad5"/>
          <link rel="shortcut icon" href="../static/favicon.ico"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-config" content="../static/icons/browserconfig.xml"/>
          <meta name="theme-color" content="#ffffff"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-config" content="../icons/browserconfig.xml"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <body className="iesd">
        <Main/>
        <NextScript/>
        </body>
        </Html>
    );
  }
}

export default main;