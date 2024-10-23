import { useState } from "react";
const MensageInput = ({agregarMensaje}) => {

    const [contenido, setContenido] = useState("");

    const establecerContenido = (e) => {
        setContenido(e.target.value);
    }

    const enviar = () => {
        if (contenido !== "") {
            agregarMensaje({text: contenido, propietario: "Juan"});
            setContenido("");
        } else {
            console.log("Intento de enviar mensaje sin valor; no válido");
        }
    }
    
    return (
        <div className="cont-writer">
            <textarea 
            id="contentMensg"
            value={contenido}
            onChange={establecerContenido}
            />
            <button onClick={enviar}>#</button>
        </div>
    );
}

export default MensageInput;