import "./App.css";
import { Routes, Route } from "react-router-dom";
import Account from "./pages/Account";

function App() {
  return (
    <Routes>
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}

export default App;
