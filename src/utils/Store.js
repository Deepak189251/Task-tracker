import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskSlice"
import configReducer from "./ConfigSlice"
const store = configureStore({

    reducer:{
        task: taskReducer,
        config: configReducer
    }
})

export default store