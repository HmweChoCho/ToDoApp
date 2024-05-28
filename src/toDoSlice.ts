import { act } from "react"

const initialState = [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false },
  
]
  function nextTodoId(todos:any) {
    // console.log(todos.length);
    const maxId = todos.length>0? todos.reduce((maxId:any, todo:any) => Math.max(todo.id, maxId), -1):1
    // console.log(maxId);
    // console.log(maxId+1);
    return maxId + 1
  }
  
  export default function todosReducer(state = initialState, action:any) {
    // console.log(action.payload);
    
    switch (action.type) {
      case 'todos/todoAdded': {
      //  console.log(state);
        return [
          ...state,
          {
            id: nextTodoId(state),
            text: action.payload,
            completed: false
          }
        ]
      }
      case 'todos/todoToggled': {
        return state.map(todo => {
          if (todo.id !== action.payload) {
            return todo
          }
          return {
            ...todo,
            completed: !todo.completed
          }
        })
      }
      case 'todos/todoRemove':{
        state=initialState;
        return state;
      }
      default:
        return state
    }
  }