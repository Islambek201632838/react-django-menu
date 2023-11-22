import Footer from "./components/footer/Footer";

import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./components/detailsPage/DetailsPage";
import CatBasedPosts from "./components/categoryList/CatBasedPosts";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details/:slug" element={<DetailsPage />} />
          <Route path="/category/:id" element={<CatBasedPosts />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
