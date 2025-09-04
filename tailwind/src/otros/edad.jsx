import { useState } from "react";

function edad(){
    const[edad,setEdad]=useState("null");
    return(
        <div> 
            {edad === null &&(
                <div className="modal-overlay">
                    <h2>Advertencia</h2>
                    <p>Primero elige tu edad</p>
                    <button onClick={() => setEdad('mayor')} className="modals-button mayor">soy mayor</button>
                    <button onClick={() => setEdad('menor')} className="modals-button menor">soy menor</button>
                </div>
            )}









        </div>
    );
}
export default edad;