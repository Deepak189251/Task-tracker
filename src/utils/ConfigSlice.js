import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({

    name: "config",
    initialState: {
        createTask: false,
        editAndDeleteTask: false
    },

    reducers:{
        openCreateTask : (state) => {
            state.createTask = true
        },

        closeCreateTask : (state) => {
            state.createTask = false
        },

        
    }
})

export const {openCreateTask, closeCreateTask} = ConfigSlice.actions

export default ConfigSlice.reducer