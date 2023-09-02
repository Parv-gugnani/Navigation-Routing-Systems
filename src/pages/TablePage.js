import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "lime", color: "bg-red-500", score: 2 },
    { name: "Apple", color: "bg-yellow-500", score: 3 },
    { name: "banana", color: "bg-green-500", score: 4 },
  ];

  const config = [
    { label: "Name", render: (fruit) => fruit.name },
    { label: "Color", render: (fruit) => fruit.color },
    { label: "Score", render: (fruit) => fruit.score },
  ];

  return (
    <div>
      <Table data={data} config={config} />
    </div>
  );
}

export default TablePage;
