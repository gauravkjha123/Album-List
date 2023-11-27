import { configureStore } from '@reduxjs/toolkit'
import albumReducer from "./redux/reducers/albumReducer"


export const store = configureStore({
  reducer: {
    albumReducer
  },
})