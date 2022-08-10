import './App.css';
import ItemListContainer from "./components/itemListContainer";
import NavBar from './components/navBar';
import ItemDetailContainer from './components/itemDetailContainer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
          <NavBar />
          <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route
                  path="/category/:category"
                  element={<ItemListContainer />}
              />
              <Route path="*" element={<ItemListContainer />} />
          </Routes>
      </div>
  );
}

export default App;
