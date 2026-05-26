import {createSlice} from "@reduxjs/toolkit"

export const counterSlice = createSlice({

    name:'Counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
         decrement:(state)=>{
            state.value -=1
        },
        increaseBYAmount:(state,action)=>{
            state.value +=action.payload
        }
    }

})

export const{increment,decrement,increaseBYAmount} = counterSlice.actions

export default counterSlice.reducer