


// // import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit"

// import { createSlice } from "@reduxjs/toolkit"

// // const initialState = {
// //     value:""
// // }
// // const dataSlice = createSlice({
// //     name:'data',
// //     initialState,
// //     reducers:{
// //         addData:(state,action)=>{
// //             state.value = action.payload
// //         }
        
// //     }
// // })

// // export const {addData} = dataSlice.actions

// // export default dataSlice.reducer


// const initialState={
//     value:''
// }
// const dataSlice=createSlice({
//     name:"data",
//     initialState,
//     reducers:{
//         addData:(state,action)=>{
//             state.value=action.payload
//         }
//     }
// })
// export const{addData}=dataSlice.actions
// export default dataSlice.reducer


// const initialState={
//    text : 'hi'
// }
// const dataSlice = createSlice({
//     name:'data',
//     initialState,
//     reducers:{
//         addData:(state,action)=>{
//             state.text=action.payload
//         }
//     }
// })
// export const{addData}=dataSlice.actions
// export default dataSlice.reducer


// const initialState={
//     value:''
// }
// const dataSlice = createSlice({
//     name:"data",
//     initialState,
//     reducers:{
//         adddData:(state,action)=>{
//             state.value = action.payload
//         }
//     }
// })
// export const {adddData}=dataSlice.actions
// export default dataSlice.reducer


const initialState={
    value:''
}
const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
        adddData:(state,action)=>{
            state.value=action.payload
        }
    }
})
export const {adddData} = dataSlice.actions
export default dataSlice.reducer