import React from 'react'
import Navbar from './Navbar'
// import Footer from './Footer'
import '../assets/css/layout.scss'




const Layout = ({ children }) => {
    return (
        <>
            <div className='layout'>
                <Navbar />
                {children}
                
                {/* <footer>
                    <Footer />
                </footer> */}
            </div>
            
            
        </>
    )
}

export default Layout