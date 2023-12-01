import Image from 'next/image'
import styles from './page.module.css'
import AboutPage from './repositories/page'
import ContactPage from './contact/page'
import Hero from '/public/images/undraw_android.svg'

/**
 *  Home page component
 *  Created by Muhammed Elşami on 01.12.2023
 */ 

export default function Home() {
  return (
        <div className={styles.container}>

          <div className={styles.col}>
            <h1 className={styles.title}>Muhammed Elsami</h1>
            <p className={styles.description}>Hi, My name id Muhammed Elsami, Im a computer Engineer and i work as an android developer</p>
            <button className={styles.button}>My Github</button>
          </div>

          <div className={styles.col}>
            <Image className={styles.img} src={Hero} alt="Picture of android device"/>
          </div>

        </div>
  )
}
