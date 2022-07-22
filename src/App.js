import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPages} from "./pages/General";

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<MainPages.pages.Main />} />
        <Route path={'/favorites'} element={<MainPages.pages.Favorites />} />
        <Route path={'/profile'} element={<MainPages.pages.Profile />} />
        <Route path={'/responses'} element={<MainPages.pages.Responses/>} />
      </Routes>
    </div>
  );
}

export default App;