import React from 'react'
import { View ,TouchableOpacity,Text, StyleSheet} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'


const selectTodoById = (state:any, todoId:any) => {
  return state.todos.find((todo: { id: any })=> todo.id === todoId)
}

const TodoListItem = ({ id}:{id:any}) => {
  const todo = useSelector(state => selectTodoById(state, id))
  const { text, completed } = todo;
//  console.log(todo);
  const dispatch = useDispatch()

  const handleCompletedChanged = () => {
    dispatch({ type: 'todos/todoToggled', payload: todo.id })
  }


  return (
    <TouchableOpacity onPress={handleCompletedChanged}>
    <View>
      <Text style={{textDecorationLine:completed?'line-through':'none',margin:5}}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>
  )
}

export default TodoListItem