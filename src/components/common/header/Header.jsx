import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <a href='/'>Bosh Sahifa</a>
            </li>
            <li>
              <a href='/courses'>Barcha O'quv Kurslari </a>
            </li>
            <li>
              <a href='/about'>Ta'lim Haqida</a>
            </li>
            <li>
              <a href='/team'>Bizning Jamoa</a>
            </li>
            <li>
              <a href='/pricing'>Sarf Mablag'lari</a>
            </li>
            <li>
              <a href='/journal'>Ish Jarayonlari</a>
            </li>
            <li>
              <a href='/contact'>Muloqat Bo'limi</a>
            </li>
          </ul>
          <div className='start'>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
