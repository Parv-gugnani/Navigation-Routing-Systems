import Sidebar from "./components/Siderbar"; // Corrected the import
import { useState } from "react";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropDownPage"; // Corrected the import
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/MoadlPage";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/accordion">
          {" "}
          {/* Changed 'to' to 'path' */}
          <AccordionPage />
        </Route>
        <Route path="/">
          {" "}
          {/* Changed 'to' to 'path' */}
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  );
}

export default App;
// module

// sort is used to sort for ex - data=12,23,42,4 //  ===  data.sort

/*
// for sorting strings

data.sortt((a,b) =>{
  return a.localeCompare(b);
});



*/

//object sorting
/*
const data = [
  {name:'Tomato',cost:10,weight:5},
  {name:'carrot',cost:15,weight:2},
  {name:'onion',cost:5,weight:7},
];

// sorting acc to cost ! or weight or name
function getSortValue(vegetable) {
  return vegetable.cost;
}


// 
data.sortt((a,b))=>{
  const valueA = getSortValue(A);
  const valueB = getSortValue(B);

  if(typeof valueA === 'string')
  //else

  return valueA - valueB;
};

*/

//Reversing sort
/*


 */
