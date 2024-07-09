import Book from './book'

interface BookSearch {
    id: string
    etag: string
    selfLink: string
    volumeInfo: Book
}

export default BookSearch
