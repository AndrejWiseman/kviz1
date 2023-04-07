import React, { useState } from 'react'
import { Link } from 'gatsby'
import '../assets/css/navbar.scss'

import { FiAlignJustify } from 'react-icons/fi'


const Navbar = () => {

    const [show, setShow] = useState(false)

    return (
        <nav className='navbar'>
            <div className="nav-center">	
                <div className='nav-header'>
                    <Link to='/' className='logo'><h2>kvizo<span className='logo-span'>M</span>ani<span className='logo-span'>A</span></h2></Link>

                    <button><FiAlignJustify onClick={() => setShow(!show)} /></button>
                </div>

                <div className={show ? 'nav-links show-links' : 'nav-links'}>
                        <Link to='/' activeClassName='active-link' onClick={() => setShow(false)}>Pocetna</Link>
                        <Link to='/kviz' activeClassName='active-link' onClick={() => setShow(false)}>Kvizovi</Link>
                        <Link to='/igre' activeClassName='active-link' onClick={() => setShow(false)}>Igre</Link>
                </div>

                
            </div>
        </nav>
    )
}

export default Navbar