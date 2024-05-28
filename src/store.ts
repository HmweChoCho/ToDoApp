import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer,persistStore } from "redux-persist";
import rootReducer from "./reducer";

const persistConfig = 
{
  key:"todos",
  storage:AsyncStorage
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

 const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
      serializableCheck: false
    }),
});

export const persistor = persistStore(store);
export default store;

