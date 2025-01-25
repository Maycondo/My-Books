/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import ImagemBook from "@/Image/livros.jpeg"
import "./Style/style_1.css"
import "./Style/style_2.css"
import { JSX, useState } from "react";


type Categoria = string[];

interface Information {
    title: string;
    description: string;
    image: string;
    categoria: Categoria;
}

interface CardBookAddProps { 
    setAddbook: React.Dispatch<React.SetStateAction<boolean>>;  
    onClose: () => void; 
}

const categorias: Categoria = [
    "Ação",
    "Fantasia",
    "Aventura",
    "Romance",
    "Terror",
    "Biografia",
    "Comédia",
    "Drama",
    "Ficção",
    "Infantil",
    "Mistério",
    "Thriller",
    "Vida Real",
    "Ficção Científica",
    "Documentário",
];



export default function CardBookAdd ({ setAddbook, onClose }: CardBookAddProps): JSX.Element | null {
    if(!setAddbook) return null;
    
    const [titlebook, setTitlebook] = useState<string>("")
    const [descriptionbook, setDescriptionbook] = useState<string>("");
    const [selectedCategorias, setSelectedCategoria] = useState<Categoria>([]);

    const handleCategoriaClick = (categoria: string) => {
            setSelectedCategoria((prev) => 
            prev.includes(categoria)
                 ? prev.filter((cat) => cat !== categoria)
                    : [...prev, categoria]
            );
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newBook: Information = {
            title: titlebook,
            description: descriptionbook,
            image: ImagemBook.src,
            categoria: selectedCategorias,
        };
        alert("Novo Livro Adicionado:");
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
                    <form className="Form_card" action="" onSubmit={handleSubmit}>
                            <div className="Card_imagem">
                                <Image className="Imagem_book" src={ ImagemBook }alt="Book"/>
                            </div>                            
                            <div className="input-group">
                                <input className="input-text" name="text" type="text" placeholder="Name Book" autoComplete="off" onChange={(e) => setTitlebook(e.target.value)}/>
                                <label className="input-text-label" htmlFor="text">Name Book</label>
                            </div> 
                            <div className="seletc_catery">
                                <p id="Text_catery">Cateorias do Livro</p>
                                    <ul>
                                        {categorias.map((categoria, index) => (
                                            <li className={ selectedCategorias.includes(categoria) ? " selected ": "     " } key={index} 
                                            onClick={() => handleCategoriaClick( categoria )}>{ categoria }</li>
                                        ))}
                                    </ul>
                            </div>
                            <div className="input-group">
                                <input className="input-text" name="text" type="text" placeholder="Author Book"/>
                                <label className="input-text-label" htmlFor="text">Author Book</label>   
                            </div>
                            <div className="input-discretion">
                                    <textarea className="Box_discretion" id="story" onChange={(e) => setDescriptionbook(e.target.value)}></textarea>
                                    <label className="input-text-discretion">Discretion Book:</label>
                            </div>
                                <button className="Button" type="submit">Add Book</button>
                    </form>
            </div>
        </div>
    )
}