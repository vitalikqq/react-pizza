import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/Notfound";
import { BrowserRouter, Route} from "react-router-dom";
import pizzas from "./assets/pizzas.json";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
            <Route path="/" element={<Home/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
