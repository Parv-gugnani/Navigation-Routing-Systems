import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-4xl">
        {isExpanded ? <GoChevronLeft /> : <GoChevronDown />}
      </span>
    );
    // long hand approach
    // you will not see thisis thing in professionals projects
    // if we need to upload various handle functions

    const handleClick = (nextIndex) => {
      if (expandedIndex === nextIndex) {
        setExpandedIndex(-1);
      } else {
        setExpandedIndex(nextIndex);
      }
    };

    //conditionally rendering
    return (
      <div key={index}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t roundeds">{renderedItems}</div>;
}

export default Accordion;
/**
 * truthy falsy value
 * hi || there   === truthy value
 * ffalse || there === there
 *
 */
