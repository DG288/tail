import React, { useState } from 'react';


function nombre(){
    const [nombre,setnombre] = useState("")

    return(
        <form action="">
            <div>
                <label htmlFor="nombre" type="text">Porner nombre:</label>
                <input type="text" id="nombre" placeholder="Nombre" onChange={e => setnombre(e.target.value)} />
                <button onClick={() => alert(nombre)}>enviar</button>
            </div>
        </form>

    );
}
export default nombre;