import { useEffect , useState } from "react";
import "./style.css"

import { BiSolidImageAdd } from "react-icons/bi";
export default function CardBookAdd ({ setAddbook , onClose }) {
    if(!setAddbook) return null;



    return (
        <div className="Card_opacity">
            <div className="Card_add_book">
                <button class="Button" onClick={ onClose }>
                    <span class="X"></span>
                    <span class="Y"></span>
                    <div class="close">Close</div>
                </button>
                   <img src="" alt={BiSolidImageAdd} />
                    <h2>Adicionar imagem do livro</h2>
            </div>
        </div>
    )
}