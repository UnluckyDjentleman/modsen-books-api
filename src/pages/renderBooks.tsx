import '../App.css'
import '../assets/bootstrap.css'

import { useCallback, useRef, useState } from 'react';

import LoadMore from '../components/wrap/loadMore/loadMore';
import RenderBooks from '../components/wrap/renderer'
import BookSearchResult from '../constants/types/bookSearchResult';
import SearchInput from '../constants/types/search';
import { changeStartIndex } from '../store/reducers/searchInfoReducer';
import {useAppDispatch, useAppSelector } from '../utils/hooks/hooksRedux';
import useBooks from '../utils/hooks/useBooks';

export default function BooksPage() {

    const [count, setCount]=useState(0)

    const dispatch=useAppDispatch();
    const searchInformation=useAppSelector((state)=>state.searchInfo);

    const books = useRef<BookSearchResult>({ totalItems: 0, items: [] });
    const defaultSearchInfo=useRef<SearchInput>(searchInformation)

    const onClickLoadMore=useCallback(()=>{
      setCount(prev=>prev+1)
      dispatch(changeStartIndex({count: count}));
    },[dispatch, count])

    const result = useBooks({
      query: searchInformation.query,
      startIndex: searchInformation.startIndex,
      order: searchInformation.order,
      category: searchInformation.category
    });

    if(result.load===true){
      books.current = {
        totalItems: result.dataBooks.totalItems,
        items: [...books.current.items, ...result.dataBooks.items],
      };
    }
    else if(result.load==='Load...'){
      if(defaultSearchInfo.current.query!==searchInformation.query||
        defaultSearchInfo.current.category!==searchInformation.category||
        defaultSearchInfo.current.order!==searchInformation.order){
          books.current={
            totalItems: books.current.totalItems,
            items:[]
          }
          defaultSearchInfo.current=searchInformation
        }
      else{
        books.current={
          totalItems: result.dataBooks.totalItems,
          items:books.current.items
        }
        defaultSearchInfo.current=searchInformation
      }
    }

    return (
      <>
      <p>Found {result.dataBooks.totalItems} books</p>
      {
        result.load===false&&result.error&&<p>{result.error.message}</p>
      }
      {
        result.dataBooks.items&&(
          <>
            {result.load==='Load...'&&<p>{result.load+" Please, wait for few seconds..."}</p>}
            <RenderBooks books={books.current.items}></RenderBooks>
          </>
        )
      }
      {
        result.load===true&&result.dataBooks.items.length>=30&&<div className="d-flex justify-content-center">
        <LoadMore clicker={onClickLoadMore}></LoadMore>
      </div>
      }
      </>
    )
}
