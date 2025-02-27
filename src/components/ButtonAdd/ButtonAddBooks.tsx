import { useState } from "react";
import CardBook from "../ContainerAddBook/ConteinerAddBook";
import "./style.css";

export default function AddBooks() {
  const [isAddingBook, setIsAddingBook] = useState<boolean>(false);

  const toggleAddBook = (state: boolean) => {
    setIsAddingBook(state);
  };

  return (
    <>
      <div className="Add-books">
        <button className="Btn" onClick={() => toggleAddBook(true)}>
          <div className="sign">+</div>
          <div className="text">Add Book</div>
        </button>
      </div>
      {isAddingBook && (
        <CardBook
          isOpen={isAddingBook} 
          onClose={() => toggleAddBook(false)} 
        />
      )}
    </>
  );
}
