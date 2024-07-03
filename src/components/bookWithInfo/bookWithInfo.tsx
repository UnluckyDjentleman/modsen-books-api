import Book from '../../constants/types/book'
import photo from '../../assets/book_placeholder.png' 

export default function BookWithInfo({volumeInfo}:{volumeInfo:Book}){
    return(
        <>
        <div className="row justify-content-center row-cols-sm-2">
            <div className="col">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <img src={volumeInfo.imageLinks!==undefined?volumeInfo.imageLinks.thumbnail:photo}></img>
                </div>
            </div>
            <div className="col">
                <p>{volumeInfo.categories!==undefined?volumeInfo.categories[0]:''}</p>
                <h2>{volumeInfo.title}</h2>
                <p>{volumeInfo.authors!==undefined?volumeInfo.authors.toString():''}</p>
                <div className="border">
                    <p>{volumeInfo.description}</p>
                </div>
            </div>
        </div>
        </>
    )
}