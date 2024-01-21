import NewNote from "../NewNote";
import Note from "../Note/Note";
import "./styles.css";

export default function Home() {
  return (
    <section className="homeContent flex flex-col items-center justify-center"> 
      <NewNote></NewNote>
      <Note></Note>
    </section>
  );
}
