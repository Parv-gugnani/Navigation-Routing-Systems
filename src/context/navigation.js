import { Children, createContext } from "react";


const NavigationContext = createContext();

const NavigationProvider(){
    return <NavigationContext.Provider value={{}}>
        {Children}
    </NavigationContext.Provider>;
}