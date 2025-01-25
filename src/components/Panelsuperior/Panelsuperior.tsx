import "./style.css"

import { ImBooks } from "react-icons/im";


export default function Panelsuperior() {


    return (        <div className="Container">
            <nav>
                    <h1 className="NameProject"><ImBooks/>My Books</h1>    
                <ul>
                    <li><a href="#perfil">Perfil</a></li>
                    <li><a href="#livros">Livros</a></li>
                    <li><a href="#favoritos">Favoritos</a></li>
                </ul>
            </nav>
        </div>
    )
}