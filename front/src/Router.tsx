import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { useEffect, useState } from "react";
import app from "./firebase";
import { Top } from "./pages/Top";

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
    <Routes>
      <Route path='/' element={user ? <Top /> : <Login />} />
    </Routes>
  );
};
