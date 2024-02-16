import { useState } from "react";

const CodeExample = () =>{
    const [value, setValue] = useState(0);
    console.log(value);
    const sayHello =  () => {
        console.log('hello there');
    };

    sayHello();
    // const sayHello = () => {
    //     console.log('hello There');
    //     setValue(value + 1);
    // };
    // sayHello();
    return(
            <div>
            <h1>value:{value}</h1>
            <button onClick={() => setValue(value+1)}>
                Click me
            </button>
            </div>
        );

};

export default CodeExample;


