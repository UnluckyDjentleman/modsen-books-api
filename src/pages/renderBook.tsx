import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import '../assets/bootstrap.css'
import Header from '../components/header/header'
import BooksAPI from '../utils/booksApi';
import {RenderBooks} from '../components/wrap/renderer'
import Error from '../components/error/error'
import BookSearch from '../constants/bookSearch'
import SearchInput from '../constants/search'
import BookWithInfo from '../components/bookWithInfo/bookWithInfo'

export default function BookInfoPage({id}:{id: string}) {
    const [error, setError]=useState<string>("")
    const [book, setBook]=useState<BookSearch>({
        id:'',
        etag:'',
        selfLink:'',
        volumeInfo: {
            title: '',

            imageLinks:  {
                smallThumbnail: undefined,
                thumbnail: undefined,
                medium: undefined,
                large: undefined,
                extraLarge: undefined
            },

            authors: [],
            
            publisher: '',
            publishedDate: new Date,
            description: '',
            pageCount: 0,

            dimensions: {
                height: '',
                width: '',
                thickness: ''
            },

            printType: '',
            mainCategory: '',
            categories: [],

            averageRating: 0,
            ractingsCount: 0,

            contentVersion: '',
            language: '',
            infoLink: '',
            canonicalVolumeLink: ''
        }
    })

    useEffect(()=>{
        BooksAPI.GetBook(id).then(result=>{
            console.log("Id:"+id);
            console.log("Result:"+JSON.stringify(result))
            setBook(result);
        })
    },[]);

    return (
      <>
        <BookWithInfo bookInfo={book.volumeInfo}></BookWithInfo>
      </>
    )
}