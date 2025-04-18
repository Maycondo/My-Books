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
    const [isOpen, setIsOpen] = useState(false);
    const [favorites, setFavorites] = useState({});

    const panelContent: Record<(typeof categorias)[number], JSX.Element> = {
        Books: <PanelBook onFavoritesUpdate={setFavorites} favorites={favorites}/>,
        Favorites: <FavoritesBooks favorites={favorites} />,
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
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
                    <button className={isOpen ? "toggle_button_active" : "toggle_button"} onClick={ handleToggle }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className={isOpen ? "menu_selected_active" : "categoria_selected_close"}>
                        <div className="conteiner_bts">
                            {categorias.map((categoria) => (
                                    <button key={categoria} className={activeCategory === categoria ? "categoria_selected_active" : "categoria_selected_desative"}  onClick={() => {setActiveCategory(categoria)
                                    setIsOpen(false)
                                    }}>
                                        {categoria}
                                    </button>
                                ))}
                        </div>
                        <Image className="Imagem_perfil" src={PerfilImagem} alt="Perfil do usuário" />
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
