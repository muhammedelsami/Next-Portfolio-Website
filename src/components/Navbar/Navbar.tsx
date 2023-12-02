"use client";
import Link from 'next/link';
import styles from './Navbar.module.css';
import links from './data';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { useState } from 'react';

/**
 *  Navbar component
 *  Created by Muhammed Elşami on 01.12.2023
 */ 

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.container}>
            {/* <Link href="/" className={styles.logo}>Muhammed Elşami</Link> */}

            <Link href={'/blog'} className={styles.button} data-text="Awesome">
                <span className={styles.actualtext}>&nbsp;Muhammed Elşami&nbsp;</span>
                <span aria-hidden="true" className={styles.hovertext}>&nbsp;Muhammed&nbsp;Elşami&nbsp;</span>
            </Link>

            <div className={styles.menuIcon} onClick={toggleMenu}>
                ☰
            </div>

            <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
                <DarkModeToggle />

                {links.map((link, index) => (
                     <Link key={index} href={link.url} className={styles.navbarLink}>{link.title}</Link>
                ))}
            </div>
        </div>
    );


    // return (
    //     <div className={styles.container}>
    //         <Link href="/" className={styles.logo}>Muhammed Elşami</Link>

    //         <div className={styles.links}>
    //             <DarkModeToggle />

    //             {links.map((link, index) => (
    //                 <Link key={index} href={link.url} className={styles.navbarLink}>{link.title}</Link>
    //             ))}
    //         </div>
    //     </div>
    // );
}