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
      authorBook: "J. R. R. Tolkien",
      description:"O Senhor dos Anéis é um romance de fantasia criado pelo escritor, professor e filólogo britânico J.R.R. Tolkien.",
      imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
      categoria: ["Fantasia"],
      rating: 5,
      createdAt: "2022-01-01",
    },

    {
      id: "2",
      title: "Harry Potter e a Pedra Filosofal",
      authorBook: "J. K. Rowling",
      description:"Harry Potter e a Pedra Filosofal é o primeiro livro dos sete volumes da série de fantasia Harry Potter, tanto em termos cronológicos como em ordem de publicação, da autora inglesa J. K. Rowling.",
      imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
      categoria: ["Fantasia", "Aventura", "Drama"],
      rating: 4.5,
      createdAt: "2022-01-01",
    },

    {
      id: "3",
      title: "O Pequeno Príncipe",
      authorBook: "Antoine de Saint-Exupéry",
      description:"O Pequeno Príncipe é uma obra do escritor e aviador francês Antoine de Saint-Exupéry.",
      imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
      categoria: ["Ficção", "Aventura", "Fantasia"],
      rating: 4.5,
      createdAt: "2022-01-01",
    },

    {
      id: "4",
      title: "Dom Quixote",
      authorBook: "Miguel de Cervantes",
      description
      :"Dom Quixote de la Mancha é um livro escrito pelo espanhol Miguel de Cervantes.",
      imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
      categoria: ["Romance", "Aventura", "Comédia"],
      rating: 4.5,
      createdAt: "2022-01-01",
    },

    {
      id: "5",
      title: "Cem Anos de Solidão",
      authorBook: "Gabriel Garcia Marquez",
      description:"Cem Anos de Solidão é um romance do escritor colombiano Gabriel García Márquez.",
      imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
      categoria: ["Romance", "Ficção", "Drama"],
      rating: 4.5,
      createdAt: "2022-01-01",
    },

    {
      id: "6",
      title: "A Montanha Mágica",
      authorBook: "Thomas Mann",
      description:"A Montanha Mágica é um romance do escritor alemão Thomas Mann.",
      imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX331_BO1,204,203,200_.jpg",
      categoria: ["Romance", "Ficção", "Drama"],
      rating: 4.5,
      createdAt: "2022-01-01",
    }

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
