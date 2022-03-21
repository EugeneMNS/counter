import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {counterReducer, decrementCountAC, DefaultStateType, incrementCountAC, setCountAC} from "./state/reducer";


export function Counter() {
    const  dispatch = useDispatch()
    const count = useSelector<DefaultStateType, any>(state => state.count)
    console.log(count,'count')
  return (
      <div>
          <div>
              <h5>{`Count is ${count.count}`}</h5>
              <button onClick={()=> dispatch(decrementCountAC(count.count))}>-</button>

              <button onClick={() =>dispatch(incrementCountAC(count.count))}>+</button>
          </div>
          <button onClick={()=> dispatch(setCountAC(0))}>Reset</button>
      </div>
  )
}