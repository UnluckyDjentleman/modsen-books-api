import '../App.css'
import '../assets/bootstrap.css'
import RenderBooks from '../components/wrap/renderer'
import useBooks from '../utils/hooks/useBooks';
import {useAppDispatch, useAppSelector } from '../utils/hooks/hooksRedux';
import { useCallback, useRef } from 'react';
import BookSearchResult from '../constants/types/bookSearchResult';
import LoadMore from '../components/wrap/loadMore/loadMore';
import { changeStartIndex } from '../store/reducers/searchInfoReducer';
import SearchInput from '../constants/types/search';

export default function BooksPage() {

    const dispatch=useAppDispatch();
    const searchInformation=useAppSelector((state)=>state.searchInfo);

    const books = useRef<BookSearchResult>({ totalItems: 0, items: [] });
    const defaultSearchInfo=useRef<SearchInput>(searchInformation)

    const onClickLoadMore=useCallback(()=>{
      dispatch(changeStartIndex({count: 30}))
    },[dispatch, changeStartIndex])

    console.log(JSON.stringify(searchInformation));

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
        defaultSearchInfo.current.order!==searchInformation.order||
        defaultSearchInfo.current.startIndex!==searchInformation.startIndex){
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
      {
        result.load==='Load...'&&<p>{result.load+" Please, wait for few seconds..."}</p>
      }
      {
        result.load===false&&result.error&&<p>{result.error.message}</p>
      }
      {
        result.load===true&&result.dataBooks.items&&
        <>
          <p>Found {result.dataBooks.totalItems} books</p>
          <RenderBooks books={books.current.items}></RenderBooks>
        </>
      }
      {
        result.load===true&&result.dataBooks.items.length>=30&&<div className="d-flex justify-content-center">
        <LoadMore clicker={onClickLoadMore}></LoadMore>
      </div>
      }
      </>
    )
}
