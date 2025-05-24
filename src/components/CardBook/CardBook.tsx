/* eslint-disable @next/next/no-img-element */
import { useState, useEffect , useRef} from "react";
import { IoBook } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { MdEditNote } from "react-icons/md";
import Toolbar from "./Toolbar"
import { motion } from "framer-motion";
import { PASSWORD_ADMIN } from "../../app/password";        
import CardPassword from "../CardPassWord/CardPassWord";


import "./style_1.css";
import "./style_2.css";
import "./Style_mobile/Style_1.css";


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

export default function CardBook({ isOpen, onClose, book }: CardBookProps) {
    

    const [showPasswordModal, setShowPasswordModal] = useState<boolean>(false);
    const [inputPassword, setInputPassword] = useState<string>("");
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState(book.description);
    const [toolbar, setToolbar] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
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

    const toggleMincontainer = () => setToolbar(prev => !prev)

    const toggleEdit = () => {
        if (!isAuthorized) {
            setShowPasswordModal(true);
            setSubmitted(false);
            return;
        }
        setIsEdit(prev => !prev);
    };

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring"} },
        exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
      }
    

    return (
        <>
            <motion.div className="card-book-open" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
                <div className="card-book-header">  
                    <h1><IoBook/> Book Review</h1>              
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
                                    {[...Array(5)].map((_, index) => (
                                        <li key={index} className="star-icon"
                                        style={{ color: index < rating ? "#FFD700" : "#ccc" }}
                                        >{book.rating < rating ? <IoStarOutline /> : <IoStar />}</li>
                                    ))}
                            </ul>
                            <h6 id="Publication_book">Publication:  <i>{formatDate(book.createdAt)}</i> </h6>
                      {isAuthorized ? (
                            isEdit ? (
                                <><textarea className="text_edit" value={description} onClick={toggleMincontainer} onChange={(e) => setDescription(e.target.value)}/>
                                    {toolbar && <Toolbar setDescription={setDescription} />}
                                    <button className="save-button" onClick={handleSave}>Save</button>
                                </>
                            ) : (
                                <div className="description-container">
                                    <div dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, "<br>") }} />
                                    <button className="Button_Edit" onClick={() => setIsEdit(true)}>
                                        <MdEditNote />
                                    </button>
                                </div>
                            )
                            ) : (
                            <div className="description-container">
                                <div dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, "<br>") }} />
                                <button className="Button_Edit" onClick={toggleEdit}>
                                <MdEditNote />
                                </button>
                            </div>
                            )}

                    </div>
                    <div className="card-book__image">
                            <img src={book.imageUrl} alt={book.title} />
                        <div className="card-book-discript">
                            <p id="Author">Author: <i>{book.authorBook}</i></p>
                            <p id="Category">Category: <i>{book.categoria.join(', ')}</i></p>
                        </div>
                    </div>
                </div>
            </motion.div>
            {showPasswordModal && (
                <CardPassword
                isOpen={true}
                onClose={() => {
                    setShowPasswordModal(false);
                    setInputPassword("");
                }}
                submitted={submitted}
                setSubmitted={setSubmitted}
                inputPassword={inputPassword}
                setInputPassword={setInputPassword}
                passwordAdmin={PASSWORD_ADMIN}
                onSuccess={() => {
                    setIsEdit(true);
                    setSubmitted(true);
                    setShowPasswordModal(false);
                    setIsAuthorized(true); 
                }}
                />
            )}
        </>
    )
}