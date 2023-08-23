import Accordion from "../components/Accordion";

function AccordionPage() {
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

export default AccordionPage;
