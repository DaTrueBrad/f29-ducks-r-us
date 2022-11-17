import "./App.css";
import { GlobalContext } from "./store/globalContext";
import { useContext, useRef } from "react";
import Header from "./components/Header";
import DuckCard from "./components/DuckCard";
import Cart from './components/Cart'

function App() {
  let { state, dispatch } = useContext(GlobalContext);

  const duckDisplay = state.allDucks.map((duck) => {
    return <DuckCard duck={duck} cart={false}/>;
  });

  return (
    <div className="App">
      <Header />
      <h1>Welcome to Ducks R Us!</h1>
      <Cart />
      <h2>All Ducks</h2>
      <div className="row-container">{duckDisplay}</div>
    </div>
  );
}

export default App;
