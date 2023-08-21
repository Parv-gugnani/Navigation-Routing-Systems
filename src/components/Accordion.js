function Accordion({ items }) {
  const renderedItems = items.map((items) => {
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
