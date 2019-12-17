import App from 'next/app';
import '../sass/index.scss';
import withApolloClient from '../lib/with-apollo-client';
import {ApolloProvider} from 'react-apollo';

class Data extends App {
  render() {
    const {Component, pageProps, apolloClient} = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApolloClient(Data);
