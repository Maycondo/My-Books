import Image from "next/image";  
import PerfilImagem from "@/Image/ImagemPerfil.jpeg";
import PanelBook from "../PanelBooks/PanelBooks"; 
import "./style.css";  

import { ImBooks } from "react-icons/im";
import { useState } from "react";

type Categorias = {
    Livros: string;
    Favoritos: string;
};

const categorias: Categorias = {
    Livros: "Livros",
    Favoritos: "Favoritos"  
};

export default function Panelhome() {
    const [activeName, setActiveName] = useState<string>("Livros");

    const renderPanelContent = () => {
        switch (activeName) {
            case "Livros":
                return <PanelBook title={""} description={""} imageUrl={""} lastUpdated={""}/>
            case "Favoritos":
                return <div>⭐ Favoritos</div>;
            default:
                return <div>Sem categorias selecionadas</div>;
        }
    };

    return (  
        <div className="Container">  
            <nav>  
                <h1 className="NameProject"><ImBooks/> My Books</h1>        
                <ul>
                    {Object.keys(categorias).map((categoria) => (
                        <li  key={categoria} className={activeName === categoria ? "categoria_selected" : ""} onClick={() => setActiveName(categoria)} >
                            {categorias[categoria as keyof Categorias]}
                        </li>
                    ))}
                </ul>  
                <Image className="Imagem_perfil" src={PerfilImagem} alt="Imagem de perfil"/>  
            </nav>  
            <div className="panel-content">
                {renderPanelContent()}
            </div>
        </div>  
    );  
}
