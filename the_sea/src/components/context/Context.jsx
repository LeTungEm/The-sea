import { useState, createContext } from "react";

const Context = createContext();

function Provider({children}){

    const [num, setNum] = useState(0);

    const increateNum = () => {
        setNum(num+1);
    };

    const value = {
        num,
        increateNum
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}

export {Context, Provider}