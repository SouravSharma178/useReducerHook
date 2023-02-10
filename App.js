import { useReducer } from "react";
import Header from "./Components/Header";
import "./styles.css";

export default function App() {
  function reducer(state, action) {
    if (action.type == "Increment") {
      return state + 1;
    } else if (action.type == "Decrement") {
      return state - 1;
    } else {
      return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, 0);
  function increment() {
    dispatch({ type: "Increment" });
  }
  function decrement() {
    dispatch({ type: "Decrement" });
  }
  return (
    <div className="App">
      <Header />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h1>{state}</h1>
    </div>
  );
}
