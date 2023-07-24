import { useEffect } from 'react';
import './App.css';
import Login from "./screens/Login/Login"
import SignUp from "./screens/SignUp/SignUp"
import Chat from "./screens/Chat/Chat"
import { Routes, Route, useNavigate } from "react-router-dom"
import { useState } from 'react';

const App = () => {
  // const [user, setUser] = useState(null)
  // const [password, setPassword] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const user = window.localStorage.getItem("user")
    user ? navigate("/") : navigate("/signup")
  }, [navigate])


  // const login = (user, password) => {
  //   setUser(user)
  //   setPassword(password)
  //   window.localStorage.setItem("user", user)
  // }

  const logout = () => {
    // setUser(null)
    // setPassword(null)
    window.localStorage.clear()
  }

  return (

    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </div>

  );
}

export default App;
