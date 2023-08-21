import { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, SetExpandedIndex] = useState(0); //changed the extned one like (1) == then changed one decp
  //
  const renderedItems = items.map((items, index) => {
    const isExpanded = index === expandedIndex;
    // conditional rendering ->>>>>>>>

    return (
      <div>
        <div>{items.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });
  return;
  <div>{renderedItems}</div>;
}

export default Accordion;

/**
 * truthy falsy value
 * hi || there   === truthy value
 * ffalse || there === there
 *
 */
