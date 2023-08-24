import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false); // Initialize isOpen as false
  const diveEl = useRef();

  // useeffect clearnUp
  useEffect(() => {
    const handler = (event) => {
      if (!diveEl.current) {
        return;
      }
      //
      if (!diveEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  //

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
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  // selection was changed
  let content = "Select...";
  if (value) {
    content = value.label;
  }

  return (
    // ref here going to five us pointer and it will give ref to html file
    <div ref={diveEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;

// if there a rusable component
//border rounded p-3 shadow bg-white w-full

// we use panel componenets ! for resuing the same thing

/*

// why use capture phase

Alright, let's simplify it! Imagine you have a toy that makes a noise when you touch it. Now, let's say you have a bigger toy that holds the smaller toy inside it.

The small toy is like your event, something happening, like a button being clicked. The big toy is the whole web page, like a website.

Now, when you touch the small toy (the event), it usually makes a noise right away. But sometimes, you want the big toy (the website) to do something first before the small toy makes a noise.

So, a "Capture Phase Handler" is like telling the big toy (the website) to do something before the small toy (the event) happens. It's like saying, "Hey big toy, do this first, and then let's play with the small toy."

It helps us do things in the right order when we're working with websites and events. We use it to make sure everything happens in the right way, just like when we play with our toys!
 */

/*
//Use Ref ?

Alright, imagine you have a magic spyglass. When you look through it, you can see something, like a treasure map or a secret message.

useRef in React is kind of like that magic spyglass. It helps us see and remember things in our app, but it's not for looking at stuff like a real spyglass. It's for remembering special parts of our website.

Let's say we have a toy box with a lot of toys in it. We use useRef to point to a specific toy, like a cool robot toy, and we can easily find it later whenever we want. It helps us remember which toy we're talking about.

So, useRef in React is like a magical pointer that helps us remember and find things in our app, just like a spyglass helps you find hidden treasures! 
 */
