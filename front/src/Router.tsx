import { Route, Routes } from "react-router-dom";
import { Top } from "./pages/Top";
import NotFound from "./pages/NotFound";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
