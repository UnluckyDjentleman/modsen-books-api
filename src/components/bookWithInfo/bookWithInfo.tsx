import { useNavigate } from 'react-router';

import photo from '../../assets/book_placeholder.png'
import Book from '../../constants/types/book'


export default function BookWithInfo({ volumeInfo }: { volumeInfo: Book }) {
    const navigate = useNavigate();

    const onReturn = () => {
        navigate("/");
    }
    return (
        <>
            <div className="row justify-content-center row-cols-sm-2">
                <div>
                    <div className="h-100 d-flex align-items-center justify-content-center bg-">
                        <img src={volumeInfo.imageLinks !== undefined ? volumeInfo.imageLinks.thumbnail : photo}></img>
                    </div>
                </div>
                <div>
                    <p>{volumeInfo.categories !== undefined ? volumeInfo.categories[0] : ''}</p>
                    <h2>{volumeInfo.title}</h2>
                    <p>{volumeInfo.authors !== undefined ? volumeInfo.authors.toString() : ''}</p>
                    <div className="border">
                        <p>{volumeInfo.description}</p>
                    </div>
                    <button onClick={onReturn} className="btn btn-link">Back</button>
                </div>
            </div>
        </>
    )
}