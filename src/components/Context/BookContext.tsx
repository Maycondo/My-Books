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
};

const BookContext = createContext<BookContextType | undefined>(undefined);                                                                                                                                                                                                              

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const removeBook =  (id: string) => {
    setBookData((prevBooks) => prevBooks.filter((book) => book.id !== id));
  } 
  const [bookData, setBookData] = useState<Book[]>([]); 

  useEffect(() => {
    axios.get("http://localhost:8000/Books")                                                                                                                                                                                                                                              
      .then((res) => setBookData(res.data))
      .catch((err) => console.error("Erro ao buscar livros:", err));
  }, []);

  return (
    <BookContext.Provider value={{ bookData, setBookData, removeBook }}>
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
