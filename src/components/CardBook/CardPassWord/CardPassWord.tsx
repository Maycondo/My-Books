import { useState } from "react";
import "./cardPassWord.css";
import { PASSWORD_ADMIN } from "../../../app/password";




interface CardPasswordProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Cardpassword({ isOpen, onClose }: CardPasswordProps) {
    const [inputPassword, setInputPassword] = useState("");
   if (!isOpen) return null;


   const valitePassword = (password: string) => {
        if (password === PASSWORD_ADMIN) {
            alert("Password is correct");
            onClose();

        } else if (password === "") {
            alert("Password required");
        } else {
            alert("Password is incorrect");
        }
   }

    const handlePasswordChange = (e: React.FormEvent) => {
        e.preventDefault();
        valitePassword(inputPassword);
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
                    <form className="Password_admin" onSubmit={handlePasswordChange}>   
                        <h1>Enter the password</h1>
                        <input className="input_password" type="password" placeholder="Password admin" 
                        onChange={(e) => setInputPassword(e.target.value)}/>
                        {inputPassword !== PASSWORD_ADMIN && <p className="error_password">Password is incorrect</p>}
                        <button className="btn_password">Confirm</button>
                    </form>
                </div>
            </div>
        </>
    )
}   