import { combineReducers } from 'redux'

import todosReducer from './toDoSlice'
//import filtersReducer from './filtersSlice'
const rootReducer = combineReducers({
  
  todos: todosReducer,
  
})

export default rootReducer