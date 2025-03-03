import './App.css'

function App() {
 const [name, setName] = useState('Sofía');
 const [newName, setNewName] = useState('');

 const cambiarNombreClick = (nombreSeleccionado) => {
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
    <div>
    <h2>Teacher Name: {name}</h2>
    <ul>
        <li onClick={() => cambiarNombreClick("Data")}>Data</li>
        <li onClick={() => cambiarNombreClick("Reyes")}>Reyes</li>
        <li onClick={() => cambiarNombreClick("Yolanda")}>Yolanda</li>
    </ul>

    <form onSubmit={changeName}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Añade un nombre"
        />
        <button type="submit">Add</button>
    </form>
    </div>
 );
}

export default App
