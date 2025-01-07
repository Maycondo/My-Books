"use client";

import { useState , useEffect, } from "react";
import "./style.css"

export default function Loader () {

    const [messageIndex, setMessageIndex] = useState<number>(0)
    const [messagens] = useState<string[]>( ["Olá! Seja muito bem-vindo.", "Veja um pouco dos livros que estou lendo."] )
    const [displayedText, setDisplayedText] = useState<string>("")
    const [charIndex, setCharIndex] = useState<number>(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % messagens. length)
            setDisplayedText("")
            setCharIndex(0)
        }, 5000)

        return () => clearInterval(intervalId)
    }, [messagens.length])

    useEffect(() => {   
        if (charIndex < messagens[messageIndex].length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + messagens[messageIndex][charIndex])
                setCharIndex((prev) => prev + 1)
            }, 100)

            return () => clearInterval(timeoutId)
        }

    }, [charIndex, messageIndex, messagens])

    return (
        <div className="Loader">
            <h1 id="Name-Perso">{displayedText}</h1>
        </div>
    )
}