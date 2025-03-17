import { useState } from "react";
import "./style_2.css";
import { FiList } from "react-icons/fi";
import { BiText } from "react-icons/bi";
import { MdFormatColorText } from "react-icons/md";
import { PiTextBBold } from "react-icons/pi";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { BsTypeH1, BsTypeH2, BsTypeH3 } from "react-icons/bs";

const iconsMinContainer = [
    { id: "list", icon: FiList },
    { id: "numbered-list", icon: MdOutlineFormatListNumbered },
    { id: "italic", icon: BiText },
    { id: "color" , icon: MdFormatColorText },
    { id: "bold" , icon: PiTextBBold },
    { id: "h1" , icon: BsTypeH1 },
    { id: "h2" , icon: BsTypeH2 },
    { id: "h3" , icon: BsTypeH3 },
]


export default function Toolbar () {

    const [selectedOption, setSelectedOption] = useState<string | null>(null)

    const handleButtonClick = (id: string) => {
        setSelectedOption(id)
    };

    return (
        <div className="toolbar-container">
            <div className="toolbar">
                {iconsMinContainer.map((item, index) => (
                    <button key={index} className="Button_icones" onClick={() => handleButtonClick(item.id)}>
                        <item.icon />
                    </button>
                ))}
            </div>

            
            {selectedOption === "list" && <Btnlist />}
        </div>
    )


    function Btnlist() {
        console.log("BUTTON LIST")
        return (
          <ul className="list-dropdown">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
          </ul>
        )
    }
}