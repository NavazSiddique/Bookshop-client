
import './App.css';

import BookList from './components/BookList';
import AddBook from './components/AddBook';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient(
  {
  // uri:"http://localhost:4002/graphql",
  uri:"https://bookshop-server-graphql.onrender.com/graphql",
   cache:new InMemoryCache()
  }
)



function App() {
 
  return (

    <ApolloProvider client={client}>
    <div className="main">
      <h1 style={{align:"center"}}>BookList</h1>
       <BookList/>
       <AddBook/>
   
       
    </div>
    </ApolloProvider>
  );
}

export default App;
