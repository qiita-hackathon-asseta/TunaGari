import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { useEffect, useState } from "react";
import app from "./firebase";
import { Top } from "./pages/Top";
import Heeder from "./components/Heeder";
import { BookMark } from "./pages/BookMark";

const auth = getAuth(app);

export const Router = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Heeder />
      <Routes>
        <Route path="/" element={user ? <Top /> : <Login />} />
        <Route path="/BookMark" element={user ? <Top /> : <BookMark />} />
      </Routes>
    </>
  );
};
