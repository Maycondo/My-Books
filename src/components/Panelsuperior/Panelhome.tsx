import { JSX, useState, useEffect } from "react";
import Image from "next/image";
import PerfilImagem from "@/Image/ImagemPerfil.jpeg";
import PanelBook from "../PanelBooks/PanelBooks";
import FavoritesBooks from "../PanelBooks/FavoritesBooks";
import { ImBooks } from "react-icons/im";
import { BookProvider } from "../Context/BookContext";
import "./style.css";
import "./ButtonToggle.css";

const categorias = ["Books", "Favorites"] as const;

export default function Panelhome() {
    const [activeCategory, setActiveCategory] = useState<(typeof categorias)[number]>("Books");
    const [favorites, setFavorites] = useState({});

    const panelContent: Record<(typeof categorias)[number], JSX.Element> = {
        Books: <PanelBook onFavoritesUpdate={setFavorites} favorites={favorites}/>,
        Favorites: <FavoritesBooks favorites={favorites} />,
    };

    useEffect(() => {
        const storedFavorites = localStorage.getItem("@favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("@favorites", JSON.stringify(favorites));
    }, [favorites]);

    return (
        <BookProvider>
            <div className="Container">
                <nav>
                    <div className="Name-project-icone">
                        <ImBooks className="Icone" />
                        <h1>My Books</h1>
                    </div>
                    <label className="burger" htmlFor="burger">
                        <input type="checkbox" id="burger" />
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    <div className="painel_navegion">
                        <ul>
                            {categorias.map((categoria) => (
                                <li key={categoria}>
                                    <button className={activeCategory === categoria ? "categoria_selected" : "Buttons_panel "}  onClick={() => setActiveCategory(categoria)}>
                                        {categoria}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <Image className="Imagem_perfil" src={PerfilImagem} alt="Perfil do usuário" width={50} height={50} />
                    </div>
                </nav>
                <div className="panel-content">
                    {panelContent[activeCategory] ?? 
                    <div>Sem categorias selecionadas</div>}
                </div>
            </div>
        </BookProvider>
    );
}
