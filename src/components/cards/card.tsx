import { useNavigate } from 'react-router';
import photo from '../../assets/book_placeholder.png'
import { useCallback } from 'react';
import BookSearch from '../../constants/types/bookSearch';

export default function CardBook({bookInfo, onPick}:{bookInfo:BookSearch, onPick: Function}){
    const navigate=useNavigate();

    const onPickTheBook=useCallback(()=>{
        onPick(bookInfo);
        navigate("/book");
    },[onPick, bookInfo])

    return(
        <div className="card w-100 hover-shadow" style={{width: '18rem', height: '22rem'}} onClick={onPickTheBook}>
            <div className='card-header'>
                <p className='card-text'>{bookInfo.volumeInfo.categories&&bookInfo.volumeInfo.categories.length >= 1 ? bookInfo.volumeInfo.categories[0] : ''}</p>
            </div>
            <div className='card-body'>
                <div className="d-flex align-items-center justify-content-center" style={{height: '11rem'}}>
                    <img className="img-card-top" src={bookInfo.volumeInfo.imageLinks===undefined?photo:bookInfo.volumeInfo.imageLinks.smallThumbnail}></img>
                </div>
                <div className="text-truncate">
                    <h4 className='card-title'>{bookInfo.volumeInfo.title}</h4>
                </div>
                <p className='card-text'>{bookInfo.volumeInfo.authors && bookInfo.volumeInfo.authors.length >= 1 ? bookInfo.volumeInfo.authors[0] : ''}</p>
            </div>
        </div>
    )
}