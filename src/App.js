import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register'
import {MainPages} from "./pages/General";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={'/'} element={<MainPages.pages.Main />} />
        <Route path={'/favorites'} element={<MainPages.pages.Favorites />} />
        <Route path={'/profile'} element={<MainPages.pages.Profile />} />
        <Route path={'/responses'} element={<MainPages.pages.Responses/>} />
        <Route path={'/auth/login'} element={<Login/>}/>
        <Route path={'/auth/register'} element={<Register/>}/>
        <Route path={'/responses'} element={<MainPages.pages.Responses />} />
        <Route path={'/users/:id'} element={<MainPages.pages.More/>} />
        <Route path={'/developers'} element={<MainPages.pages.Responses />} />
        <Route path={'/users/:id'} element={<MainPages.pages.More />} />
        <Route path={'/resume'} element={<MainPages.pages.AddResume />} />
      </Routes>
    </div>
  );
}

export default App;