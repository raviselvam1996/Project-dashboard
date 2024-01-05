import react, { Children, createContext } from "react";

const gContext = createContext();

function generalCondext(Children){

return <gContext.Provider value={true}>{Children}</gContext.Provider>

}

export default generalCondext;