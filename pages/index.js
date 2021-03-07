import { useState } from "react"

function Contador(){
    var numero = 0
    var setNumero = 0; 
    [numero, setNumero] = useState(1);
    
    function funcao() {
        setNumero(numero + 1);
    }

    return (
        <div>
            {numero}
            <br></br>
            <button type="button" onClick={funcao}>Click</button>

        </div>
    )
}

export default function Home (){
    return (

        <div>
            <h1>
                Olá mundo
                <Contador/>
            </h1>
        </div>

    )
}

