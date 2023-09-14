import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/style.scss";
import HeaderView from "./components/header";
import ListControllers from "./pages/controllers/list-post";
import AddPostController from "./pages/controllers/add-post";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderView />
        <Routes>
          <Route path="/" element={<ListControllers />} />
          <Route path="add-post" element={<AddPostController />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
