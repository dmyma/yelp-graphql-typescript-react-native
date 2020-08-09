import React from 'react'
import SearchStack from './src/navigation/SearchStack'

import { ApolloProvider } from 'react-apollo'
import graphqlClient from "./src/api/graphql"

const App = () => (
    <ApolloProvider client={graphqlClient}>
        <SearchStack />
    </ApolloProvider> 
  );
  
  export default App