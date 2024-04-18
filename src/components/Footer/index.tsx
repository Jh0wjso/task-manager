import { Link } from "react-router-dom";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="w-screen flex flex-col justify-center items-center shadow md:px-6">
      <hr className="my-6 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-center dark:text-gray-400 border-t-4 border-black w-screen pt-4">
        <Link
          to="/home"
          className="text-black text-xl hover:underline hover:text-gray-500"
        >
          © 2024 CoreNotes
        </Link>
      </span>
    </footer>
  );
}
