import {configureStore} from '@reduxjs/toolkit'

import bookReducer from './reducers/bookReducer'
import searchInfoReducer from './reducers/searchInfoReducer'


export const store=configureStore({
    reducer:{
        book: bookReducer,
        searchInfo: searchInfoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch