import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { useEffect, useState } from "react";
import app from "./firebase";
import { Top } from "./pages/Top";
import NotFound from "./pages/NotFound";
import Template from "./components/Template";
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
      <Route path="/" element={<Template />}>
        <Route path="/home" element={<Top />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
