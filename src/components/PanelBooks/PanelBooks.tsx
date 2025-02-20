/* eslint-disable @next/next/no-img-element */
import "./style.css";

interface Books {
  title: string;
  authorBook: string;
  description: string;
  imageUrl: string;
}

interface PanelBookProps {
  books: Books[];
}

export default function PanelBook({ books }: PanelBookProps) {
  return (
    <div className="Card_Book">
      {books.length > 0 ? (
        books.map((book, index) => (
          <div key={index} className="Card_Book_Item">
            <div className="Card_Book_Imagem">
              <img src={book.imageUrl} alt={book.title} />
            </div>
            <div className="Card_Book_Titulo">
              <h2>{book.title}</h2>
            </div>
            <div className="Card_Book_Descricao">
              <p>{book.description}</p>
            </div>
            <div className="Card_Book_Button">
              <button className="readmore-btn">
                <span className="book-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(26, 26, 26)" viewBox="0 0 126 75" className="book">
                    <rect strokeWidth="3" stroke="#fff" rx="7.5" height="70" width="121" y="2.5" x="2.5" />
                    <line strokeWidth="3" stroke="#fff" y2="75" x2="63.5" x1="63.5" />
                    <path strokeLinecap="round" strokeWidth="4" stroke="#fff" d="M25 20H50" />
                    <path strokeLinecap="round" strokeWidth="4" stroke="#fff" d="M101 20H76" />
                    <path strokeLinecap="round" strokeWidth="4" stroke="#fff" d="M16 30L50 30" />
                    <path strokeLinecap="round" strokeWidth="4" stroke="#fff" d="M110 30L76 30" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 65 75" className="book-page">
                    <path strokeLinecap="round" strokeWidth="4" stroke="#fff" d="M40 20H15" />
                    <path strokeLinecap="round" strokeWidth="4" stroke="#fff" d="M49 30L15 30" />
                    <path strokeWidth="3" stroke="#fff" d="M2.5 2.5H55C59.1421 2.5 62.5 5.85786 62.5 10V65C62.5 69.1421 59.1421 72.5 55 72.5H2.5V2.5Z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Nenhum livro disponível.</p>
      )}
    </div>
  );
}
