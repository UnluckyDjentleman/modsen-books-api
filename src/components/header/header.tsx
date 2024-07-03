import Filter from "./filter/filter";
import SearchBar from "./searchbar/searchBar";
import photo from '../../assets/background.png'
import { useCallback, useRef } from 'react';
import { useAppDispatch } from '../../utils/hooks/hooksRedux';
import { setBook } from '../../store/reducers/bookReducer';
import { setSearchInfo } from '../../store/reducers/searchInfoReducer';

export default function Header(){
    const search = useRef("");
    const category = useRef("");
    const order = useRef("relevance");
  
    const dispatch = useAppDispatch();
  
    const onSubmitSearch = useCallback(() => {
      dispatch(setBook(undefined));
      dispatch(
        setSearchInfo({
          query: search.current,
          category: category.current,
          order: order.current,
          startIndex: 0,
        })
      );
    }, [dispatch, search, category, order]);
  
    const onCategoryPicked = useCallback(
      (value: string) => {
        category.current = value;
      },
      [category]
    );
  
    const onOrderPicked = useCallback(
      (value: string) => {
        order.current = value;
      },
      [order]
    );

    return(
        <header style={{backgroundImage: "url(" + photo + ")"}}>
            <h2 style={{color: 'white'}} className="m-2">Search Books</h2>
            <div className="container mx-auto">
                <div>
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="d-flex justify-content-center">
                            <SearchBar onSubmitSearch={onSubmitSearch} onInputText={(text:string)=>search.current=text}></SearchBar>
                        </div>
                    </div>
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="d-flex mb-3">
                            <div className="m-3">
                                <label style={{color: 'white'}}>Category</label>
                                <Filter info={{items:['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']}} onSelection={onCategoryPicked}></Filter>
                            </div>
                            <div className="m-3">
                                <label style={{color: 'white'}}>Sort</label>
                                <Filter info={{items:['relevance','newest']}} onSelection={onOrderPicked}></Filter>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}