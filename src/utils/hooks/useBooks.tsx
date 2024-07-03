import {useState, useEffect} from 'react'
import BookSearchResult from '../../constants/types/bookSearchResult';
import { AxiosError } from 'axios';
import BooksAPI from '../booksApi';
import SearchInput from '../../constants/types/search';


export default function useBooks(searchInfo: SearchInput){
    const [dataBooks, setDataBooks]=useState<BookSearchResult>({totalItems: 0, items: []})
    const [error, setError]=useState<AxiosError>()
    const [load, setLoad]=useState<string|boolean>();

    useEffect(()=>{
        setLoad("Load...");
        console.log("Query:"+searchInfo.query);
        if(searchInfo.query===''){
            setDataBooks({totalItems: 0, items: []})
            setLoad(true)
        }
        else{
            BooksAPI.GetBooks(searchInfo).
            then(data=>{
                if (data.totalItems == 0) setDataBooks({totalItems: 0, items: []});
                else setDataBooks(data);
                setLoad(true)
            }).
            catch(err=>{
                setError(err);
                setLoad(false);
            })
        }
    },[searchInfo.query, searchInfo.startIndex, searchInfo.order])

    return {dataBooks, error, load}
}