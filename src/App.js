import logo from "./logo.svg";
import "./App.css";

import RecipeDesc from "./component/RecipeDesc";

import Header from "./component/Header";
import Country from "./component/Country";
import Home from './component/Home';



function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <h2>HEADER COMPONENT</h2>
      <Header />

      {/* HOME */}
      <h1>HOME COMPONENT</h1>
      <Home />

      {/* COUNTRY PAGE */}
      <h1>COUNTRY COMPONENT (example):</h1>

      <Country />

      {/* RECIPE PAGE */}
      <h1>RECIPE COMPONENT (example):</h1>
      <RecipeDesc id={1} />

      {/* ABOUT */}
      <h1>ABOUT COMPONENT</h1>

      {/* FOOTER */}
      <h3>FOOTER COMPONENT</h3>
    </div>
  );
}

export default App;
