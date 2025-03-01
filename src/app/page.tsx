"use client";

import { useState , useEffect } from "react";
import Loader from "@/components/Loader/Loader"
import { BookProvider } from "@/components/context/BookContext";
import Panelsuperior from "@/components/Panelsuperior/Panelhome";
import ButtomAddBooks from "@/components/ButtonAdd/ButtonAddBooks";



const useLoader = (display: number) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), display)
        return () => clearTimeout(timer)
    }, [display])

    return loading
}

export default function Home() {
  const loading = useLoader(10000)

  if (loading) {
    return <Loader />
  }

  return (
    <BookProvider>
        <div className="My_Book"> 
            <Panelsuperior />
            <ButtomAddBooks />
      </div>
    </BookProvider>
  );
}
