// import { useState } from "react";
import Header from "./Components/Header/Header";
import Search from "./Components/Search Section/Search";
import Footer from "./Components/Footer/Footer";
import "./App.css";
// import react from "@vitejs/plugin-react-swc";



function App() {
  // const [search, setSearch] = useState("");
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Search/>
      </div>
      <Footer />
    </>
  );
}

export default App;
