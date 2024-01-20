import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4xb8glb0bwc01t29rye7sl9/master',
    cache: new InMemoryCache()
});