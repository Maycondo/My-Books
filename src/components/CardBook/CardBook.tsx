import "./style.css";


interface CardBookProps {
    isOpen: boolean;
    onClose: () => void;
    book: {
        id: string;
        title: string;
        authorBook: string;
        description: string;
        imageUrl: string;
        categoria: string[];
    }
}

export default function CardBook({ isOpen, onClose, book }: CardBookProps) {
    if (!isOpen) return null;

    return (
        <div className="card-book">
                <button className="Button_1" onClick={onClose}>
                    <span className="X_1"></span>
                    <span className="Y_1"></span>
                    <div className="close_1">Close</div>
                </button>
            <div className="card-book__container">

            </div>
        </div>
    )
}