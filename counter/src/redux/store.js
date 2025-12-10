// // import {configureStore} from '@reduxjs/toolkit'
// // import counterReducer from './counterSlice'
// // // import dataReducer from './data'
// // const store = configureStore({
// //     reducer:{
// //         counter:counterReducer,
// //         // data:dataReducer
// //     }
// // })

import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './counterSlice'

import dataReducer from './data'
import reducer from "./counterSlice";



















// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice"
// import dataReducer from "./data"

// // import { configureStore } from "@reduxjs/toolkit";
// // import counterReducer from './counterSlice'


// // const store=configureStore({
// //     reducer:{
// //         counter:counterReducer
// //     }
// // })
// // export default store

// // const store = configureStore({
// //     reducer:{
// //         counter:counterReducer
// //     }
// // })
// // export default store

// const store = configureStore({
//     reducer:{
//         counter:counterReducer,
//         data:dataReducer
//     }
// })
// export default store

// const store = configureStore({
//    reducer:{
//     data :dataReducer
//    }
// })
// export default store



// const store = configureStore({
//    reducer:{
//       counter : CounterReducer,
//       data:dataReducer
//    }
// })
// export default store


const store = configureStore({
   reducer:{
      data:dataReducer
   }
})
export default store