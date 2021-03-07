import { useState } from "react"
import Link from "next/link"

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
            </h1>

            <h3>Primeira página</h3>
            <Link href="segundo"><a href="/segundo">Segunda</a></Link>
            
            <Contador/>
            
        </div>

    )
}

