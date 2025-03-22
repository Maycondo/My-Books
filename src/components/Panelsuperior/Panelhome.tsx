import { JSX, useState } from "react";
import Image from "next/image";
import PerfilImagem from "@/Image/ImagemPerfil.jpeg";
import PanelBook from "../PanelBooks/PanelBooks";
import { ImBooks } from "react-icons/im";
import { BookProvider } from "../context/BookContext";
import "./style.css";

const categorias = ["Books", "Favorites"] as const;

export default function Panelhome() {
    const [activeCategory, setActiveCategory] = useState<(typeof categorias)[number]>("Books");

    const panelContent: Record<(typeof categorias)[number], JSX.Element> = {
        Books: <PanelBook />,
        Favorites: <div>⭐ Favoritos</div>,
    };

    return (
        <BookProvider>
            <div className="Container">
                <nav>
                    <h1><ImBooks /> My Books</h1>
                    <ul className="painel_navegion">
                        {categorias.map((categoria) => (
                            <li key={categoria}>
                                <button className={activeCategory === categoria ? "categoria_selected" : "Buttons_panel "}  onClick={() => setActiveCategory(categoria)}>
                                    {categoria}
                                </button>
                            </li>
                        ))}
                        <Image className="Imagem_perfil" src={PerfilImagem} alt="Perfil do usuário" width={50} height={50} />
                    </ul>
                </nav>
                <div className="panel-content">
                    {panelContent[activeCategory] ?? 
                    <div>Sem categorias selecionadas</div>}
                </div>
            </div>
        </BookProvider>
    );
}
