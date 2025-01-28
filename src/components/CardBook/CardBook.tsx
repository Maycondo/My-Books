/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import ImagemBook from "@/Image/livros.jpeg"
import "./Style/style_1.css"
import "./Style/style_2.css"
import { JSX, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

type Categoria = string[];

interface Information {
    title: string;
    authorBook: string;
    description: string;
    image: string;
    categoria: Categoria;
}

interface CardBookAddProps { 
    setAddbook: React.Dispatch<React.SetStateAction<boolean>>;  
    onClose: () => void; 
}

const categorias: Categoria = [
    "Ação","Fantasia","Aventura","Romance","Terror","Biografia","Comédia","Drama","Ficção",
    "Infantil","Mistério","Thriller","Vida Real","Ficção Científica","Documentário",
];

export default function CardBookAdd ({ setAddbook, onClose }: CardBookAddProps): JSX.Element | null {
    if(!setAddbook) return null;
    
    const [titleBook, settitleBook] = useState<string>("")
    const [authorBook, setAuthorBook] = useState<string>("")
    const [descriptionbook, setDescriptionbook] = useState<string>("");
    const [selectedCategorias, setSelectedCategoria] = useState<Categoria>([]);
    const [erroMessage, seterroMessagem] = useState<boolean>(false)
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleCategoriaClick = (categoria: string) => {
            setSelectedCategoria((prev) => 
            prev.includes(categoria)
                 ? prev.filter((cat) => cat !== categoria)
                    : [...prev, categoria]
            );
    }

    const validateForm = (): string | null => {
        if (
            titleBook.trim() === "" || descriptionbook.trim() === "" 
            || authorBook.trim() || selectedCategorias.length === 0 
        ) 
            return "Todos os campos e obrigatorio";
        return null;
    };  

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {e.preventDefault();
        const error = validateForm();
        if (error) { seterroMessagem(true); return }
        seterroMessagem(false)

        const newBook: Information = {
                title: titleBook,
                authorBook: authorBook,
                description: descriptionbook,
                image: ImagemBook.src,
                categoria: selectedCategorias,
        };
        setSuccessMessage("Novo livro adicionado com sucesso!")
        console.log(newBook)
        setAddbook(false);
    }

    return (
        <div className="Card_opacity">
            <div className="Card_add_book">
                <button className="Button" onClick={ onClose }>
                    <span className="X"></span>
                    <span className="Y"></span>
                    <div className="close">Close</div>
                </button>
                    <form className="Form_card" action="" onSubmit={ handleSubmit }>
                            <div className="Card_imagem">
                                <Image className="Imagem_book" src={ ImagemBook }alt="Book"/>
                                <button type="button" ><RiDeleteBin6Fill></RiDeleteBin6Fill></button>
                            </div>                            
                            <div className="input-group">
                                <input className={`input-text ${!titleBook.trim() && "error"}`} name="text" type="text" placeholder="Name Book" autoComplete="off" onChange={(e) => settitleBook(e.target.value)}/>
                                <label className="input-text-label" htmlFor="text">Name Book</label>
                            </div> 
                            <div className="seletc_catery">
                                <p id="Text_catery">Cateorias do Livro</p>
                                    <ul>
                                        {categorias.map((categoria, index) => (
                                            <li className={ selectedCategorias.includes(categoria) ? " selected ": " " } key={index} 
                                            onClick={() => handleCategoriaClick( categoria )}>{ categoria }</li>    
                                        ))}
                                    </ul>
                            </div>
                            <div className="input-group">
                                <input className={`input-text ${!authorBook.trim() && "error"}`} name="text" type="text" placeholder="Author Book" onChange={(e) => setAuthorBook(e.target.value)}/>
                                <label className="input-text-label" htmlFor="text">Author Book</label>   
                            </div>
                            <div className="custom-box">
                            <label className="input-text-discretion">Discretion Book:</label>
                                    <textarea className="Box_discretion" id="story"  onChange={(e) => setDescriptionbook(e.target.value)}></textarea>
                                    <span className="corner top-left"></span><span className="corner top-right"></span>
                                    <span className="corner bottom-left"></span><span className="corner bottom-right"></span>
                            </div>
                                <button className="Button_submit" type="submit">Add Book</button>
                    </form>
                    {erroMessage && (<div className="erro_messagem">ERRRROOOO</div>)}
                    {successMessage && (<div className="success_messagem"></div>)}
            </div>
        </div>  
    )
}