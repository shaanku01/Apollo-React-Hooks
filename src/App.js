import { ApolloClient,InMemoryCache , ApolloProvider, useQuery ,gql, useMutation } from '@apollo/client';
import './App.css';
import Todo from './Todo';
import AddTodo from './AddTodo';


const client = new ApolloClient(
 { uri : "https://sxewr.sse.codesandbox.io",
  cache: new InMemoryCache()}
)




function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <h1>Use Mutations</h1>
        <AddTodo/>
        <Todo/>

      </div>

    </ApolloProvider>
  );
}

export default App;
