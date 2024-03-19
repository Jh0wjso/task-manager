import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { MdStar } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import "./styles.css";

interface NoteProps {
  id: number;
  title: string;
  content: string;
  isfavorite?: boolean;
  userId: string;
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
        id: id,
        title: title,
        content: content,
        isfavorite: !isStartFavorite?.valueOf(),
        userId: 2,
      }),
    });
    window.location.reload();
  };

  const handleDeleteClick = () => {
    fetch(`http://localhost:3003/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.reload();
  };
  

  return (
    <div className={`newNoteBox`}>
      <div className="titleBox bg-transparent">
        <input className="title" defaultValue={title}
        onChange={(e) => {
          fetch(`http://localhost:3003/notes/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: e.target.value,
              content: content,
              isfavorite: isStartFavorite,
              userId: 2,
            }),
          });
        }}/>
        <button className="starButton" onClick={handleStarClick}>
          {!isStartFavorite ? <CiStar /> : <MdStar color="orange" />}
        </button>
      </div>
      <div className="createNote bg-transparent">
        <textarea
          placeholder="Content for a new note"
          defaultValue={content}
          className="outline-none border-none w-[100%] h-[100%] resize-none bg-transparent"
          onChange={(e) => {
            fetch(`http://localhost:3003/notes/${id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title: title,
                content: e.target.value,
                isfavorite: isStartFavorite,
                userId: 2,
              }),
            });
          }}
        ></textarea>
      </div>
      <div className="bottomBox bg-transparent">
        <button className="deleteButton bg-transparent" onClick={handleDeleteClick}>
          <FaRegTrashCan />
        </button>
      </div>
    </div>
  );
}
