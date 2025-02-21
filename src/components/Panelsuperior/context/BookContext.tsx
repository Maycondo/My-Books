import { createContext, useContext, useState, ReactNode } from "react";

interface Information {
    title: string;
    authorBook: string;
    description: string;
    imageUrl: string | null;
    categoria: string[];
}

interface BookContextType {
    bookData: Information;
    setBookData: React.Dispatch<React.SetStateAction<Information>>;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
    const [bookData, setBookData] = useState<Information>({
        title: "",
        authorBook: "",
        description: "",
        imageUrl: null,
        categoria: [],
    });

    return <BookContext.Provider value={{ bookData, setBookData }}>{children}</BookContext.Provider>;
};

export const useBook = () => {
    const context = useContext(BookContext);
    if (!context) throw new Error("useBook deve ser usado dentro de um BookProvider");
    return context;
};
