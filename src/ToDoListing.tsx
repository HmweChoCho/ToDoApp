import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import TodoListItem from './ToDoListItem'
import { ScrollView, View } from 'react-native'


const selectTodoIds = (state: { todos: any[] }) => state.todos

const ToDoListing = () => {

  const todos = useSelector(selectTodoIds)
// console.log(todos);
  if (!todos.length) return null;
  return( 
    <ScrollView>
    <View>
      {
        todos?.map(todo => {
          return <TodoListItem key={todo.id} id={todo.id} />
        })
      }
    </View> 
    </ScrollView>
  )
}
export default ToDoListing