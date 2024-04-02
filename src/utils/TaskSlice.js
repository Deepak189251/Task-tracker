import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
    name: "task",
    initialState: {
        all: []
    },
    reducers:{
        addTask : (state, action) => {
            state.all = [...state.all, {...action.payload}]
        },

        removeTask : (state, action) => {
            state.all = state.all.filter((e) => {
                return e.title != action.payload 
                
            })
        },

        editTask : (state, action) => {
           const {title, statusValue, priorityValue} = action.payload
           
          
           state.all = state.all.filter((e) => {
            return e.title === title ? (e.status = statusValue, e.priority = priorityValue) : (e.status, e.priority)
           })
           
        },

        sortTask : (state, action) => {
           const {fData, sData} = action.payload
           /* state.all = state.all.sort((a, b) => {
                if(a?.[action.payload] < b?.[action.payload]) return -1
                if(a?.[action.payload] > b?.[action.payload]) return 1
                return 0
            }) */


            if(sData === "down") {
                state.all = state.all.sort((a, b) => {
                    if(a?.[fData] < b?.[fData]) return -1
                    if(a?.[fData] > b?.[fData]) return 1
                    return 0
                })
            }
            else{
                state.all = state.all.sort((a, b) => {
                    if(a?.[fData] > b?.[fData]) return -1
                    if(a?.[fData] < b?.[fData]) return 1
                    return 0
                })
            }
            
        }
    
    }
})

export const {addTask, removeTask, editTask, sortTask} = TaskSlice.actions

export default TaskSlice.reducer