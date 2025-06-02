import { createContext, useContext, useState, ReactNode } from "react";
import { useEffect } from "react";
import axios from "axios";

export type Book = {
  id: string;
  title: string;
  authorBook: string;
  description: string;
  imageUrl: string;
  categoria: string[];
  rating: number;
};

type BookContextType = {
  bookData: Book[];
  setBookData: React.Dispatch<React.SetStateAction<Book[]>>;
  removeBook: (id: string) => void;
  addBook: (newBook: Book) => void;
};

const BookContext = createContext<BookContextType | undefined>(undefined);                                                                                                                                                                                                              

export const BookProvider = ({ children }: { children: ReactNode }) => {

  const [bookData, setBookData] = useState<Book[]>([]); 

  useEffect(() => {
    axios.get("http://localhost:5000/Books")                                                                                                                                                                                                                                              
      .then((res) => setBookData(res.data))
      .catch((err) => console.error("Erro ao buscar livros:", err));
  }, []);


  // Função para remover um livro pelo ID
  const removeBook = (id: string) => {
    axios.delete(`http://localhost:5000/delete${id}`)
      .then(() => {
        setBookData((prevBooks) => prevBooks.filter((book) => book.id !== id));
      })
      .catch((err) => console.error("Erro ao remover livro:", err,console.log(`Erro ao remover livro: ${id}`)));
  };

  // Função para adicionar um livro
  const addBook = (newBook: Book) => {
    axios.post("http://localhost:5000/Bookadd", newBook)
      .then((res) => {
        setBookData((prevBooks) => [...prevBooks, res.data]);
      })
      .catch((err) => console.error("Erro ao adicionar livro:", err, console.log(`Erro ao adicionar livro: ${newBook.title}`)));
  }


  return (
    <BookContext.Provider value={{ bookData, setBookData, removeBook, addBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBook deve ser usado dentro de um BookProvider");
  }
  return context;
};
