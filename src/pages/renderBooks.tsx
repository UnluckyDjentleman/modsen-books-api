import { useState, useEffect } from 'react'
import '../App.css'
import '../assets/bootstrap.css'
import BooksAPI from '../utils/booksApi';
import {RenderBooks} from '../components/wrap/renderer'
import Error from '../components/error/error'
import SearchInput from '../constants/search'
import BookSearchResult from '../constants/bookSearchResult'

export default function BooksPage({order, searchInput, count, setCount, id}:{order: string|undefined, searchInput: SearchInput, count: number, setCount: Function, id: Function}) {
    const [error, setError]=useState<string>("")
    const [found, setFound]=useState<number>(0)
    const [books, setBooks]=useState<BookSearchResult>(
      {
        bookSearchRes: [],
        totalItems: 0,
        error: undefined
      }
    )


    const loadMore=()=>{
      setCount(count+1);
    }

    useEffect(()=>{
      BooksAPI.GetBooks(searchInput.search,count,order).then(result=>{
        console.log(result.bookSearchRes)
        if(result.error===undefined){
          setBooks(count!==0?{bookSearchRes: [...books.bookSearchRes, ...result.bookSearchRes], totalItems: result.totalItems, error:result.error}:result)
          setFound(result.totalItems);
        }
        else{
          setError(result.error);
        }
      })
    },[searchInput.search, count, order])
  
    console.log(books);
    return (
      <>
        {
          found!==0?<p>Found {found} elements</p>:<p>Cannot find anything!</p>
        }
        {
          error&&<Error error={error}></Error>
        }
        <RenderBooks books={books.bookSearchRes} clickCount={loadMore} getId={id}></RenderBooks>
      </>
    )
}