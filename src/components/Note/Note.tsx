import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { MdStar } from "react-icons/md";
import "./styles.css";

interface NoteProps {
  id: number;
  title: string;
  content: string;
  isfavorite?: boolean;
}

export default function Note({ id, title, content, isfavorite }: NoteProps) {
  const [isStartFavorite, setIsStartFavorite] = useState(isfavorite);

  const handleStarClick = () => {
    setIsStartFavorite(!isStartFavorite);

    fetch(`http://localhost:3003/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
        isfavorite: !isStartFavorite?.valueOf(),
      }),
    });
    window.location.reload();
  };

  return (
    <div className="newNoteBox">
      <div className="titleBox">
        <p className="title">
          {title}
        </p>
        <button className="starButton" onClick={handleStarClick}>
          {!isStartFavorite ? <CiStar /> : <MdStar color="orange" />}
        </button>
      </div>
      <div className="createNote">
        <textarea
          placeholder="Content for a new note"
          value={content}
          readOnly={true}
          className="outline-none border-none w-[100%] h-[100%] resize-none"
        ></textarea>
      </div>
    </div>
  );
}
