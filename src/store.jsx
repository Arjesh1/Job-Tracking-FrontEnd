import {configureStore} from '@reduxjs/toolkit'
import systemReducer from './system/systemSlice'
const store = configureStore({
    reducer: {
        system: systemReducer,
    }
})
export default store