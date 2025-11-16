import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './jsx/header.jsx'
import FrontSec from './jsx/frontsec.jsx' 
import './style/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <link rel="icon" type="image/png"  href="/public/logo.png" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <Header />
    <FrontSec />
  </>
)