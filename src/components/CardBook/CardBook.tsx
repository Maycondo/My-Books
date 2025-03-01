/* eslint-disable @next/next/no-img-element */
import "./style.css";


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
    }
}

export default function CardBook({ isOpen, onClose, book }: CardBookProps) {
    if (!isOpen) return null;

    return (
        <div className="card-book-open">
            <div className="card-book-header">  
                <h1>Book Review</h1>              
                <button className="Button_1" onClick={onClose}>
                    <span className="X_1"></span>
                    <span className="Y_1"></span>
                    <div className="close_1">Close</div>
                </button>
            </div>
            <div className="card-book__container">
                <div className="card-book__text">
                    <h1>Review Book: <i>{book.title}</i></h1>
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