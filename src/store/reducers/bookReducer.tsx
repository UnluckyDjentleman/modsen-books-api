import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import BookSearch from '../../constants/types/bookSearch'

const initialState: { value: BookSearch | undefined } = { value: undefined }

export const bookReducer = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBook: (state, action: PayloadAction<BookSearch | undefined>) => {
            state.value = action.payload
        },
    },
})

export const { setBook } = bookReducer.actions

export default bookReducer.reducer
