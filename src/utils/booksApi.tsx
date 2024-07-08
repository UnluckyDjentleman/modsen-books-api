import axios from "axios";

import BookSearchResult from "../constants/types/bookSearchResult";
import SearchInput from "../constants/types/search";


export default class BooksAPI{
    public static async GetBooks(searchInfo: SearchInput):Promise<BookSearchResult>
    {
        const resp=await axios.get(process.env.API_URL as string,{
            params:{
                q: searchInfo.category===""?searchInfo.query:searchInfo.query+"+subject:"+searchInfo.category,
                orderBy: searchInfo.order,
                startIndex: searchInfo.startIndex,
                maxResults: 30,
                key: process.env.API_KEY
            }
        });
        return resp.data
    }
}