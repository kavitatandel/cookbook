import logo from "./logo.svg";
import "./App.css";
import Footer from "./component/Footer";

import RecipeDesc from "./component/RecipeDesc";

import Header from "./component/Header";
import Country from "./component/Country";
import About from "./component/About"


function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <Header />

      {/* HOME */}
      <h1>HOME COMPONENT</h1>

      {/* COUNTRY PAGE */}
      <h1>COUNTRY COMPONENT (example):</h1>

      <Country />

      {/* RECIPE PAGE */}
      <h1>RECIPE COMPONENT (example):</h1>
      <RecipeDesc />

      {/* ABOUT */}
      <h1>ABOUT COMPONENT</h1>
      {/* <About/> */}

      {/* FOOTER */}
      <h1>FOOTER COMPONENT</h1>
    </div>
  );
}

export default App;
