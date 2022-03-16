import React from 'react'
import style from './brand.module.css'

const Nav = () => {
  return (
    <nav className="navbar navbar-light bg-secondary" style={{backgroundColor: '#e3f2fd'}}>
        <div className="container-fluid">
            <div className={style.brand__text}>
                <a className='navbar-brand text-white' href="!#">
                    <h1>Quote Generator</h1>
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Nav
