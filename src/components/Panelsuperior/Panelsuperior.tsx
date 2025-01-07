import "./style.css"

import { IoBookSharp } from "react-icons/io5";


export default function Panelsuperior() {


    return (
        <div className="Container">
            <nav>
                    <h1><IoBookSharp /> My Books</h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}