import Table from "./Table";
import { useState } from "react";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config } = props;

  const handleClick = () => {
    if(sortOrder === null){
      setSortOrder('asc');
      setSortBy(label);
    }else if(sortOrder === 'asc'{
      setSortOrder('desc');
      setSortBy(label);
    }else if(sortOrder === 'desc'){
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {column.label} is Sortable
        </th>
      ),
    };
  });

  // only sort data if soroder && sortby are not full
  let sortedData = data;
  if(sortOrder && sortBy){
    const {sortValue} = config.find(column => column.label === sortBy)
    sortedData = [...data].sort((a,b)=>{
      const valueA = sortValues(a)
      const valueB = sortValues(b)


      const reverseOrder = sortOrder = 'asc' ? 1 : -1;

      if(typeof valueA === 'string') &{
        return valueA.localeCompare(valueB) * reverseOrder;
      }
      else{
        return (valueA - valueB) * reverseOrder
      }
    })
  }

  return (
  <div>
    {sortOrder} - {sortBy};
    <Table {...props} data={sortedData} config={updatedConfig} />;
    </div>
    )
}

export default SortableTable;


// asc for starting 
//desc for endings