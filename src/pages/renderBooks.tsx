import '../App.css'
import '../assets/bootstrap.css'
import RenderBooks from '../components/wrap/renderer'
import useBooks from '../utils/hooks/useBooks';
import {useAppDispatch, useAppSelector } from '../utils/hooks/hooksRedux';
import { useCallback, useRef } from 'react';
import BookSearchResult from '../constants/types/bookSearchResult';
import LoadMore from '../components/wrap/loadMore/loadMore';
import { changeStartIndex } from '../store/reducers/searchInfoReducer';

export default function BooksPage() {

    const dispatch=useAppDispatch();
    const searchInformation=useAppSelector((state)=>state.searchInfo);

    const books = useRef<BookSearchResult>({ totalItems: 0, items: [] });

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
