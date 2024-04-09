import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./styles.css";
import { useEffect, useState } from "react";
import { NoteProps } from "../../data/interfaces/noteProps.props";
import UserModal from "../UserModal";
import { FaRegUserCircle } from "react-icons/fa";

export default function Header() {
  const [searchResults, setSearchResults] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <nav className="containerHeader">
      <div className="navbarContent">
        <Link to="/" className="flex flex-row items-center">
          <h1 className="pageTittle">CoreNotes</h1>
        </Link>
        {/*
        <div className="hidden">
          Class searchBar
          <input
            className="searchInput"
            type="text"
            placeholder="Pesquisar Notas.."
            onChange={(e) =>
              fetch(`link`)
                .then((response) => response.json())
                .then((data) => setSearchResults(data))
                .catch((error) =>
                  console.error( error)
                )
            }
            list="searchResults"
          ></input>
          <datalist id="searchResults">
            {searchResults.map((note: NoteProps) => (
              <option key={note.id} value={note.title + " - " + note.content}/>
            ))}
          </datalist>
        </div>
        <button className="hidden">
          Class searchButton
          <BsSearch />
        </button>
        */}
        <button
          className="userButton"
          onClick={() => setModalIsOpen(!modalIsOpen)}
        >
          <FaRegUserCircle
            size={40}
            className="ml-6 text-indigo-600 hover:text-indigo-900"
          />
        </button>
        <UserModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
      </div>
    </nav>
  );
}
