import React from 'react';
import './App.css';

function App() {

  //const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;

  const [newItem, setNewItem] = React.useState("");
  const [items, setItems] = React.useState([]);

  const addNewItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> LISTA DE COMPRA</h1>
        <input style={{ fontSize: 24 }} type="text" onKeyPress={e => e.key === 'Enter' && addNewItem()} onChange={e => setNewItem(e.target.value)} value={newItem} />
        <button style={{ fontSize: 24 }} onClick={addNewItem}>Añadir</button>
      </header>
    </div>
  );
}

export default App;
// serve -s build -l 5000