import BookSearch from "./bookSearch"

interface BookSearchResult{
    bookSearchRes: BookSearch[];
    totalItems: number,
    error: string|undefined
}

export default BookSearchResult