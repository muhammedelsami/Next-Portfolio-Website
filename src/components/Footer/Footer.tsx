import styles from './Footer.module.css'
import Image from 'next/image'
import social_media from './data';
import Link from 'next/link';

/**
 *  Footer component
 *  Created by Muhammed Elşami on 01.12.2023
 */ 

export default function Footer() {
    return (
        <div className={styles.container}>
            <div>&copy;2023 <span className={styles.name}>Muhammed Elsami</span>. All rights reserved.</div>
            <div className={styles.social}>
                {social_media.map((social, index) => (
                    <Link href={social.url} key={index}>
                        <Image 
                            src={`/images/icons/${social.name}.png`}
                            alt={social.name}
                            width={25} 
                            height={25} 
                            className={styles.socialIcon}
                        />
                    </Link>
                ))}
                
            </div>
        </div>
    );
}