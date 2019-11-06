import App, {Container} from 'next/app';
import withApolloClient from '../lib/with-apollo-client';
import {ApolloProvider} from 'react-apollo';

class Data extends App {
  render() {
    const {Component, pageProps, apolloClient} = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(Data);
