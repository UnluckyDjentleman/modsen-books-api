import { useCallback} from "react";
import {FaSearch} from "@react-icons/all-files/fa/FaSearch"
export default function SearchBar({onSubmitSearch,onInputText}:{onSubmitSearch:Function, onInputText: Function}){
    const sendReqByEnter=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        if (e.key === 'Enter') {
            onSubmitSearch();
        } 
    }
    const onSubmitting=useCallback(()=>{
        onSubmitSearch()
    },[onSubmitSearch])
    return (
        <>
            <div className="input-group">
                <div className="form-outline" data-mdb-input-init>
                    <input type="search" id="form1" className="form-control"
                placeholder="Enter the name of book"
                name="input"
                onChange={(e)=>{onInputText(e.currentTarget.value)}}
                onKeyUp={sendReqByEnter}></input>
                </div>
                <button type="button" className="btn btn-primary" data-mdb-ripple-init onClick={onSubmitting}>
                    <FaSearch></FaSearch>
                </button>
            </div>
        </>
    )
}