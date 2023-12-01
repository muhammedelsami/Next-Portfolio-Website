import Link from 'next/link';
import styles from './Navbar.module.css';
import links from './data';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

/**
 *  Navbar component
 *  Created by Muhammed Elşami on 01.12.2023
 */ 

export default function Navbar() {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Muhammed Elşami</Link>

            <div className={styles.links}>
                <DarkModeToggle />

                {links.map((link, index) => (
                    <Link key={index} href={link.url} className={styles.navbarLink}>{link.title}</Link>
                ))}
            </div>
        </div>
    );
}