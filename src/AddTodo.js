import React from "react";
import { useMutation } from '@apollo/client';
import {GET_TODO,ADD_TODO} from "./queries";



function AddTodo(){
    let input;
  
    const [addTodo,{data}] = useMutation(ADD_TODO);
  
    return(
      <div >
        <form onSubmit={e=>{
          e.preventDefault();
          if(!input.value.trim()){
            return;
          }
          addTodo({variables:{type:input.value}, refetchQueries:[{query:GET_TODO}]});
          input.value=""
        }}>
          <input ref={node=>input=node}/>
          <button type="submit">Add TODO</button>
  
        </form>
  
      </div>
    )
  }

  export default AddTodo;