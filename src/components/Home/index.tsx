import NewNote from "../NewNote";
import Note from "../Note/Note";
import "./styles.css";

export default function Home() {
  return (
    <section className="homeContent flex flex-col items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold text-center">Welcome to</h1>
        <h1 className="text-5xl font-bold text-center">Notes</h1>
      </div>
      <div>
        <p className="text-2xl text-center">Create your notes</p>
      </div>
      <NewNote></NewNote>
      <Note></Note>
    </section>
  );
}
