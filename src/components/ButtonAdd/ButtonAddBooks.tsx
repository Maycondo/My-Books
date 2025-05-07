import { useState } from "react";

import CarsPassword from "../CardBook/CardPassWord/CardPassWord";
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
        <CarsPassword
          isOpen={isAddingBook} 
          onClose={() => toggleAddBook(false)}
        />
      )}
    </>
  );
}
