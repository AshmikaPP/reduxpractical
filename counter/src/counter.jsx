// // import React, { useState } from 'react'
// // import { useDispatch, useSelector } from 'react-redux'
// // import reducer, { decrement, increment } from './redux/counterSlice'
// // import { use } from 'react'
// // import { addData } from './redux/data'
// // // import { useSelector,useDispatch } from 'react-redux'
// // // import {  decrement, increment } from './redux/counterSlice'
// // // import { addData } from './redux/data'

import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/counterSlice"
import { adddData } from "./redux/data"

// import { useDispatch, useSelector } from "react-redux"
// import { addData } from "./redux/data"

// // // import { useDispatch, useSelector } from "react-redux"
// // // import { decrement, increment } from "./redux/counterSlice"



// // // function Counter() {
// // //     const counter = useSelector((state)=>{
// // //         return state.counter.value
// // //     })
// // //     // const data = useSelector((state)=>{
// // //     //     return state.data.value
// // //     // })
// // //     const dispatch = useDispatch()
// // //   return (
// // //     <div>
// // //      <p>Count:{counter}</p>
// // //         <button onClick={()=>dispatch(increment())}>increment</button>
// // //         {/* <label>{counter}</label> */}
// // //         {/* <label>{data}</label> */}
// // //         <button onClick={()=>dispatch(decrement())}>decrement</button>
// // //         {/* <button onClick={()=>dispatch(addData("hello i am ajal pottan"))}>add</button> */}
// // //     </div>

// // //   )
// // // }

// // // export default Counter

// // // function Counter(){
// // //   const counter = useSelector((state)=>{
// // //     return state.counter.value
// // //   })
// // //   const dispatch = useDispatch()
// // //   return(
// // //     <>
// // //     <p>Counter:{counter}</p>
// // //     <button onClick={()=>dispatch(increment())}>Increment</button>
// // //     <button onClick={()=>dispatch(decrement())}>Decrement</button>
// // //     </>
// // //   )
// // // }
// // // export default Counter

// // // function Counter(){

// // //   const counter=useSelector((state)=>{
// // //     return state.counter.value
// // //   })
// // //   const dispatch = useDispatch()
// // //   return(
// // //     <>
// // //     <p>counter:{counter}</p>
// // //     <button onClick={()=>dispatch(increment())}>increment</button>
// // //     <button onClick={()=>dispatch(decrement())}>decrement</button>
// // //     </>
// // //   )
// // // }
// // // export default Counter


// // // function Counter(){
// // //   const counter = useSelector((state)=>{
// // //     return state.counter.value
// // //   })
// // //   const dispatch = useDispatch()
// // //   return(
// // //     <>
// // //     <h1>counter:{counter}</h1>
// // //     <button onClick={()=>dispatch(increment())}>increment</button>
// // //     <button onClick={()=>dispatch(decrement())}>decrement</button>
// // //     </>
// // //   )
// // // }
// // // export default Counter


// // function Counter(){
// //   const counter = useSelector((state)=>{
// //     return state.counter.value
// //   })
// //   const data = useSelector((state)=>{
// //     return state.data.value
// //   })
// //   const dispatch = useDispatch()
// //   return(
// //     <>
// //     <h1>Data:{data}</h1>
// //     <h1>Counter:{counter}</h1>
// //     <button onClick={()=>dispatch(increment())}>increment</button>
// //     <button onClick={()=>dispatch(decrement())}>decrement</button>
// //     <button onClick={()=>dispatch(addData("ashmika"))}>add</button>
// //     </>
// //   )
// // }
// // export default Counter


// function Data(){
//   const data = useSelector((state)=>{
//     return state.data.value
//   })
//   return(
//     <>
//     <h1>Data:{data}</h1>
//     </>
//   )
// }
// export default Data



// function Data(){
//     const data = useSelector((state)=>{
//         return state.data.value
//     })
//     const dispatch = useDispatch()
//     return(
//         <>
//         <h1>Data:{data}</h1>
//         <button onClick={()=>dispatch(adddData('ashmika'))}>Click</button>
//         </>
//     )
// }
// export default Data


function Data(){
    const data = useSelector((state)=>{
        return state.data.value
    })
    const dispatch = useDispatch()
    return(
        <>
        <h1>Data:{data}</h1>
        <button onClick={()=>dispatch(adddData('ashmika'))}>Click</button>
        </>
    )
}
export default Data