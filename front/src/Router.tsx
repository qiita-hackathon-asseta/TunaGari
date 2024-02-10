import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import NotFound from "./pages/NotFound";
import Secret from "./routes/Secret";

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="secret/*" element={<Secret />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
