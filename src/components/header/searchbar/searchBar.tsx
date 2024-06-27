import React, { useCallback } from "react";

export default function SearchBar({onSubmitSearch}:{onSubmitSearch:Function}){
    let searchText=""
    const sendReqByEnter=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        console.log("Value:"+searchText);
        if (e.key === 'Enter') {
            onSubmitSearch({search: searchText});
        } 
    }
    const Submitter=useCallback(()=>{
        onSubmitSearch({search: searchText})
    },[onSubmitSearch])
    return (
        <>
            <div className="input-group">
                <div className="form-outline" data-mdb-input-init>
                    <input type="search" id="form1" className="form-control"
                placeholder="Enter the name of book"
                name="input"
                onChange={(e)=>{searchText=e.target.value}}
                onKeyUp={sendReqByEnter}></input>
                </div>
                <button type="button" className="btn btn-primary" data-mdb-ripple-init onClick={Submitter}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </>
    )
}