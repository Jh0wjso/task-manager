import { CiStar } from "react-icons/ci";
import "./styles.css";

export default function NewNote() {
  return (
    <div className="newNoteBox">
      <div className="titleBox">
        <p className="title">Title</p>
        <button className="starButton">
          <CiStar />
        </button>
      </div>
      <div className="createNote">
        <p className="text-gray-500">Criar nota...</p>
      </div>
    </div>
  );
}
