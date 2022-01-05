import "./App.css";
import Footer from "./component/Footer";
import RecipeDesc from "./component/RecipeDesc";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className="App">
<AppRouter />
      <RecipeDesc />
      <Footer />
    </div>
  );
}

export default App;
