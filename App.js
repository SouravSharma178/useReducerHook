import { useReducer } from "react";
import Header from "./Components/Header";
import "./styles.css";

// const ACTIONS = {
//   INCREMENT:"Increment",
//   DeCREMENT:"Decrement"
// }

export default function App() {
  function reducer(state, action) {
    if (action.type == "Increment") {
      return {count:state.count+1};
    } else if (action.type == "Decrement") {
      return {count:state.count-1};
    } else {
      return {state};
    }
  }
  // dispatch calls the reducer method which performs some actions on our state
  const [state, dispatch] = useReducer(reducer, {count:0});
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
      <h1>{state.count}</h1>
    </div>
  );
}
