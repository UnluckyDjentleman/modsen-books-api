import React, { MouseEventHandler, useCallback } from 'react'
import CardBook from '../cards/card'
import {useState} from 'react'
import photo from '../../assets/book_placeholder.png'
import BookSearch from '../../constants/bookSearch'
import Book from '../../constants/book'
import LoadMore from './loadMore/loadMore'

export function RenderBooks({books, clickCount, getId}:{
  books:BookSearch[], 
  clickCount: MouseEventHandler<HTMLButtonElement>|undefined,
  getId: Function
})
{
    return(
        <div className="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
          {books&&books.map((elem)=>(
            <div className="col mt-4">
              <CardBook bookInfo={elem.volumeInfo} key={elem.id} bookId={elem.id} onPick={getId}></CardBook>
            </div>
          ))}
          <LoadMore clicker={clickCount}></LoadMore>
      </div>
    )
}