import './App.css'
import { useState } from "react";

function App() {
 const [name, setName] = useState('Sofía');
 const [newName, setNewName] = useState('');

 const handleChangeName = (nombreSeleccionado) => {
    setName(nombreSeleccionado);
 };

 const cambiarNombre = (event) => {
    event.preventDefault();
    if (newName.trim() !== "") {
        setName(newName);
        setNewName("");
    }
 };

 return (
    <>
    <h2>Teacher Name: {name}</h2>
    <ul>
        <li onClick={() => handleChangeName("Data")}>Data</li>
        <li onClick={() => handleChangeName("Reyes")}>Reyes</li>
        <li onClick={() => handleChangeName("Yolanda")}>Yolanda</li>
    </ul>

    <form onSubmit={cambiarNombre}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Añade un nombre"
        />
        <button type="submit">Add</button>
    </form>
    </>
 );
}

export default App
