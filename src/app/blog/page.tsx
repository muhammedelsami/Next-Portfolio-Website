import React from 'react';
import styles from './BlogPage.module.css';
import Link from 'next/link';

const BlogPage = () => {
    const posts = [
        { id: 1, title: 'RGB Remote Control', content: 'RGB Led Controller; Control the Rgb led by phone and it is very easy to turn ON/OFF and change colors.', coverImage: 'https://www.pushman.muhammedelsami.com/imgs/remotecontrol.png', date: '2023-12-01', author: 'Muhammed Elşami' },
        { id: 2, title: 'Android Animated Login Form', content: 'Animated Login Form animated login screen using rive library.', coverImage: 'https://www.pushman.muhammedelsami.com/imgs/animationlogin.webp', date: '2022-11-02', author: 'Muhammed Elşami' },
        { id: 2, title: 'PomoDroid Android Application', content: 'PomoDroid is a productivity app inspired by the Pomodoro Technique. It helps you organize your tasks and manage your time effectively. With PomoDroid, you can set work intervals, short breaks, and long breaks, and the app will notify you when it is time to start working or take a break. It also provides statistics to help you track your productivity over time.', coverImage: 'https://www.pushman.muhammedelsami.com/imgs/pomodroid.webp', date: '2023-12-02', author: 'Muhammed Elşami' },
        { id: 2, title: 'Push Man Notification Application', content: 'You can send notifications to your own apps through this app, you only need firebase server key. If you want to send it to a specific user, you will need the users token.', coverImage: 'https://www.pushman.muhammedelsami.com/imgs/pushman.webp', date: '2022-10-02', author: 'Muhammed Elşami' },

        // Add more posts as needed
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Blog</h1>
            <div className={styles.posts}>
                {posts.map(post => (
                    <Link href={'/blog'} key={post.id} className={styles.post}>
                        <img src={post.coverImage} alt={post.title} className={styles.coverImage} />
                        <h2 className={styles.postTitle}>{post.title}</h2>
                        <p className={styles.date}>{post.date}</p>
                        <p className={styles.author}>{post.author}</p>
                        <p className={styles.content}>{post.content}</p>
                        <div className={styles.readMore}>
                            Read More
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default BlogPage;