
// import {configureStore} from "@reduxjs/toolkit"
// import counterSlice from "../features/CounterSlice"

//  export const store = configureStore({
//     reducers:{
//         counter:counterSlice.reducer
//     }
// })

import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/CounterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})