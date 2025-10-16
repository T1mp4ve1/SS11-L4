import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import MyFavourites from "./components/MyFavourites";

function App() {
  return (
    <BrowserRouter>
      <Container className="text-center mt-5">
        <Link to={"/favourites"} className="mx-5">
          <Button className="btn-primary">Go to ⭐</Button>
        </Link>
        <Link to={"/"}>
          <Button className="btn-success">Go to 🏠</Button>
        </Link>
      </Container>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<MyFavourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
