import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {

return (
    <div id="mainSection">
        <Sidebar pageWrapID={"page-wrap"} outerContainerID={"Nav"} />
        <div id="page-wrap">
            <Navbar />
            {children}
        </div> 
        
    </div>
    // <>
    // <Navbar />
    // <div>
    //     {children}
    // </div>
    // </>
)
}


export default Layout