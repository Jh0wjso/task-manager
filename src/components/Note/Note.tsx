import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { MdStar } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import "./styles.css";
import { NoteProps } from "../../data/interfaces/noteProps.props";

export default function Note({ id, title, content, isfavorite, userId }: NoteProps) {
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
        userId: userId,
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
    <div className="newNoteBox loginBox">
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
              userId: userId,
            }),
          });
        }}/>
        <button className="starButton" onClick={handleStarClick}>
          {!isStartFavorite ? <CiStar /> : <MdStar color="orange" />}
        </button>
      </div>
      <div className="createNote bg-transparent">
        <textarea
          placeholder="Content for the note"
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
                userId: userId,
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
