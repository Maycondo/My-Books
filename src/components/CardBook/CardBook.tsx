/* eslint-disable @next/next/no-img-element */
import { useState, useEffect , useRef} from "react";
import { IoBook } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { MdEditNote } from "react-icons/md";

import "./style_1.css";
import "./style_2.css";

import { FiList } from "react-icons/fi";
import { BiText } from "react-icons/bi";
import { MdFormatColorText } from "react-icons/md";
import { PiTextBBold } from "react-icons/pi";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { BsTypeH1 } from "react-icons/bs";
import { BsTypeH2 } from "react-icons/bs";
import { BsTypeH3 } from "react-icons/bs";

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
        createdAt: string;
    }
}

const iconsMinContainer = [
    { icon: FiList },
    { icon: MdOutlineFormatListNumbered },
    { icon: BiText },
    { icon: MdFormatColorText },
    { icon: PiTextBBold },
    { icon: BsTypeH1 },
    { icon: BsTypeH2 },
    { icon: BsTypeH3 },
]

export default function CardBook({ isOpen, onClose, book }: CardBookProps) {
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState(book.description);
    const [minConteiner, setMinConteiner] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const descriptionLoaded = useRef(false);
    
        
    useEffect(() => {
        const savedRating = localStorage.getItem(`@rating-${book.id}`);
        if (savedRating) setRating(parseInt(savedRating, 10));

        if(!descriptionLoaded.current) {
           const savedDescription = localStorage.getItem(`@description-${book.id}`);
              if (savedDescription) setDescription(savedDescription);
                descriptionLoaded.current = true;
        }
        
    }, [book.id]);

    const handleRating = (newRating: number) => {
        setRating(newRating);
        localStorage.setItem(`@rating-${book.id}`, newRating.toString());
    }
    const toggleMincontainer = () => setMinConteiner(!minConteiner)
    const toggleEdit = () => setIsEdit(!isEdit);
    const handleSave = () => {
        localStorage.setItem(`@description-${book.id}`, description);
        setIsEdit(false);
     }

    const formatDate = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
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
                            <h3>Book Rating:</h3>
                                {[...Array(5)].map((_, newRating) => (
                                    <li key={newRating} className="star-icon" onClick={() => handleRating(newRating + 1)}
                                    style={{ cursor: "pointer", color:  newRating < rating ? "#FFD700" : "#ccc"}}
                                    >{newRating < rating ? <IoStar /> : <IoStarOutline />}</li>
                                ))}
                        </ul>
                        <h6 id="Publication_book">Publication:  <i>{formatDate(book.createdAt)}</i></h6>
                    {isEdit ? (<>
                        <textarea className="text_edit" value={description} onClick={() => toggleMincontainer()} onChange={(e) => setDescription(e.target.value)} />
                        {
                            minConteiner ? (
                                <div className="min-container">
                                    {iconsMinContainer.map((item, index) => (
                                        <button key={index} className="Button_icones"><item.icon/></button>
                                    ))}
                                </div>
                            ) : null
                        }
                        <button className="save-button" onClick={handleSave}>Save</button></>
                    ): (<p>
                        {description.split("\n").map((line, index) => (
                          <span key={index}>
                            {line}
                          </span>
                        ))}
                        <button className="Button_Edit" onClick={toggleEdit}><MdEditNote /></button>
                      </p>)}
                </div>
                <div className="card-book__image">
                        <img src={book.imageUrl} alt={book.title} />
                    <div className="card-book-discript">
                        <p id="Author">Author: <i>{book.authorBook}</i></p>
                        <p id="Category">Category: <i>{book.categoria.join(', ')}</i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}