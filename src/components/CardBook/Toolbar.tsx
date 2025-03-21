
import "./style_2.css";
import { FiList } from "react-icons/fi";
import { MdFormatColorText } from "react-icons/md";
import { PiTextBBold } from "react-icons/pi";
import { BsTypeH1, BsTypeH2, BsTypeH3 } from "react-icons/bs";
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
                if (format === "h1") return prev + "\n\n <h1>Título H1</h1>";
                if (format === "h2") return prev + "\n\n<h2>Título H1</h2>";
                if (format === "h3") return prev + "\n\n<h3>Título H1</h3>";
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
                <button onClick={() => handleButtonClick("h1")}><BsTypeH1 /></button>
                <button onClick={() => handleButtonClick("h2")}><BsTypeH2 /></button>
                <button onClick={() => handleButtonClick("h3")}><BsTypeH3 /></button>
            </div>
        </div>
    )

}