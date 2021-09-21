import { useState } from "react";

export function Counter() {
    // Vai monitorar a variavel
    const [ counter, setCounter ] = useState(0); 
    // Retorna um array com dois itens
    // o primeiro é seu valor inicial
    // o segundo é a função para atualizar o valor

    function Increment() {
        setCounter(counter + 1) 
        // Aqui eu altero o valor dele
        // E como estou alterando pelo setCounter, ele vai renderizar
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={Increment}>
                Increment
            </button>
        </div>
    )
}