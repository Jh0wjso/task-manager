import { useState } from "react";

export default function RegisterPage() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showstatusMessage, setShowstatusMessage] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    isEmail(email) === false || email === null || password === "" || user === ""
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
        if (data.statusCode === 500 || data.statusCode === 404) {
          alert("Emil já cadastrado");
        } else {
          window.location.href = "/login";
        }
      })
      .catch((error) => console.error(error));
  };

  const verifyLogin = async () => {
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
      .catch((error) => console.error(error));
  };

  const isEmail = (email: string) => {
    if (!email) return false;
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center h-screen">
      <div className="loginBox bg-white py-8 border-[3px] border-black rounded-2xl max-w-sm w-full">
        <div className="border-b-2 border-black flex justify-start sm:mx-auto sm:w-full sm:max-w-sm mb-5 pb-5 pl-2">
          <img
            src={"src/images/home-icon.png"}
            alt="logo"
            className="mr-5"
            width={75}
          />
          <div className="flex flex-col items-start justify-center">
            <h1 className="smt-10 text-start text-5xl ms:text-7xl font-bold leading-9 tracking-tight">
              CoreNotes
            </h1>
          </div>
        </div>
        <form className="p-8">
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
              className="form-input border-black w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-input border-black w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
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
              className="form-input border-black w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
              required
              placeholder="********"
            />
          </div>

          {showstatusMessage && (
            <p id="errormessage" className="text-red-600 text-xs mt-2">
              Verifique os campos e tente novamente
            </p>
          )}
          <div className="loginButtonMain">
            <button
              type="submit"
              className="flex w-full justify-center text-white text-2xl font-bold"
              onClick={handleRegister}
            >
              Sign in
            </button>
          </div>
          <div className="text-center">
            Ja é tem cadastro?{" "}
            <a
              href="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              clique aqui.
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
