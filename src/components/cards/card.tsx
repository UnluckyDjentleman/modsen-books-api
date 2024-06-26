import React, { MouseEventHandler, useCallback } from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router';
import Book from '../../constants/book'
import photo from '../../assets/book_placeholder.png'
import BookSearch from '../../constants/bookSearch'

export default function CardBook({bookInfo, bookId, onPick}:{bookInfo:Book, bookId: string, onPick: Function}){

    const navigate=useNavigate()

    const Picker=()=>{
        console.log(bookId)
        onPick(bookId);
        navigate('/book');
    }

    return(
        <div className="card" style={{width: '18rem'}} onClick={Picker}>
            <div className='card-header'>
                <p className='card-text'>{bookInfo.categories&&bookInfo.categories.length >= 1 ? bookInfo.categories[0] : ''}</p>
            </div>
            <div className='card-body'>
                <img className="img-card-top" src={bookInfo.imageLinks===undefined?photo:bookInfo.imageLinks.smallThumbnail}></img>
                <h4 className='card-title'>{bookInfo.title}</h4>
                <p className='card-text'>{bookInfo.authors && bookInfo.authors.length >= 1 ? bookInfo.authors[0] : ''}</p>
            </div>
        </div>
    )
}