import { createContext, useContext, useState, ReactNode } from "react";

export type Book = {
  id: string;
  title: string;
  authorBook: string;
  description: string;
  imageUrl: string;
  categoria: string[];
  rating: number;
  createdAt: string;
};

type BookContextType = {
  bookData: Book[];
  setBookData: React.Dispatch<React.SetStateAction<Book[]>>;
};

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [bookData, setBookData] = useState<Book[]>([
    {
      id: "1",
      title: "O Senhor dos Anéis",
      authorBook: "J.R.R. Tolkien",
      description: "Uma épica história de fantasia.",
      imageUrl: "https://example.com/image1.jpg",
      categoria: ["Fantasia", "Aventura"],
      rating: 4.9,
      createdAt: "2023-10-01",
    },
    {
      id: "2",
      title: "1984",
      authorBook: "George Orwell",
      description: "Uma distopia sobre vigilância e controle.",
      imageUrl: "https://example.com/1984.jpg",
      categoria: ["Ficção", "Distopia"],
      rating: 4.8,
      createdAt: "2023-10-02",
    },
    {
      id: "3",
      title: "O Hobbit",
      authorBook: "J.R.R. Tolkien",
      description: "A jornada de Bilbo Bolseiro.",
      imageUrl: "https://example.com/o-hobbit.jpg",
      categoria: ["Fantasia", "Aventura"],
      rating: 4.7,
      createdAt: "2023-10-03",
    }

    // Adicione mais livros conforme necessário
  ]); 

  return (
    <BookContext.Provider value={{ bookData, setBookData }}>
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
