import React, { ChangeEvent, useCallback } from 'react'
import {useState} from 'react'
import BookSearch from '../../constants/bookSearch'
import Book from '../../constants/book'
import photo from '../../assets/book_placeholder.png' 

export default function BookWithInfo({bookInfo}:{bookInfo: Book}){
    return(
        <>
        <div className="d-flex mt-3">
            <div className="bg-secondary">
                <img src={bookInfo.imageLinks!==undefined?bookInfo.imageLinks.medium:photo}></img>
            </div>
            <div>
                <p>{bookInfo.categories!==undefined?bookInfo.categories[0]:''}</p>
                <h2>{bookInfo.title}</h2>
                <p>{bookInfo.authors!==undefined?bookInfo.authors.toString():''}</p>
                <textarea rows={8} cols={60} value={bookInfo.description} readOnly></textarea>
            </div>
        </div>
        </>
    )
}