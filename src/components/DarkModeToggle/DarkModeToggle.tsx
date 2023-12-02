"use client"
import { useContext } from 'react';
import stayls from './DarkModeToggle.module.css';
import { ThemeContext } from '@/context/ThemeCotext';

/**
 *  DarkModeToggle component
 *  Created by Muhammed Elşami on 01.12.2023
 */

export default function DarkModeToggle() {

    const {mode, toggle} = useContext(ThemeContext);

    return (
        <div className={stayls.container} onClick={toggle}>
            <div className={stayls.icon}>🌞</div>
            <div className={stayls.icon}>🌚</div>
            <div 
                className={stayls.switcher}
                style={mode === "light" ? {left: "4px"} : {right :"4px"}}
            />
        </div>
    )
}