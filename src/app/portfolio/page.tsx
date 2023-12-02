"use client"
import React, { useEffect, useState } from 'react';
import styles from './PortfolioPage.module.css';
import Image from 'next/image';

/**
 *  Portfolio page.
 *  Created by Muhammed Elşami on 01.12.2023
 */ 

export default function PortfolioPage() {
    const [images, setImages] = useState<{id:string, url : string, title: string, category: string}[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [portfolioImages, setPortfolioImages] = useState<{ id: string; url: string; title: string; category: string; }[]>([]);

    useEffect(() => {
        // Fetch images from API
        fetch('https://api.npoint.io/82f4046ef25a5df82a2d')
            .then(response => response.json())
            .then((data: { id: string; url: string; title: string; category: string; }[]) => {
                setPortfolioImages(data);
                const uniqueCategories = Array.from(new Set<string>(data.map(image => image.category)));
                setCategories(['All', ...uniqueCategories]);
            });
    }, []);

    const filteredImages = selectedCategory === 'All' ? portfolioImages : portfolioImages.filter(image => image.category === selectedCategory);


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
                    <Image key={image.id} src={image.url} alt={image.title} width={100} height={100} className={styles.image} ></Image>
                ))}
            </div>
        </div>
    );
}