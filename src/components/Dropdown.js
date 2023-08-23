import React, { useState } from "react";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false); // Initialize isOpen as false

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // Pass the option as an argument
    // Close dropdown
    setIsOpen(false);
    // Handle the selected option, you can add your logic here
    // console.log(option);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  let content = "Select...";
  if (selection) {
    content = selection.label;
  }

  return (
    <div>
      <div onClick={handleClick}>{value?.label || "Select..."}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
