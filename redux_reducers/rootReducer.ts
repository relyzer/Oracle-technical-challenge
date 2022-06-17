import { combineReducers } from '@reduxjs/toolkit'
import isModalOpenReducer from "./isModalOpenReducer";

const rootReducer = combineReducers({
  isModalOpen: isModalOpenReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;