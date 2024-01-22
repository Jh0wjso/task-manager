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
  const [modalIsOpen, setModalIsOpen] = useState(true);

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="newNoteBox">
      <div className="titleBox">
        <p className="title">{title}</p>
        <button className="starButton">
          {!isFavorite ? <CiStar /> : <MdStar color="orange" />}
        </button>
      </div>
      <div className="createNote">
        <p className="text-gray-500">{description}</p>
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
