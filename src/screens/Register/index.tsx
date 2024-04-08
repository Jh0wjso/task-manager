import { useState } from "react";
import { FaUser } from "react-icons/fa";

export default function RegisterPage() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showstatusMessage, setShowstatusMessage] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    isEmail(email) === false || email === null
      ? setShowstatusMessage(true)
      : verifyLogin();
  };

  const createUser = async () => {
    fetch("http://localhost:3003/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            name: user,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.statusCode === 500) {
              alert("Erro ao cadastrar usuário, este email já está cadastrado");
            } else {
              alert("Usuário cadastrado com sucesso");
              window.location.href = "/";
            }
          })
          .catch((error) => console.error("Erro ao fazer login:", error));
  }

  const verifyLogin = async () => {
   //Se o status code for 500, o email já está cadastrado
    fetch("http://localhost:3003/users/validateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === 500) {
          alert("Email já cadastrado");
        } else {
          createUser();
        }
      })
      .catch((error) => console.error("Erro ao fazer login:", error));
  }

  const isEmail = (email: string) => {
    if (!email) return false;
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-gray-200 rounded-full p-3">
            <FaUser />
          </span>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create a new account
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your details to register.
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              required
              placeholder="James Brown"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              //Verifica se o email é válido
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              required
              placeholder="email@email.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password *
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              required
              placeholder="********"
            />
          </div>
          {showstatusMessage && (
            <p id="errormessage" className="text-red-600 text-xs mt-2">
              Verifique os campos e tente novamente
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={handleRegister}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
