import Image from "next/image";
import PerfilImagem from "@/Image/ImagemPerfil.jpeg";
import PanelBook from "../PanelBooks/PanelBooks";
import { ImBooks } from "react-icons/im";
import { JSX, useState } from "react";
import "./style.css";


const categorias = {
    Livros: "Livros",
    Favoritos: "Favoritos"
};


export default function Panelhome(): JSX.Element {
    const [activeCategory, setActiveCategory] = useState<string>("Livros"); 


    const renderPanelContent = () => {
        switch (activeCategory) {
            case "Livros":
                return <PanelBook book={[]}/>;
            case "Favoritos":
                return <div>⭐ Favoritos</div>;
            default:
                return <div>Sem categorias selecionadas</div>;
        }
    };

    return (
        <div className="Container">
            <nav>
                <h1><ImBooks /> My Books</h1>
                <ul className="painel_navegion">
                    {Object.keys(categorias).map((categoria) => (
                        <li key={categoria} className={activeCategory === categoria ? "categoria_selected" : ""} onClick={() => setActiveCategory(categoria)}>
                            {categorias[categoria as keyof typeof categorias]}
                        </li>
                    ))}
                    <Image className="Imagem_perfil" src={PerfilImagem} alt="Imagem de perfil" />
                </ul>
            </nav> 
            <div className="panel-content">
                {renderPanelContent()}
            </div>
        </div>
    );
}
