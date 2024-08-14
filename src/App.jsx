import React  from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import CharacterPage from './pages/character/characterPage';
import EpisodesPage from './pages/episodes/episodesPage';
import NotFoundPage from './pages/notFound/notFoundPage';
import DetailPage from './pages/detail/detailPage';


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/characters' element={<CharacterPage />}></Route>
          <Route path='/characters/:id' element={<DetailPage />}></Route>
          <Route path='/episodes' element={<EpisodesPage />}></Route>
          <Route path='/episodes/:id' element={<DetailPage />}></Route>
          <Route path='/*' element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
