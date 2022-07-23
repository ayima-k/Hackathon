import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import { MainPages } from "./pages/General";
import More from './pages/General/pages/More/More';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={'/'} element={<MainPages.pages.Main />} />
        <Route path={'/favorites'} element={<MainPages.pages.Favorites />} />
        <Route path={'/profile'} element={<MainPages.pages.Profile />} />
        <Route path={'/responses'} element={<MainPages.pages.Responses />} />
        <Route path={'/users/:id'} element={<MainPages.pages.More/>} />
      </Routes>
    </div>
  );
}

export default App;