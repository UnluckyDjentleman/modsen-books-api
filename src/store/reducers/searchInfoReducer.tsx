import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import SearchInput from "../../constants/types/search";

const initialState: SearchInput={query:"", order:"relevance", category:"", startIndex: 0}

export const searchInfoReducer=createSlice({
    name: 'searchInfo',
    initialState,
    reducers:{
        setSearchInfo: (state, action: PayloadAction<SearchInput>)=>{
            state.query=action.payload.query,
            state.order=action.payload.order,
            state.category=action.payload.category,
            state.startIndex=action.payload.startIndex
        },
        changeStartIndex:(state, action: PayloadAction<{count: number}>)=>{
            state.startIndex=action.payload.count
        }
    }
})

export const {setSearchInfo, changeStartIndex} = searchInfoReducer.actions;

export default searchInfoReducer.reducer