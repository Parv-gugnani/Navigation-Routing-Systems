import { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0); //changed the extned one like (1) == then changed one decp
  //
  const renderedItems = items.map((items, index) => {
    const isExpanded = index === expandedIndex;

    // long hand approach
    // you will not see thisis thing in professionals projects
    // if we need to upload various handle functions
    const handleClick = (nextIndex) => {
      setExpandedIndex(nextIndex);
    };
    // conditional rendering ->>>>>>>>
    return (
      <div>
        <div onClick={() => handleClick(index)}>{items.label}</div>
        {isExpanded && <div>{items.content}</div>}
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
