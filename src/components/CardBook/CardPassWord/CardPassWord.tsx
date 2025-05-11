import { useState } from "react";
import "./cardPassWord.css";
import { PASSWORD_ADMIN } from "../../../app/constante";
interface CardPasswordProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Cardpassword({ isOpen, onClose }: CardPasswordProps) {
    const [inputPassword, setInputPassword] = useState("");
   if (!isOpen) return null;

    const handlePasswordChange = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputPassword === PASSWORD_ADMIN) {
            alert("Password is correct");
        } else {
            alert("Password is incorrect");
        }
    }

    return (
        <>
            <div className="painel_password">
                <div className="cardpassword">
                    <div className="card_add_book">
                        <button className="Button_" onClick={onClose}>
                            <span className="X"></span>
                            <span className="Y"></span>
                            <div className="close">Close</div>
                        </button>
                    </div>
                    <form onSubmit={handlePasswordChange}>
                        <h1>Enter the password</h1>
                        <input type="password" placeholder="Password admin" 
                        onChange={(e) => setInputPassword(e.target.value)}
                        />
                        <button className="btn_password">Confirm</button>
                    </form>
                </div>
            </div>
        </>
    )
}