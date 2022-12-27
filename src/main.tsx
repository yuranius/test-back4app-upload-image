import React from 'react'
import ReactDOM from 'react-dom/client'
import './input.css'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {createUploadLink} from "apollo-upload-client";
import {App} from "./App";

// @ts-ignore
import Parse from 'parse/dist/parse.min'
Parse.initialize('QrYfJbqjKMhEg3CfnpkaUbZeqCCm7RR7J9dbZt7w','ffcAyJd260lvHgJxSdfwZCfofwWBdT4aT0ZphaVU')
Parse.serverURL = 'https://parseapi.back4app.com'


let link = createUploadLink({
  uri: 'https://parseapi.back4app.com/graphql',
  headers: {
    "X-Parse-Application-Id": "QrYfJbqjKMhEg3CfnpkaUbZeqCCm7RR7J9dbZt7w",
    "X-Parse-Javascript-Key": "ffcAyJd260lvHgJxSdfwZCfofwWBdT4aT0ZphaVU",
  }
})

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </React.StrictMode>,
)
