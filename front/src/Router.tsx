import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import app from "./firebase";

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
      <Route path='/' element={user ? <Home /> : <Login />} />
    </Routes>
  );
};
