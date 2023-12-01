import styles from './Footer.module.css'
import Image from 'next/image'
import social_media from './data';

/**
 *  Footer component
 *  Created by Muhammed Elşami on 01.12.2023
 */ 

export default function Footer() {
    return (
        <div className={styles.container}>
            <div>&copy;2023 Muhammed Elsami. All rights reserved.</div>
            <div className={styles.social}>
                {social_media.map((social, index) => (
                    <Image 
                        key={index}
                        src={`/images/icons/${social.name}.png`}
                        alt={social.name}
                        width={25} 
                        height={25} 
                        className={styles.socialIcon}
                    />
                ))}
                
            </div>
        </div>
    );
}