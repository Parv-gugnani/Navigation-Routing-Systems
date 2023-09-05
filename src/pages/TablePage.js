// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "lime", color: "bg-red-500", score: 2 },
    { name: "Apple", color: "bg-yellow-500", score: 3 },
    { name: "banana", color: "bg-green-500", score: 4 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    { label: "Color", render: (fruit) => fruit.color },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: "Score squared",
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  // ** this is square in js
  return (
    <div>
      {/* <Table data={data} config={config} keyFn={keyFn} /> */}
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
