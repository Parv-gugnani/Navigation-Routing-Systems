import React from "react";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success primary rounded outline>
          Click Me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
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
