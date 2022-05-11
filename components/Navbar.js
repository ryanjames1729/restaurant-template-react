import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'

import styles from '../styles/Navbar.module.css'


const Navbar = () => {
    return (
        <div className={styles.nav} id="Nav">
            <div className={styles.navContainer}>
            <div className={styles.logo}>
                    <h1><Link href="#contactMe">The Hap-pea Plate</Link></h1>
            </div>
           </div>
        </div>
    )
}

export default Navbar

// ReactDOM.render(<Navbar />, rootElement);

// export default Navbar