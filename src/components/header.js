import React from "react"
import { Link } from "gatsby"
import headerStyle from "./header.module.css"

export default () => (
    <div className={headerStyle.header}>
    <div className={headerStyle.logo}>
    <img src={ require('../images/logo.svg')}/>
    </div>
    <div className={headerStyle.nav}>
    
        <Link to="/">
       Home
        </Link>
        <Link to="gift-card">Get Gift Card</Link>
        <Link to="menu">Menu</Link>
    </div>
    </div>
)