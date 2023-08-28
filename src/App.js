import Link from "./components/Link";
import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div>
      <Link to="/accordion">Go to accordion</Link>
      <Link to="/dropdown">Go to dropdown</Link>
    </div>
  );
}

export default App;
