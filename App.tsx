// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import ToDoList from './src/ToDoHeader';
import { Provider } from 'react-redux';
import { NewList } from './src/NewList';
import store, { persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ToDoHeader" component={ToDoList}/>
      <Stack.Screen name="NewList" component={NewList}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}

export default App;