/* eslint-disable @next/next/no-img-element */
import ErroMessagem from "../MessagensBooks/ErroMessagemBook"
import SuccessMessagem from "../MessagensBooks/SuccessMessagem";
import { JSX, useState } from "react";
import { FaBook } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import "./Style/style_1.css"
import "./Style/style_2.css"

type Categoria = string[];

interface Information {
    title: string;
    authorBook: string;
    description: string;
    imageUrl: string | null;
    categoria: Categoria;
}

interface CardBookAddProps { 
    isOpen: React.Dispatch<React.SetStateAction<boolean>>;  
    onClose: () => void;
}

const categorias: Categoria = [
    "Ação","Fantasia","Aventura","Romance","Terror","Biografia","Comédia","Drama","Ficção",
    "Infantil","Mistério","Thriller","Vida Real", "Científica","Ficção Científica","Documentário",
];

export default function CardBookAdd ({ isOpen, onClose}: CardBookAddProps): JSX.Element | null {
    
    const [bookData, setBookData]= useState<Information>({ title: "", authorBook: "", description: "", imageUrl: null, categoria: [],});
    const [erroMessage, seterroMessagem] = useState<boolean>(false)
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setBookData((prev) => ({
                ...prev,
                imageUrl: e.target.files ? URL.createObjectURL(e.target.files[0]) : null,
            }));
        }
    }

    const handleCategoriaClick = (categoria: string) => {
            setBookData((prev) => ({ ...prev, categoria: prev.categoria.includes(categoria) 
                ? prev.categoria.filter((cat) => cat !== categoria) 
                : [...prev.categoria, categoria] 
            }));
    };


    const validateForm = (): string | null => {
        if (bookData.title.trim() === "" || bookData.authorBook.trim() === "" || 
            bookData.description.trim() === "" || bookData.categoria.length === 0) 
            return "Erro: Todos os campos são obrigatórios!";
        return null;
    };  

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault();
        const error = validateForm();
        if (error) { 
            seterroMessagem(true);
            setTimeout(() => seterroMessagem(false), 3000);
            return 
        }
        setSuccessMessage("Livro adicionado com sucesso!")

        console.log(bookData);
        setTimeout(() => isOpen(false), 3000);
    }

    return (
        <div className="card_opacity">
            <div className="card_add_book">
                <button className="Button" onClick={ onClose }>
                    <span className="X"></span>
                    <span className="Y"></span>
                    <div className="close">Close</div>
                </button>
                    <form className="form_card" action="" onSubmit={ handleSubmit }>
                            <div className="card_imagem">
                                {bookData.imageUrl ? (<img className="imagem_book" src={ bookData.imageUrl } alt="Book"/> ) : (<p><FaBook/></p>)}
                                {bookData.imageUrl  ? (<br />) : (<label className="custom-file-upload">Select cover
                                    <input type="file" className="Book-cover" onChange={ handleFileChange } />
                                </label>)}
                                {bookData.imageUrl && ( <button type="button" className="Button_dele_imagem" onClick={() => setBookData(prev => ({ ...prev, imageUrl: null}))}><ImBin/></button>)}
                            </div>                              
                            <div className="input-group">
                                <input className={`input-text ${!bookData.title.trim() && "error_"}`} name="text" type="text" placeholder="Name Book" autoComplete="off" onChange={(e) => setBookData({ ...bookData, title: e.target.value})}/>
                                <label className="input-text-label" htmlFor="text">Name Book</label>
                            </div> 
                            <div className="seletc_catery">
                                <p id="Text_catery">Book Categories</p>
                                    <ul>
                                        {categorias.map((categoria, index) => (
                                            <li className={ bookData.categoria.includes(categoria) ? " selected ": " " } key={index} 
                                            onClick={() => handleCategoriaClick( categoria )}>{ categoria }</li>    
                                        ))}
                                    </ul>
                            </div>
                            <div className="input-group">
                                <input className={`input-text ${!bookData.authorBook.trim() && "error_"}`} name="text" type="text" placeholder="Author Book" onChange={(e) => setBookData({...bookData, authorBook: e.target.value})}/>
                                <label className="input-text-label" htmlFor="text">Author Book</label>   
                            </div>
                            <div className="custom-box">
                                    <label className="input-text-discretion">Discretion Book:</label>
                                    <textarea className="Box_discretion" id="story"  onChange={(e) => setBookData({ ...bookData, authorBook: e.target.value})}></textarea>
                                    <span className="corner top-left"></span><span className="corner top-right"></span>
                                    <span className="corner bottom-left"></span><span className="corner bottom-right"></span>
                            </div>
                                <button className="Button_submit" type="submit">Add Book</button>
                    </form>

            </div>
            {erroMessage && (<ErroMessagem onClose={() => seterroMessagem(false)}/>)}
            {successMessage && (<SuccessMessagem onClose={() => setSuccessMessage(null)}/>)}
        </div>  
    )
}


