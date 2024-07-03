import '../App.css'
import '../assets/bootstrap.css'
import BookWithInfo from '../components/bookWithInfo/bookWithInfo'
import BookSearch from '../constants/types/bookSearch'

export default function BookInfoPage({book}:{book: BookSearch|undefined}) {
    return (
      <>
      {
        book&&<BookWithInfo volumeInfo={book.volumeInfo}/>
      }
      </>
    )
}