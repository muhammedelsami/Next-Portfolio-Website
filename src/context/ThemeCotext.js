"use client"
import React, { createContext, useState } from "react";

/**
 *  ThemeContext
 *  Created by Muhammed Elşami on 01.12.2023
 */ 

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('dark');

    const toggle = () => {
        setMode(prev => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
            <div className={`theme ${mode}`}>
                 {children}
            </div>
        </ThemeContext.Provider>
    )
}



