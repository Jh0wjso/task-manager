import { useState, useEffect } from "react";
import NewNote from "../NewNote";
import Note from "../Note/Note";
import "./styles.css";

export default function Home() {
  const [notesData, setNotesData] = useState([]);

  useEffect(() => {
    // Fazer a solicitação à sua API aqui
    fetch("http://localhost:3003/notes")
      .then((response) => response.json())
      .then((data) => setNotesData(data))
      .catch((error) => console.error("Erro ao obter dados da API:", error));
  }, []); // A lista de dependências vazia garante que a solicitação seja feita apenas uma vez

  return (
    <section className="homeContent">
      <section className="w-screen flex flex-col items-center justify-center">
        <NewNote></NewNote>
      </section>
      <div className="notesContainer">
        Favorites
        <div className="flex">
          {notesData.map(
            (note : NotesType) =>
              note.isfavorite && (
                <Note
                  key={note.id}
                  id={note.id}                  
                  title={note.title}
                  content={note.content}
                  isfavorite={note.isfavorite}
                ></Note>
              )
          )}
        </div>
        <div className="mt-20 container">
          All Notes
          <div className="flex flex-wrap justify-center items-center">
            {notesData.map(
              (note : NotesType) =>
                !note.isfavorite && (
                  <Note
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    content={note.content}
                    isfavorite={note.isfavorite}
                  ></Note>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
