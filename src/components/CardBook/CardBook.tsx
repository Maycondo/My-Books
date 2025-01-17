
import Image from "next/image";
import ImagemBook from "@/Image/livros.jpeg"
import "./style.css"
import { JSX } from "react";


type Categoria = Array<string>;


const categorias: Categoria = [
    "Ação",
    "Aventura",
    "Biografia",
    "Comédia",
    "Documentário",
    "Drama",
    "Ficção Científica",
    "Ficção",
    "Infantil",
    "Mistério",
    "Romance",
    "Terror",
    "Thriller",
    "Vida Real"
]

interface CardBookAddProps { setAddbook: boolean;  onClose: () => void; }

export default function CardBookAdd ({ setAddbook, onClose }: CardBookAddProps): JSX.Element | null {
    if(!setAddbook) return null;



    return (
        <div className="Card_opacity">
            <div className="Card_add_book">
                <button className="Button" onClick={ onClose }>
                    <span className="X"></span>
                    <span className="Y"></span>
                    <div className="close">Close</div>
                </button>
                    <form className="Form_card" action="">
                        <div className="Card_Imagem">
                            <Image className="Imagem_book" src={ImagemBook}alt="Book"/>
                        </div>                            
                                <div className="input-group">
                                    <input className="input-text" name="text" type="text" placeholder="Title Book" autoComplete="off"/>
                                    <label className="input-text-label" htmlFor="text">Title Book</label>
                                </div> 
                                <div className="seletc_catery">
                                    <ul>
                                        {categorias.map((categoria, index) => (
                                            <li key={index}>{categoria}</li>
                                        ))}
                                    </ul>
                                </div>

                    </form>
            </div>
        </div>
    )
}