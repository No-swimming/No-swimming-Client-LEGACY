import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Write from "./pages/Write";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
