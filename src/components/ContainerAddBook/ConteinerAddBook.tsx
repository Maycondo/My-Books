/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { useBook } from "../Context/BookContext";
import ErroMessagem from "../MessagensBooks/ErroMessagemBook";
import SuccessMessagem from "../MessagensBooks/SuccessMessagem";
import { IoStarOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { useState } from "react";
import { FaBook } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import "./Style/style_1.css";
import "./Style/style_2.css";

const categorias = [
    "Ação", "Fantasia", "Aventura", "Romance", "Terror", "Biografia", "Comédia", "Drama",
    "Ficção", "Infantil", "Mistério", "Thriller", "Vida Real", "Científica",
    "Ficção Científica", "Documentário"
] as const;

interface CardBookAddProps { 
    isOpen: boolean;
    onClose: () => void;
}

export default function CardBookAdd({ isOpen, onClose }: CardBookAddProps) {
    if (!isOpen) return null;

    const { bookData, setBookData } = useBook();
    const [rating, setRating] = useState(0);
    const [erroMessage, setErroMessagem] = useState(false);
    const [URLimagem, setURLimagem] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);


    const [newBook, setNewBook] = useState({
        title: "",
        authorBook: "",
        description: "",
        imageUrl: null as string | null,
        categoria: [] as string[],
        rating: 0,
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            const fileUrl = URL.createObjectURL(e.target.files[0]);
            setNewBook((prev) => ({ ...prev, imageUrl: fileUrl }));
            setURLimagem(null);
        }
    };

    const handleCategoriaClick = (categoria: string) => {
        setNewBook((prev) => ({
            ...prev,
            categoria: prev.categoria.includes(categoria) 
                ? prev.categoria.filter((cat) => cat !== categoria) 
                : [...prev.categoria, categoria]
        }));
    };

    const handleRating = (newRating: number) => {
        setRating(newRating);
        setNewBook((prev) => ({ ...prev, rating: newRating }));
    }

    const handleImageUpload = () => {
        setURLimagem((prev) => (prev ? null : "upload"));
    }

    const validateForm = (): string | null => {
        if (!newBook.title.trim() || !newBook.authorBook.trim() || 
            !newBook.description.trim() || newBook.categoria.length === 0) {
            return "Erro: Todos os campos são obrigatórios!";
        }
        return null;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const error = validateForm();
        if (error) { 
            setErroMessagem(true);
            setTimeout(() => setErroMessagem(false), 3000);
            return;
        }
    
        const newBookData = {
            id: crypto.randomUUID(), 
            title: newBook.title,
            authorBook: newBook.authorBook,
            description: newBook.description,
            imageUrl: newBook.imageUrl || "",
            categoria: newBook.categoria,
            rating: rating,
            createdAt: new Date().toISOString() // Current timestamp
        };
         
        setBookData((prev) => [...prev, newBookData]);
        setSuccessMessage("Livro adicionado com sucesso!");
    
        setNewBook({
            title: "",
            authorBook: "",
            description: "",
            imageUrl: "",
            categoria: [],
            rating: 0,
        });
    
        setTimeout(() => {
            onClose();
            setSuccessMessage(null);
        }, 3000);
    };
    

    return (
        <div className="card_opacity">
            <div className="card_add_book">
                <button className="Button" onClick={onClose}>
                    <span className="X"></span>
                    <span className="Y"></span>
                    <div className="close">Close</div>
                </button>
                
                <form onSubmit={handleSubmit}>
                    <div className="card_imagem">
                        {newBook.imageUrl ? (
                            <img className="imagem_book" src={newBook.imageUrl} alt="Book"/>
                        ) : (<p><FaBook/></p>)}
                        {!newBook.imageUrl && (
                            <button className="Button_add_imagem" type="button" onClick={() => handleImageUpload()}>
                                <span className="add_imagem">Add Cover</span>
                            </button>
                        )}
                        {newBook.imageUrl && (
                            <button type="button" className="Button_dele_imagem" onClick={() => setNewBook((prev) => ({ ...prev, imageUrl: null }))}>
                                <ImBin/>
                            </button>
                        )}
                        {URLimagem && (
                            <div className="Content_upload">
                                <div className="Contente-URl-image">
                                   <label className="label-URL-imagem">Upload URL Image</label>
                                    <input id="url-image" type="text" placeholder="https://exemplo.com/imagem.jpg" value={newBook.imageUrl ?? ""} 
                                    onChange={(e) => setNewBook((prev) => ({ ...prev, imageUrl: e.target.value }))} className="input-URL-image"/>
                                    <button type="button" className="Button_upload-URL" onClick={() => setURLimagem(null)}>Confimar</button>
                                </div>
                            </div>
                        )}

                        <div className="input-center">
                            <div className="input-group">
                                <input  className={`input-text ${!newBook.title.trim() ? "error_" : ""}`}  name="title"  type="text"  placeholder="Name Book"  autoComplete="off" value={newBook.title} onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}/>
                                <label className="input-text-label">Name Book</label>
                            </div>

                            <div className="input-group">
                                <input className={`input-text ${!newBook.authorBook.trim() ? "error_" : ""}`} name="author" type="text" placeholder="Author Book" value={newBook.authorBook}onChange={(e) => setNewBook({ ...newBook, authorBook: e.target.value })}/>
                                <label className="input-text-label">Author Book</label>
                            </div>
                        </div>

                    </div>

                    <div className="card_discretion">
                        <div className="seletc_catery">
                            <p id="Text_catery">Select Categories</p>
                                <ul>
                                    {categorias.map((categoria) => (
                                        <li key={categoria}  className={newBook.categoria.includes(categoria) ? "selected" : ""} onClick={() => handleCategoriaClick(categoria)}>
                                            {categoria}
                                        </li>
                                    ))}
                                </ul>
                        </div>

                        <div className="rating-enviar">
                            <label className="input-text-rating">Rating:</label>
                            {[...Array(5)].map((_, index) => (
                                <li key={index} className="star-icon-enviar" onClick={() => handleRating(index + 1)} 
                                    style={{ cursor: "pointer", color: index + 1 <= rating ? "#FFD700" : "#ccc" }}>
                                    {index + 1 <= rating ? <IoStar /> : <IoStarOutline />}
                                </li>
                            ))}
                        </div>

                        <label className="input-text-discretion">Discretion Book:</label>
                            <div className="custom-box">
                                <textarea className="Box_discretion" value={newBook.description} onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}></textarea>
                                <span className="corner top-left"></span>
                                <span className="corner top-right"></span>
                                <span className="corner bottom-left"></span>
                                <span className="corner bottom-right"></span>
                            </div>
                        <button className="Button_submit" type="submit">Add Book</button>
                    </div>

                </form>
            </div>

            {erroMessage && <ErroMessagem onClose={() => setErroMessagem(false)} />}
            {successMessage && <SuccessMessagem onClose={() => setSuccessMessage(null)} />}
        </div>  
    );
}
