import { useState } from "react";

import CardPassword from "../CardPassWord/CardPassWord";
import CardBookAdd from "../ContainerAddBook/ConteinerAddBook";
import { PASSWORD_ADMIN } from "../../app/password";
import "./style.css";

export default function AddBooks() {
  const [isAddingBook, setIsAddingBook] = useState<boolean>(false);
  const [inputPassword, setInputPassword] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const isAuthorized = inputPassword === PASSWORD_ADMIN;
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
        isAuthorized ? (
          <CardBookAdd  
            isOpen={isAddingBook}
            onClose={() => {
              toggleAddBook(false);
              setSubmitted(false);
              setInputPassword("");
            }}
          />
        ) : (
          <CardPassword
              isOpen={isAddingBook}
              onClose={() => {
                toggleAddBook(false);
                setSubmitted(false);
                setInputPassword("");

              } }
              submitted={submitted}
              setSubmitted={setSubmitted}
              inputPassword={inputPassword}
              setInputPassword={setInputPassword}
              passwordAdmin={PASSWORD_ADMIN} onSuccess={function (): void {
                throw new Error("Function not implemented.");
              } }          />
        )
      )}

    </>
  );
}
