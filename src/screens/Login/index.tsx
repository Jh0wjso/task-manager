import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

interface User {
  userId: number;
  name: string;
  email: string;
  password: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name] = useState("");
  const [userId] = useState(0);
  const [showStatusMessage, setShowStatusMessage] = useState(false);

  async function handleLogin() {
    const user: User = {
      userId: userId,
      name: name,
      email: email,
      password: password,
    };

    const response = await fetch(
      `http://localhost:3003/users/validateUser/${user.email}/${user.password}`
    );

    const data = await response.json();

    if (data.statusCode === 200) {
      setShowStatusMessage(false);
      user.userId = data.user.userId;
      user.name = data.user.name;
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/home";
    } else {
      setShowStatusMessage(true);
    }
  }

  return (
    <>
      <div className="flex h-screen flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
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
          <form className="space-y-6 p-8" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="email@email.com"
                  className="form-input border-black w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  placeholder="********"
                  className="form-input border-black w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                />
              </div>
              {showStatusMessage && (
                <p id="errormessage" className="text-red-600 text-xs mt-2">
                  Usuario ou senha incorreto
                </p>
              )}
            </div>

            <div className="loginButtonMain">
              <button
                type="submit"
                className="flex w-full justify-center text-white text-2xl font-bold"
                onClick={handleLogin}
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
