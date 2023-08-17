import React from "react";
import Button from "./Button";
import { GoBell, GoDatabase } from "react-icons/go";

// mr-1 is  = margin
// we dont add manually to each button
function App() {
  return (
    <div>
      <div>
        <Button success primary rounded outline>
          <GoBell className="mr-1" />
          Click Me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDatabase />
          Buy
        </Button>
      </div>
      <div>
        <Button secondary>Hello</Button>
      </div>
      <div>
        <Button secondary>Full</Button>
      </div>
      <div>
        <Button rounded warning>
          Done
        </Button>
      </div>
    </div>
  );
}

export default App;
