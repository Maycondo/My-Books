
import "./style_2.css";
import { FiList } from "react-icons/fi";
import { MdFormatColorText } from "react-icons/md";
import { PiTextBBold } from "react-icons/pi";
import { MdOutlineFormatListNumbered } from "react-icons/md";


interface ToolbarProps {
    setDescription: (text: (prev: string) => string) => void
}

export default function Toolbar ({ setDescription }: ToolbarProps ) {

    const handleButtonClick = (format: string) => {
        setDescription((prev: string) => {
            if (format === "list") return prev + "\n\n🞄 Item\n🞄 Item\n🞄 Item";
            if (format === "numbered-list") return prev + "\n\n1. Item \n2. Item \n3. Item";
            if (format === "bold") return prev + "<b>Texto em negrito</b>";
            if (format === "italic") return prev + "<i>Texto em itálico</i>";
            return prev;
        })
    };

    return (
        <div className="toolbar-container">
            <div className="toolbar">
                <button onClick={() => handleButtonClick("list")}><FiList></FiList></button>
                <button onClick={() => handleButtonClick("numbered-list")}><MdOutlineFormatListNumbered></MdOutlineFormatListNumbered></button>
                <button onClick={() => handleButtonClick("bold")}><MdFormatColorText></MdFormatColorText></button>
                <button onClick={() => handleButtonClick("italic")}><PiTextBBold></PiTextBBold></button>
            </div>
        </div>
    )

}