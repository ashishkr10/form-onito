import { Routes, Route } from "react-router-dom";
import AddForm from "./pages/addForm";
import ShowData from "./pages/showData";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar>
              <AddForm />
            </Navbar>
          }
        />
        <Route
          path="data"
          element={
            <Navbar>
              <ShowData />
            </Navbar>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
