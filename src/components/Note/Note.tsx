import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { MdStar } from "react-icons/md";
import { LuPaintBucket, LuPencil } from "react-icons/lu";
import Modal from "react-modal";
import "./styles.css"

interface NoteProps {
  title: string;
  description: string;
  isFavorite?: boolean;
}

export default function Note({ title, description, isFavorite }: NoteProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isStartFavorite, setIsStartFavorite] = useState(isFavorite);

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="newNoteBox">
      <div className="titleBox">
        <p className="title">{title}</p>
        <button className="starButton" onClick={() => setIsStartFavorite(!isStartFavorite)}>
          {!isStartFavorite ? <CiStar /> : <MdStar color="orange" />}
        </button>
      </div>
      <div className="createNote">
        <p className="text-gray-500 w-[100%] h-[100%] resize-none outline-none border-none">{description}</p>
      </div>
      <section className="icons">
        <LuPencil className="mr-5" size={20} />
        <button onClick={() => setModalIsOpen(true)}>
          <LuPaintBucket size={20} />
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>
        </Modal>
      </section>
    </div>
  );
}
