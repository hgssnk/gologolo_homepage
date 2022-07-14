import React from 'react'
import 'styles/reset.css'
import ReactDOM from 'react-dom'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Top from 'pages/Top'
import Counter from 'pages/Counter'
import NotFound from 'pages/404'
import New from 'pages/New'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/New" element={<New />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
