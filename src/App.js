import logo from "./logo.svg";
import "./App.css";
import RecipeDesc from "./component/RecipeDesc";

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <h2>HEADER COMPONENT</h2>

      {/* HOME */}
      <h1>HOME COMPONENT</h1>

      {/* COUNTRY PAGE */}
      <h1>COUNTRY COMPONENT (example):</h1>

      {/* RECIPE PAGE */}
      <h1>RECIPE COMPONENT (example):</h1>
      <RecipeDesc />

      {/* ABOUT */}
      <h1>ABOUT COMPONENT</h1>

      {/* FOOTER */}
      <h3>FOOTER COMPONENT</h3>
    </div>
  );
}

export default App;
