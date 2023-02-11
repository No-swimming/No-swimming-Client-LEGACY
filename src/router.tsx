import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Write from "./pages/Write";
import Error404 from "./pages/Error404";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/write/:bookInfo" element={<Write />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
