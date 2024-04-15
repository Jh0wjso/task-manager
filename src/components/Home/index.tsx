import { useState, useEffect } from "react";
import NewNote from "../NewNote";
import Note from "../Note/Note";
import "./styles.css";

export default function Home() {
  const [notesData, setNotesData] = useState([]);
  const userId = JSON.parse(localStorage.getItem("user") || "").userId;

  useEffect(() => {
    fetch(`http://localhost:3003/users/userNotes/${userId}`)
      .then((response) => response.json())
      .then((data) => setNotesData(data))
      .catch((error) => console.error("Erro ao obter dados da API:", error));
  }, []);

  return (
    <section className="homeContent">
      <section className="w-screen flex flex-col items-center justify-center">
        <NewNote />
      </section>
      <div className="notesContainer">
        <h1 className="text-7xl font-bold text-black w-[100%] border-b-4 border-b-black rounded px-4">Favorites</h1>
        <div className="flex flex-wrap justify-center items-center">
          {notesData.map(
            (note: NotesType) =>
              note.isfavorite && (
                <Note
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  content={note.content}
                  isfavorite={note.isfavorite}
                  userId={2}
                ></Note>
              )
          )}
        </div>
        <div className="mt-20">
        <h1 className="text-7xl font-bold text-black w-[100%] border-b-4 border-b-black rounded px-4">All Notes</h1>
          <div className="flex flex-wrap justify-center items-center">
            {notesData.map(
              (note: NotesType) =>
                !note.isfavorite && (
                  <Note
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    content={note.content}
                    isfavorite={note.isfavorite}
                    userId={2}
                  ></Note>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
