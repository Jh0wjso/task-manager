import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { MdStar } from "react-icons/md";
import { LuPaintBucket, LuPencil } from "react-icons/lu";
import { MdBlock } from "react-icons/md";
import Modal from "react-modal";
import "./styles.css";

interface NoteProps {
  title: string;
  content: string;
  isfavorite?: boolean;
}

export default function Note({ title, content, isfavorite }: NoteProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isStartFavorite, setIsStartFavorite] = useState(isfavorite);

  function closeModal() {
    setModalIsOpen(false);
  }

  console.log(title);
  console.log(isStartFavorite);

  return (
    <div className="newNoteBox">
      <div className="titleBox">
        <p className="title">{title}</p>
        {isEdit ? (
          <button
            className="starButton"
            onClick={() => setIsStartFavorite(!isStartFavorite)}
          >
            {!isStartFavorite ? <CiStar /> : <MdStar color="orange" />}
          </button>
        ) : (
          <div className="startButton">
            {!isStartFavorite ? <CiStar /> : <MdStar color="orange" />}
          </div>
        )}
      </div>
      <div className="createNote">
        <p className="text-gray-500 w-[100%] h-[100%] resize-none outline-none border-none">
          {content}
        </p>
      </div>
      <section className="icons">
        <button onClick={() => setIsEdit(!isEdit)}>
          {!isEdit ? (
          <LuPencil className="mr-5" size={20} />
        ) : (
          <MdBlock  className="mr-5" size={20} />
        )}
        </button>
        <button onClick={() => setModalIsOpen(true)}>
          <LuPaintBucket size={20} />
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="w-[200px] h-[50px] bg-red-500"
        >
          <button onClick={closeModal}>close</button>
        </Modal>
      </section>
    </div>
  );
}
