
import imageUrl from "@/Image/livros.jpeg";
import "./style.css";
import Image from "next/image";  

interface CardPanelProps {
  title: string;
  description: string;


}

export default function PanelBook({ title, description, }: CardPanelProps) {
  return (
        <div className="Painel_Books">
          <div className="Card_Book">
              <div className="Card_Book_Imagem">
                <Image className="Imagem_Book" src={imageUrl} alt="Imagem de perfil"/>  
              </div>
              <div className="Card_Book_Titulo">
                <h2>{title}</h2>
              </div>
              <div className="Card_Book_Descricao">
                <p>{description}</p>
              </div>
          </div>
        </div>
  );
}
