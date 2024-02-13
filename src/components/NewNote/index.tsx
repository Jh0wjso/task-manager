import { CiStar } from "react-icons/ci";
import "./styles.css";
import { MdStar } from "react-icons/md";
import { useState } from "react";
import { set } from "date-fns";

export default function NewNote() {
  
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="newNoteBox">
      <div className="titleBox">
        <input type="text" placeholder="Title" className="text-gray-500 w-[100%] outline-none border-none" />
        <button className="starButton" onClick={() => setIsFavorite(!isFavorite)}>
          {!isFavorite ? <CiStar /> : <MdStar color="orange" />}
        </button>
      </div>
      <div className="createNote">
        <textarea
          placeholder="Description"
          className="text-gray-500 w-[100%] h-[100%] resize-none outline-none border-none"
        ></textarea>
      </div>
    </div>
  );
}
