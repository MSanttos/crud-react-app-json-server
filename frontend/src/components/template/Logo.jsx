import './Logo.css'
import logo192 from '../../assets/imgs/logo192.png'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
  <aside className="logo">
    <Link to="/" className="logo">
      <img src={logo192} alt="logo" />
    </Link>
  </aside>

