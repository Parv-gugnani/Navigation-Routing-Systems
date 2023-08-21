import React from "react";
import Button from "./components/Button";
import { GoBell, GoDatabase } from "react-icons/go";
import Accordion from "./components/Accordion";

// mr-1 is  = margin
// we dont add manually to each button
function App() {
  const items = [
    {
      id: "ldo22jeu",
      label: "Can i use react",
      content: "you can use react with any project you like",
    },
    {
      id: "sdkoei34",
      label: "Can i use js",
      content: "you can use react with any project you like",
    },
    {
      id: "sdpiowe32",
      label: "Can i use css",
      content: "you can use react with any project you like",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
