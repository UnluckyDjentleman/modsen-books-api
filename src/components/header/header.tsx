import Filter from "./filter/filter";
import SearchBar from "./searchbar/searchBar";

export default function Header({setSearchInput, setCategory, setOrder}:{setSearchInput:Function, setCategory:Function, setOrder: Function}){

    return(
        <header className="header">
            <h2>Search Books</h2>
            <div className="d-flex justify-content-center">
                <div className="col-lg-4">
                    <SearchBar onSubmitSearch={setSearchInput}></SearchBar>
                    <div className="d-flex">
                        <div className="col-mt-4  px-5">
                            <label>Category</label>
                            <Filter info={{items:['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']}} onSelection={setCategory}></Filter>
                        </div>
                        <div className="col-mt-4 px-5">
                            <label>Sort</label>
                            <Filter info={{items:['relevance','newest']}} onSelection={setOrder}></Filter>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}