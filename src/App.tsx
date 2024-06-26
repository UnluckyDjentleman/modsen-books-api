import { useState} from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import './assets/bootstrap.css'
import BooksPage from './pages/renderBooks'
import Header from './components/header/header'
import SearchInput from './constants/search'
import BookInfoPage from './pages/renderBook'

function App() {
  const [searchInput, setSearchInput]=useState<SearchInput>({search: ""});
  const [id, setId]=useState<string>("");
  const [filter, setFilter]=useState<string|undefined>()
  const [cat, setCat]=useState<string|undefined>()
  const [count, setCount]=useState(0);

  const addCategory=(category:string)=>{
    setCount(0);
    console.log("Category:"+category);
    setSearchInput({search: 
        searchInput.search.toString().includes(category)===false?
        searchInput.search.toString().replace("+subject:"+cat, "+subject:"+category):
        searchInput.search+"+subject:"+category
    })
    setCat(category);
  }

  const setOrder=(orderBy: string)=>{
    setCount(0)
    setFilter(orderBy)
  }

  const setQ=(q: SearchInput)=>{
    console.log(q.search);
    setSearchInput({search: q.search});
  }

  return(
    <>
    <Header setSearchInput={setQ} setOrder={setOrder} setCategory={addCategory}></Header>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BooksPage order={filter} searchInput={searchInput} count={count} setCount={setCount} id={setId}/>} />
        <Route path="/book" element={<BookInfoPage id={id}></BookInfoPage>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
