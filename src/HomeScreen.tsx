import React from 'react'
import { View ,Text,Button,Alert, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const HomeScreen = ({navigation}:any) => {
  const handleToDo=()=>{
    navigation.navigate("ToDoHeader");
  }
  const handleShowNews=()=>{
    navigation.navigate("NewList")
  }
  
  const selectCompleteCount = (state: { todos: any[] }) => state.todos.filter(todo => todo.completed).length
  const selectLeftCount = (state: { todos: any[] }) => state.todos.filter(todo => !todo.completed).length
const completeCount=useSelector(selectCompleteCount);
const leftCount=useSelector(selectLeftCount);
  return (
   <View>
    <View style={styles.Button}> 
    <Button 
        title="Show All Tasks"
        onPress={handleToDo}
      />
       <Button 
        title="Show News"
        onPress={handleShowNews}
      />
      </View>
      
      <View style={styles.tasks}>

      
      <Text style={styles.CompleteText}>Completed :
{completeCount}
      </Text>
      <Text style={styles.LeftText}>Left :
{leftCount}
      </Text>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  CompleteText:{
    color:"green",
  },
  LeftText:{
    color:"red",
    
  },
  tasks:{
borderWidth:1,
margin:20,
padding:10,

  }
  ,
 Button:{
 flexDirection:"row",
 justifyContent:"space-around",
marginVertical:10
 }
})
export default HomeScreen