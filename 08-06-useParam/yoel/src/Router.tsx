import React from 'react'
import App from './App'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Someone from './view/components/Someone';

function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path=':someone' element = {<Someone/>} />
    </Routes>
  </BrowserRouter>

  )
}

export default Router