/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import "./style.css";
import { useEffect, useState } from "react";
import { Book } from "../context/BookContext";
import { useBook } from "../context/BookContext";
import CardBook from "../CardBook/CardBook";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"; 

interface PanelBookProps {
  onFavoritesUpdate: (favorites: Record<string, Book>) => void;
}

export default function PanelBook({ onFavoritesUpdate }: PanelBookProps) {
  const [isCardBookOpen, setIsCardBookOpen] = useState<boolean>(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [favorites, setFavorites] = useState<Record<string, Book>>({});
  const { bookData } = useBook();


  useEffect(() => {
     try {
      const storedFavorites = localStorage.getItem("@favorites");
      if(storedFavorites) {
        const parsedFavorites = JSON.parse(storedFavorites);
        setFavorites(parsedFavorites);
        onFavoritesUpdate(parsedFavorites);
      }
     } catch (error) {
      console.error("Erro ao carregar favoritos:", error);
     }
  }, []);

  useEffect(() => {
    localStorage.setItem("@favorites", JSON.stringify(favorites));
    onFavoritesUpdate(favorites);
  }, [favorites]);

  const handleFavoriteClick = (book: Book) => {
    setFavorites(prev => {
      const isFavorite = prev[book.id] !== undefined; 
      const updatedFavorites = { ...prev };
  
      if (isFavorite) {
        delete updatedFavorites[book.id];
      } else {
        updatedFavorites[book.id] = book;
      }
      return updatedFavorites;
    });
  };

  return (
    <>
      {bookData.length === 0 ? (
        <p>Carregando...</p>
      ) : (bookData.map((book) => (
        <div key={book.id} className="Card_Book">
          <button className="save-book-favorite" onClick={() => handleFavoriteClick(book)}>{favorites[book.id] ? <MdFavorite /> : <MdFavoriteBorder />}</button>
          <div className="Card_Book_Item">
            <div className="Card_Book_Imagem">
              <img src={book.imageUrl || ""} alt={book.title || "Capa do livro"} loading="lazy" />
            </div>
            <div className="Card_Book_Titulo">
              <h2>{book.title}</h2>
            </div>
            <div className="Card_Book_Descricao">
              <p>{book.description}</p>
            </div>
            <div className="Card_Book_Button">
              <button className="readmore-btn" onClick={() => { setSelectedBook(book); setIsCardBookOpen(true); }} >
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
        </div>
      ))
      )}

      {isCardBookOpen && selectedBook && (
        <CardBook
          isOpen={isCardBookOpen}
          onClose={() => setIsCardBookOpen(false)}
          book={selectedBook} 
        />
      )}
    </>
  );
}
