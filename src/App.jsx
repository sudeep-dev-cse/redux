import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import{increment,decrement, increaseBYAmount} from './features/CounterSlice'

const App = () => {

  const dispatch = useDispatch()
  const count =  useSelector((state)=>state.counter.value)
   
    const [num, setNum] = useState(0)

  return (
    <div>

      <h1>{count}</h1>

      <div className="btns">
        <button
      onClick ={()=>{
          dispatch(increment())   
      }}>
      
        increment
        </button>
      <button
        onClick ={()=>{
          dispatch(decrement())   
      }}>
        decrement
        </button>
      </div>

        <input 
          type="number" 
          placeholder='enter amount'
        value={num}
        onChange={(r)=>{
          setNum(r.target.value)
        }}
         
        />

        <button className='amount-btn'
        onClick ={()=>{
          dispatch(increaseBYAmount(Number(num)))   
      }}
      >
       increase by amount
       </button>
    </div>
  )
}

export default App
