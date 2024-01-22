import { notesData } from "../../data/mock/Notes.data";
import NewNote from "../NewNote";
import Note from "../Note/Note";
import "./styles.css";

export default function Home() {
  return (
    <section className="homeContent">
      <section className="w-screen flex flex-col items-center justify-center">
        <NewNote></NewNote>
      </section>
      <div className="notesContainer">
        Favorites
        <div className="flex">
          {notesData.map(
            (note) =>
              note.isFavorite && (
                <Note
                  key={note.id}
                  title={note.title}
                  description={note.description}
                  isFavorite={note.isFavorite}
                ></Note>
              )
          )}
        </div>
        <div className="mt-20">
          All Notes
          <div className="flex">
            {notesData.map(
              (note) =>
                note.isFavorite !== true && (
                  <Note
                    key={note.id}
                    title={note.title}
                    description={note.description}
                    isFavorite={note.isFavorite}
                  ></Note>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
