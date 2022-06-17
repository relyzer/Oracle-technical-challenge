import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "../redux_reducers/rootReducer"

const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store