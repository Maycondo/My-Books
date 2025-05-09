import "./cardPassWord.css";

interface CardPasswordProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Cardpassword({ isOpen, onClose }: CardPasswordProps) {
   if (!isOpen) return null;


    return (
        <>
            <div className="painel_password">
                <div className="cardpassword">
                    <div className="card_add_book">
                        <button className="Button" onClick={onClose}>
                            <span className="X"></span>
                            <span className="Y"></span>
                            <div className="close">Close</div>
                        </button>
                    </div>
                    <h1>Password admin.</h1>
                    <input type="text" />
                </div>
            </div>
        </>
    )
}