import Image from 'next/image'
import styles from './page.module.css'
import AboutPage from './repositories/page'
import ContactPage from './contact/page'
import Hero from '/public/images/undraw_android.svg'
import Link from 'next/link'

/**
 *  Home page component
 *  Created by Muhammed Elşami on 01.12.2023
 */ 

export default function Home() {
  return (
        <div className={styles.container}>

          <div className={styles.col}>
            <h1 className={styles.title}>I’m Muhammed Android Developer</h1>
            <p className={styles.description}>I graduated from Sivas Cumhuriyet University Computer Engineering Department.</p>
            <Link href={'/contact'} className={styles.button}>Contact Me</Link>
          </div>

          <div className={styles.col}>
            <Image className={styles.img} src={Hero} alt="Picture of android device"/>
          </div>

        </div>
  )
}
