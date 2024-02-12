import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { routes } from './shared/routes'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client'

const router = createBrowserRouter(routes)
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  cache: new InMemoryCache()
})

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  )
