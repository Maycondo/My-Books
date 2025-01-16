import { useEffect , useState } from "react";
import ImagemBook from "@/Image/livros.jpeg"
import "./style.css"




export default function CardBookAdd ({ setAddbook , onClose }) {
    if(!setAddbook) return null;


    return (
        <div className="Card_opacity">
            <div className="Card_add_book">
                <button className="Button" onClick={ onClose }>
                    <span className="X"></span>
                    <span className="Y"></span>
                    <div className="close">Close</div>
                </button>
                    <form action="">
                        <img className="Imagem_add" src={ ImagemBook }alt="Book"/> 
                                <div class="input-group">
                                    <input class="input-text" name="text" type="text" placeholder="Title Book" autocomplete="off"/>
                                    <label class="input-text-label" for="text">Title Book</label>
                                </div> 
                    </form>
            </div>
        </div>
    )
}