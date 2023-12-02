"use client"
import React, { useEffect, useState } from 'react';
import styles from './PortfolioPage.module.css';

/**
 *  Portfolio page.
 *  Created by Muhammed Elşami on 01.12.2023
 */ 

export default function PortfolioPage() {
    const [images, setImages] = useState<{ category: string }[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        // Fetch images from API
        fetch('https://api.npoint.io/82f4046ef25a5df82a2d')
            .then(response => response.json())
            .then((data: { category: string }[]) => {
                setImages(data);
                const uniqueCategories = Array.from(new Set<string>(data.map(image => image.category)));
                setCategories(['All', ...uniqueCategories]);
            });
    }, []);

    const filteredImages = selectedCategory === 'All' ? images : images.filter(image => image.category === selectedCategory);


    return (
        <div className={styles.container}>
            <div className={styles.categoryContainer}>
                {categories.map(category => (
                    <button key={category} onClick={() => setSelectedCategory(category)} className={styles.categoryButton}>
                        {category}
                    </button>
                ))}
            </div>
            <div className={styles.imageContainer}>
                {filteredImages.map(image => (
                    <img key={image.id} src={image.url} alt={image.title} className={styles.image} />
                ))}
            </div>
        </div>
    );
}