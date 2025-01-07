"use client";

import { useState , useEffect } from "react";
import Panelsuperior from "@/components/Panelsuperior/Panelsuperior";
import Loader from "@/components/Loader/Loader"

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
    <div> 
        <Panelsuperior />
    </div>
  );
}
