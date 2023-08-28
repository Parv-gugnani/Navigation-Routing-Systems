import Sidebar from "./components/Siderbar"; // Corrected the import
import { useState } from "react";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropDownPage"; // Corrected the import
import ButtonPage from "./pages/ButtonPage";

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
      </div>
    </div>
  );
}

export default App;
