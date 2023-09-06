import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // Import Font Awesome icons
import Table from "./Table";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <FaArrowUp />
        <FaArrowDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <FaArrowUp />
        <FaArrowDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <FaArrowUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <FaArrowDown />
      </div>
    );
  }
}

export default SortableTable;
