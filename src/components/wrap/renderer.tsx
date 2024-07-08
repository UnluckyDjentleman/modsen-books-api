import { useCallback } from 'react'

import BookSearch from '../../constants/types/bookSearch'
import { setBook } from '../../store/reducers/bookReducer'
import { useAppDispatch } from '../../utils/hooks/hooksRedux'
import CardBook from '../cards/card'

export default function RenderBooks({books}:{books: BookSearch[]})
{
    const dispatch=useAppDispatch();

    const onPickTheBook=useCallback((selectedBook: BookSearch)=>{
      dispatch(setBook(selectedBook))
    },[setBook])

    return(
      <>
        <div className="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {books&&books.map((elem)=>(
            <div className="col mt-4 mb-4">
              <CardBook bookInfo={elem} key={elem.id} onPick={onPickTheBook}></CardBook>
            </div>
          ))}
        </div>
      </>
    )
}