import { createContext, useContext, useState, ReactNode } from "react";
import { useEffect } from "react";
import axios from "axios";

// Definindo o tipo do livro
export type Book = {
  id: string;
  title: string;
  authorBook: string;
  description: string;
  imageUrl: string;
  categoria: string[];
  rating: number;
};

// Definindo o tipo do contexto
type BookContextType = {
  bookData: Book[];
  setBookData: React.Dispatch<React.SetStateAction<Book[]>>;
  removeBook: (id: string) => void;
  addBook: (newBook: Book) => void;
  updateBookdescription: (updateBookdescription: Book) => void;
};

const BookContext = createContext<BookContextType | undefined>(undefined);                                                                                                                                                                                                              

export const BookProvider = ({ children }: { children: ReactNode }) => {

  const [bookData, setBookData] = useState<Book[]>([]); 

  // Buscar livros da API ao montar o componente
  useEffect(() => {
    axios.get("https://books-api-wt3h.onrender.com/Books")                                                                                                                                                                                                                                              
      .then((res) => setBookData(res.data))
      .catch((err) => console.error("Erro ao buscar livros:", err));
  }, []);


  // Função para remover um livro pelo ID
  const removeBook = (id: string) => {
    axios.delete(`https://books-api-wt3h.onrender.com/delete${id}`)
      .then(() => {
        setBookData((prevBooks) => prevBooks.filter((book) => book.id !== id));
      })
      .catch((err) => console.error("Erro ao remover livro:", err,console.log(`Erro ao remover livro: ${id}`)));
  };

  // Função para adicionar um livro
  const addBook = (newBook: Book) => {
    axios.post("https://books-api-wt3h.onrender.com/Bookadd", newBook)
      .then((res) => {
        setBookData((prevBooks) => [...prevBooks, res.data]);
      })
      .catch((err) => console.error("Erro ao adicionar livro:", err, console.log(`Erro ao adicionar livro: ${newBook.title}`)));
  }

  // Função para atualizar discrição um livro
  const updateBookdescription = (updatedBook: Book) => {
    axios.put(`https://books-api-wt3h.onrender.com/update${updatedBook.id}`, updatedBook)
      .then((res) => {
        setBookData((prevBooks) =>
          prevBooks.map((book) => (book.id === updatedBook.id ? res.data : book))
        );
      })
      .catch((err) => console.error("Erro ao atualizar livro:", err, console.log(`Erro ao atualizar livro: ${updatedBook.title}`)));
  }

  return (
    <BookContext.Provider value={{ bookData, setBookData, removeBook, addBook, updateBookdescription}}>
      {children}
    </BookContext.Provider>
  );
};

// Hook personalizado para usar o contexto do livro
export const useBook = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBook deve ser usado dentro de um BookProvider");
  }
  return context;
};
