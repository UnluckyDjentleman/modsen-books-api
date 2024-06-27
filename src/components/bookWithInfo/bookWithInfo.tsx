import Book from '../../constants/book'
import photo from '../../assets/book_placeholder.png' 

export default function BookWithInfo({bookInfo}:{bookInfo: Book}){
    return(
        <>
        <div className="d-flex mt-3">
            <div className="bg-secondary col-6">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <img src={bookInfo.imageLinks!==undefined?bookInfo.imageLinks.thumbnail:photo}></img>
                </div>
            </div>
            <div className="col-6">
                <p>{bookInfo.categories!==undefined?bookInfo.categories[0]:''}</p>
                <h2>{bookInfo.title}</h2>
                <p>{bookInfo.authors!==undefined?bookInfo.authors.toString():''}</p>
                <textarea rows={8} cols={60} value={bookInfo.description} readOnly></textarea>
            </div>
        </div>
        </>
    )
}