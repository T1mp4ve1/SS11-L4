import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import MyFavourites from "./components/MyFavourites";

function App() {
  const count = useSelector((state) => state.main.count);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <p>Redux: {count}</p>
      <Button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
            payload: 1,
          })
        }
      >
        +
      </Button>
      <Button
        variant="danger"
        onClick={() =>
          dispatch({
            type: "DECREMENT",
            payload: 1,
          })
        }
      >
        -
      </Button>
      <Link to={"/favourites"} className="mx-5">
        <Button>Go ⭐</Button>
      </Link>
      <Link to={"/"}>
        <Button>Go 🏠</Button>
      </Link>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<MyFavourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
