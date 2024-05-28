import React,{useState} from 'react';
import { View, Button, TextInput,StyleSheet } from 'react-native';
import {useDispatch} from 'react-redux'
import ToDoListing from './ToDoListing';

const ToDoList = ({navigation}:any) => {
  const [text,setText]=useState('');
const dispatch=useDispatch()

const handleTextChange=(txtValue:string)=>{
  setText(txtValue);
}

    const handleAdd=()=>{
        dispatch({type:"todos/todoAdded",payload:text})
        setText('');
      }
      const handleClear=()=>{
       dispatch({type:"todos/todoRemove",payload:null});
      }

      return (
        <View>
        <TextInput  value ={text} style={styles.Input} placeholder="What needs to be done" onChangeText={handleTextChange} />
        <Button    title="Add" onPress={handleAdd} />
       <ToDoListing />
       <Button    title="Remove All" onPress={handleClear} color={styles.Button.backgroundColor}/>
      </View>
      )
}

const styles = StyleSheet.create({
    Input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    Button:{
        backgroundColor:"green",
        color:"white",
        transform:"lowercase",

    }
  });
export default ToDoList