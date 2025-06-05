/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from "react";
import { useBook } from "../Context/BookContext";
import ErroMessagem from "../MessagensBooks/ErroMessagemBook";
import SuccessMessagem from "../MessagensBooks/SuccessMessagem";
import { IoStarOutline, IoStar } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { v4 as uuidv4 } from "uuid";
import "./Style/style_1.css";
import "./Style/style_2.css";

const categorias = [
  "Ação", "Fantasia", "Aventura", "Romance", "Terror", "Biografia", "Comédia",
  "Drama", "Ficção", "Infantil", "Mistério", "Thriller", "Vida Real",
  "Científica", "Ficção Científica", "Documentário", "História", "Política",
] as const;

interface CardBookAddProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CardBookAdd({ isOpen, onClose }: CardBookAddProps) {
  if (!isOpen) return null;

  const { addBook } = useBook();

  const [erroMessage, setErroMessagem] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [URLimagem, setURLimagem] = useState<string | null>(null);

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    description: "",
    imageUrl: null as string | null,
    categories: [] as string[],
    rating: 0,
  });

  useEffect(() => {
    if (!isOpen) {
      setURLimagem(null);
    }
  }, [isOpen]);

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const fileUrl = URL.createObjectURL(e.target.files[0]);
      setNewBook((prev) => ({ ...prev, imageUrl: fileUrl }));
      setURLimagem(null);
    }
  };

  const handleCategoriaClick = (categoria: string) => {
    setNewBook((prev) => ({
      ...prev,
      categories: prev.categories.includes(categoria)
        ? prev.categories.filter((cat) => cat !== categoria)
        : [...prev.categories, categoria],
    }));
  };

  const handleImageUpload = () => {
    setURLimagem((prev) => (prev ? null : "upload"));
  };

  const validateForm = (): string | null => {
    const { title, author, description, categories } = newBook;
    if (!title.trim() || !author.trim() || !description.trim() || categories.length === 0) {
      return "Erro: Todos os campos são obrigatórios!";
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setErroMessagem(true);
      setTimeout(() => setErroMessagem(false), 3000);
      return;
    }

    const newBookData = {
      id: uuidv4(),
      title: newBook.title,
      author: newBook.author,
      authorBook: newBook.author,
      description: newBook.description,
      imageUrl: newBook.imageUrl ?? "",
      categories: newBook.categories,
      categoria: newBook.categories,
      rating: newBook.rating,
    };

    addBook(newBookData);
    setSuccessMessage("Livro adicionado com sucesso!");

    setNewBook({
      title: "",
      author: "",
      description: "",
      imageUrl: "",
      categories: [],
      rating: 0,
    });

    setTimeout(() => {
      onClose();
      setSuccessMessage(null);
    }, 3000);
  };

  return (
    <div className="card_opacity">
      <div className="card_add_book">
        <button className="Button" onClick={onClose}>
          <span className="X"></span>
          <span className="Y"></span>
          <div className="close">Close</div>
        </button>

        <form onSubmit={handleSubmit}>
          <div className="card_imagem">
            {newBook.imageUrl ? (
              <img className="imagem_book" src={newBook.imageUrl} alt="Book" />
            ) : (
              <p><FaBook /></p>
            )}

            {!newBook.imageUrl && (
              <button type="button" className="Button_add_imagem" onClick={handleImageUpload}>
                <span className="add_imagem">Add Cover</span>
              </button>
            )}

            {newBook.imageUrl && (
              <button
                type="button"
                className="Button_dele_imagem"
                onClick={() => setNewBook((prev) => ({ ...prev, imageUrl: null }))}
              >
                <ImBin />
              </button>
            )}

            {URLimagem === "upload" && (
              <div className="Content_upload">
                <div className="Contente-URl-image">
                  <label className="label-URL-imagem">Upload URL Image</label>
                  <input
                    id="url-image"
                    type="text"
                    placeholder="https://exemplo.com/imagem.jpg"
                    value={newBook.imageUrl ?? ""}
                    onChange={(e) => setNewBook((prev) => ({ ...prev, imageUrl: e.target.value }))}
                    className="input-URL-image"
                  />
                  <button
                    type="button"
                    className="Button_upload-URL"
                    onClick={() => {
                      if (!newBook.imageUrl || !isValidUrl(newBook.imageUrl)) {
                        alert("URL inválida.");
                        return;
                      }
                      setURLimagem(null);
                    }}
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            )}

            <div className="input-center">
              <div className="input-group">
                <input
                  className={`input-text ${!newBook.title.trim() ? "error_" : ""}`}
                  name="title"
                  type="text"
                  placeholder="Name Book"
                  autoComplete="off"
                  aria-label="Nome do Livro"
                  required
                  value={newBook.title}
                  onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                />
                <label className="input-text-label">Name Book</label>
              </div>

              <div className="input-group">
                <input
                  className={`input-text ${!newBook.author.trim() ? "error_" : ""}`}
                  name="author"
                  type="text"
                  placeholder="Author Book"
                  aria-label="Autor do Livro"
                  required
                  value={newBook.author}
                  onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                />
                <label className="input-text-label">Author Book</label>
              </div>
            </div>
          </div>

          <div className="card_discretion">
            <div className="seletc_catery">
              <p id="Text_catery">Select Categories</p>
              <ul>
                {categorias.map((categoria) => (
                  <li
                    key={categoria}
                    className={newBook.categories.includes(categoria) ? "selected" : ""}
                    onClick={() => handleCategoriaClick(categoria)}
                  >
                    {categoria}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rating-enviar">
              <label className="input-text-rating">Rating:</label>
              <ul className="rating-stars">
                {[...Array(5)].map((_, index) => (
                  <li
                    key={index}
                    className="star-icon-enviar"
                    onClick={() =>
                      setNewBook((prev) => ({ ...prev, rating: index + 1 }))
                    }
                    style={{
                      cursor: "pointer",
                      color: index + 1 <= newBook.rating ? "#FFD700" : "#ccc",
                    }}
                  >
                    {index + 1 <= newBook.rating ? <IoStar /> : <IoStarOutline />}
                  </li>
                ))}
              </ul>
            </div>

            <label className="input-text-discretion">Description Book:</label>
            <div className="custom-box">
              <textarea
                className="Box_discretion"
                value={newBook.description}
                onChange={(e) =>
                  setNewBook({ ...newBook, description: e.target.value })
                }
              ></textarea>
              <span className="corner top-left"></span>
              <span className="corner top-right"></span>
              <span className="corner bottom-left"></span>
              <span className="corner bottom-right"></span>
            </div>

            <button className="Button_submit" type="submit">Add Book</button>
          </div>
        </form>
      </div>

      {erroMessage && <ErroMessagem onClose={() => setErroMessagem(false)} />}
      {successMessage && <SuccessMessagem onClose={() => setSuccessMessage(null)} />}
    </div>
  );
}
