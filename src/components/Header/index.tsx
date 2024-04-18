import { Link } from "react-router-dom";
import "./styles.css";
import UserModal from "../UserModal";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <nav className="containerHeader">
      <div className="navbarContent">
        <Link to="/home" className="flex flex-row items-center">
          <h1 className="pageTittle">CoreNotes</h1>
        </Link>
        <div className="flex flex-col items-start">
          <button
            className="userButton"
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            <FaRegUserCircle
              size={40}
              className="ml-6 text-black hover:text-gray-400"
            />
          </button>
          <UserModal
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
}
