  
import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

import { BASE_URL, YELP_TOKEN } from '../../config/config'

export const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: `${BASE_URL}/graphql`, 
    headers: {
        authorization: `Bearer ${YELP_TOKEN}`,
        "Accept-Language": "en_US"
      }
  })
})

export default client