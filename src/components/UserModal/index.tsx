import { IoMdCloseCircle } from "react-icons/io";
import "./styles.css";
import { Link } from "react-router-dom";

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UserModal({ isOpen, onClose }: UserModalProps) {
  return (
    <div className={`${isOpen ? "block" : "hidden"}`}>
      <div className="modalContainer">
        <div className="modalContent">
          <div className="w-[100%] justify-center">
            <button className="closeButton" onClick={onClose}>
              <IoMdCloseCircle />
            </button>
          </div>
          <h1 className="modalTittle"></h1>
          <div className="modalBody">
            <h2 className="modalSubTittle">
              Name: {JSON.parse(localStorage.getItem("user") || "").name}
            </h2>
            <p className="modalText">
              E-mail: {JSON.parse(localStorage.getItem("user") || "").email}
            </p>
          </div>
          <a href="/" className="LogoutButton">
            Log Out
          </a>
        </div>
      </div>
    </div>
  );
}
