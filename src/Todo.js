import React from "react";
import {  useQuery , useMutation } from '@apollo/client';
import {GET_TODO,UPDATE_TODO,ADD_TODO} from "./queries";


function Todo(){
    const {loading , error , data} = useQuery(GET_TODO);
    const [updateTodo] = useMutation(UPDATE_TODO);
  
  
    if(loading) return <p>Loading ...</p>
    if(error) return <p>Error...</p>
  
    return data.todos.map(({id,type})=>{
      let input;
      return(
        <div key={id}>
          <p>{type}</p>
          <form onSubmit={e=>{
            e.preventDefault();
            if(!input.value.trim()){
              return;
            }
            updateTodo({variables:{id,type:input.value}})
            input.value=""
          }}>
            <input ref={node=>input=node}/>
            <button type="submit">Update TODO</button>
  
          </form>
  
        </div>
      )
    })
  
  }
  export default Todo;