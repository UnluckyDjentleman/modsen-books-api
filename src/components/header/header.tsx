import Filter from "./filter/filter";
import SearchBar from "./searchbar/searchBar";
import photo from '../../assets/background.png'
export default function Header({setSearchInput, setCategory, setOrder}:{setSearchInput:Function, setCategory:Function, setOrder: Function}){
    return(
        <header style={{backgroundImage: "url(" + photo + ")"}}>
            <h2 style={{color: 'white'}} className="m-2">Search Books</h2>
            <div className="container mx-auto">
                <div>
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="d-flex justify-content-center">
                            <SearchBar onSubmitSearch={setSearchInput}></SearchBar>
                        </div>
                    </div>
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="d-flex mb-3">
                            <div className="m-3">
                                <label style={{color: 'white'}}>Category</label>
                                <Filter info={{items:['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']}} onSelection={setCategory}></Filter>
                            </div>
                            <div className="m-3">
                                <label style={{color: 'white'}}>Sort</label>
                                <Filter info={{items:['relevance','newest']}} onSelection={setOrder}></Filter>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}