import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {DemoScreen} from 'screens';
// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ApolloProvider client={client}>
        <DemoScreen />
      </ApolloProvider>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default App;
