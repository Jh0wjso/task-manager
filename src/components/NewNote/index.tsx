import { CiStar } from "react-icons/ci";
import "./styles.css";
import { MdStar } from "react-icons/md";
import { useState } from "react";

export default function NewNote() {
  
  const [isFavorite, setIsFavorite] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="newNoteBox loginBox">
      <div className="titleBox">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="outline-none border-none w-[100%] h-[100%] resize-none"
        />
        <button
          className="starButton"
          onClick={() => setIsFavorite(!isFavorite)}
          
        >
          {!isFavorite ? <CiStar /> : <MdStar color="orange" />}
        </button>
      </div>
      <div className="createNote">
        <textarea
          placeholder="Content for a new note"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="outline-none border-none w-[100%] h-[100%] resize-none"
        ></textarea>
      </div>
      <button
        onClick={() => {
          title && fetch("http://localhost:3003/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              content: content,
              isfavorite: isFavorite,
              userId: JSON.parse(localStorage.getItem("user") || "").userId,
            }),
          });
          window.location.reload();
        }}
        className="createNoteButton"
      >
        Create Note
      </button>
    </div>
  );
}
