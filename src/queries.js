import { gql} from '@apollo/client';
const GET_TODO = gql`
{
  todos{
    id
    type
  }
}
`


const ADD_TODO = gql`
  mutation AddTodo($type:String!){
    addTodo(type:$type){
      id
      type
    }
  }
`;

const UPDATE_TODO = gql`
mutation UpdateTodo($id:String! ,$type:String!){
  updateTodo(id:$id,type:$type){
    id 
    type
  }
}
`;

export {GET_TODO,UPDATE_TODO,ADD_TODO};