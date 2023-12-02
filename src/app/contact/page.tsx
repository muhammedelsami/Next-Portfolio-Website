"use client";
import styles from './ContactPage.module.css';

/**
 *  Contact Page
 *  Created by Muhammed Elşami on 01.12.2023
 */ 

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h2>Information</h2>
                <div>You can always ask me questions about Android development, web development, Arduino, robotics, programming fundamentals and algorithms.</div>
                <p><strong>Phone:</strong> +90 552 000 00 00</p>
                <p><strong>Email:</strong> info@example.com</p>
                <p><strong>Address:</strong> Istanbul, TURKIYE</p>
            </div>
            <div className={styles.form}>
                <h2>Contact Us</h2>
                <form>
                    <label className={styles.label}>
                        Name:
                        <input type="text" name="name" placeholder='Your Name'/>
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" placeholder='Your Email'/>
                    </label>
                    <label>
                        Message:
                        <textarea name="message" placeholder='Massage ...'></textarea>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}