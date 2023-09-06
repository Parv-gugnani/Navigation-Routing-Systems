import Button from "../components/Button";
import { useState } from "react";
import Panel from "../components/Panel";
import { useReducer } from "react";

const reducer = (state, action) => {
  //
};

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: valueToAdd,
  });

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  // fixed!
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    setValueToAdd(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setCount(count + valueToAdd);
    setValueToAdd(0);
  };

  //
  //
  //
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <button>Add it!</button>
      </form>
    </Panel>
  );
}

export default CounterPage;
