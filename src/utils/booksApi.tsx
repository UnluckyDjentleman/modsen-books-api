import axios from "axios";
import BookSearchResult from "../constants/bookSearchResult";
import BookSearch from "../constants/bookSearch";

export default class BooksAPI{
    public static async GetBooks(query: string, startedIndex: number, orderedValue: string|undefined):Promise<BookSearchResult>
    {
        let resp=await axios.get('https://www.googleapis.com/books/v1/volumes',{
            params:{
                q: query,
                orderBy: orderedValue,
                startIndex: 30*startedIndex,
                maxResults: 30,
                key: 'AIzaSyBRKOSka7VWVxHO-yt3GAiG9GdcideKCSQ' 
            }
        })
        console.log("STATUS:"+resp);
        return resp.status===200?{bookSearchRes: resp.data.items, totalItems: resp.data.totalItems, error:undefined}:{bookSearchRes: [], totalItems: 0, error: resp.data.response.data.error};
    }

    public static async GetBook(id: string):Promise<BookSearch>{
        let resp=await axios.get('https://www.googleapis.com/books/v1/volumes/'+id,{
            params:{
                key: 'AIzaSyBRKOSka7VWVxHO-yt3GAiG9GdcideKCSQ'
            }
        });
        return resp.data;
    }
}