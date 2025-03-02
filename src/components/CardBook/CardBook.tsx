/* eslint-disable @next/next/no-img-element */
import "./style.css";
import { useState, useEffect } from "react";
import { IoBook } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

interface CardBookProps {
    isOpen: boolean;
    onClose: () => void;
    book: {
        id: string;
        title: string;
        authorBook: string;
        description: string;
        imageUrl: string;
        categoria: string[];
        rating: number;
    }
}

export default function CardBook({ isOpen, onClose, book }: CardBookProps) {
    const [rating, setRating] = useState(0);
        
    useEffect(() => {
        const savedRating = localStorage.getItem(`@rating-${book.id}`);
        if (savedRating) {
            setRating(parseInt(savedRating, 10));
        }
    }, [book.id]);

    const handleRating = (newRating: number) => {
        setRating(newRating);
        localStorage.setItem(`@rating-${book.id}`, newRating.toString());
    }

    if (!isOpen) return null;

    return (
        <div className="card-book-open">
            <div className="card-book-header">  
                <h1><IoBook /> Book Review</h1>              
                <button className="Button_1" onClick={onClose}>
                    <span className="X_1"></span>
                    <span className="Y_1"></span>
                    <div className="close_1">Close</div>
                </button>
            </div>
            <div className="card-book__container">
                <div className="card-book__text">
                    <h1>Review Book: <i>{book.title}</i></h1>
                        <ul className="valiacao">
                            <h3>Rating:</h3>
                            {[...Array(5)].map((_, newRating) => 
                                <li key={newRating} className="star-icon" onClick={() => handleRating(newRating + 1)}  
                                style={{ cursor: "pointer", color: newRating < rating ? "#FFD700" : "#ccc"}}>
                                    {newRating < rating ? <IoStar /> : <IoStarOutline />}
                                </li>
                            )}
                        </ul>
                    <p>{book.description}</p>
                </div>
                <div className="card-book__image">
                    <img src={book.imageUrl} alt={book.title} />
                    <p>Author: <i>{book.authorBook}</i></p>
                    <p>Category: <i>{book.categoria.join(', ')}</i></p>
                </div>
            </div>
        </div>
    )
}