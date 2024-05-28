import React from 'react';
import { View,Text, Button, TextInput,StyleSheet } from 'react-native';
import {useForm,useController,UseControllerProps, Form} from 'react-hook-form';

type FormValues={
    TxtToDo:string
}
function Input(props:UseControllerProps<FormValues>){
    const {field,fieldState}=useController(props);
    return (
    <View>
      <TextInput {...field} placeholder={"What needs to be done"} style={styles.Input} />
      <Text>{fieldState.isTouched && "Touched"}</Text>
      <Text>{fieldState.isDirty && "Dirty"}</Text>
      <Text>{fieldState.invalid ? "invalid" : "valid"}</Text>
    </View>
  )
}

const ToDoList = () => {
  
    const { handleSubmit, control } = useForm<FormValues>({
        defaultValues: {
            TxtToDo: "",
        },

      })
      const onSubmit = (data: FormValues) => console.log(data)
    
      return (
        <View>
        <Input control={control} name="TxtToDo" />
        <Button title="Add" onPress={handleSubmit(onSubmit)} />
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
        backgroundColor:"grey",
        color:"white",
        transform:"uppercase"
    }
        
  });
export default ToDoList