import { useEffect, useState } from "react";
import "./style.css"



export default function CardBookAdd ({ setAddbook, onClose }) {
    if(!setAddbook) return null;

    return (
        <div className="Card_opacity">
            <div className="Card_add_book">
                <button class="Button" onClick={ onClose }>
                    <span class="X"></span>
                    <span class="Y"></span>
                    <div class="close">Close</div>
                </button>

                <h1>TESTANDO</h1>
            </div>
        </div>
    )
}