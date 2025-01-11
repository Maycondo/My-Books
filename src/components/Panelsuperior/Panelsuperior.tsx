import "./style.css"

import { ImBooks } from "react-icons/im";


export default function Panelsuperior() {


    return (
        <div className="Container">
            <nav>
                    <h1 className="NameProject"><ImBooks/>My Books</h1>    
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}