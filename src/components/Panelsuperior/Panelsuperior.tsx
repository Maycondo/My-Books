import Image from "next/image";  
import PerfilImagem from "@/Image/ImagemPerfil.jpeg";  
import "./style.css";  

import { ImBooks } from "react-icons/im";  

export default function Panelsuperior() {  
    return (  
        <div className="Container">  
            <nav>  
                <h1 className="NameProject"><ImBooks/> My Books</h1>    
                <ul>  
                    <li><a href="#perfil">Perfil</a></li>   
                    <li><a href="#livros">Livros</a></li>  
                    <li><a href="#favoritos">Favoritos</a></li>  
                </ul>  
                <Image className="Imagem_perfil" src={ PerfilImagem } alt="Imagem de perfil"/>  
            </nav>  
        </div>  
    );  
}
