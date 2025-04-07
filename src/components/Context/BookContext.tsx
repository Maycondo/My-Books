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
