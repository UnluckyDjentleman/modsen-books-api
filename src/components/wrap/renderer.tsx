import { MouseEventHandler} from 'react'
import CardBook from '../cards/card'
import BookSearch from '../../constants/bookSearch'
import LoadMore from './loadMore/loadMore'

export function RenderBooks({books, clickCount, getId}:{
  books:BookSearch[], 
  clickCount: MouseEventHandler<HTMLButtonElement>|undefined,
  getId: Function
})
{
    return(
      <>
        <div className="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {books&&books.map((elem)=>(
            <div className="col mt-4 mb-4">
              <CardBook bookInfo={elem.volumeInfo} key={elem.id} bookId={elem.id} onPick={getId}></CardBook>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <LoadMore clicker={clickCount}></LoadMore>
        </div>
      </>
    )
}