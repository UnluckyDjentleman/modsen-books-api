import './App.css'
import './assets/bootstrap.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/header/header'
import BookInfoPage from './pages/renderBook'
import BooksPage from './pages/renderBooks'
import { useAppSelector } from './utils/hooks/hooksRedux'

function App() {
    const chosenBook = useAppSelector(state => state.book.value)

    const mainPage = '/'
    const bookPage = '/book'

    return (
        <>
            <Header></Header>
            <main className="container">
                <BrowserRouter>
                    <Routes>
                        <Route path={mainPage} element={<BooksPage />} />
                        <Route
                            path={bookPage}
                            element={
                                <BookInfoPage book={chosenBook}></BookInfoPage>
                            }
                        ></Route>
                    </Routes>
                </BrowserRouter>
            </main>
        </>
    )
}

export default App
