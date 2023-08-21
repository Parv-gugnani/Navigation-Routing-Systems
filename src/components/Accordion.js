import { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, SetExpandedIndex] = useState(0);
  //
  const renderedItems = items.map((items, index) => {
    if (index === expandedIndex) {
      console.log("expanded");
    } else {
      console.log("collapsed");
    }
    return (
      <div>
        <div>{items.label}</div>
        <div>{items.content}</div>
      </div>
    );
  });
  return;
  <div>{renderedItems}</div>;
}

export default Accordion;
