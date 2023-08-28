import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/button" },
  ];

  const renderedLinks = links.map((link) => (
    <Link
      key={link.label}
      to={link.path}
      className="mb-3"
      activeClassName="font-bold border-l-4 border-blue-500 pl-2"
    >
      {link.label}
    </Link>
  ));

  return (
    <div className="sticky left-5 top-0 overflow flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;