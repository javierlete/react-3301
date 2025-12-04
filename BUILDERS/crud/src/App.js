import {useState} from 'react';
import './App.css';

function App() {
  const [productos, setProductos] = useState(PRODUCTOS);

  return (
    <main>
      <h1>CRUD</h1>

      <Tabla productos={productos} setProductos={setProductos} />
      <Formulario />
    </main>
  );
}

function Tabla({productos, setProductos}) {
  function eliminarProducto(id) {
    console.log('Tabla', 'eliminarProducto', id);

    setProductos(productos.filter(producto => producto.id !== id));
  }
  
  function anyadir() {
    console.log('Tabla', 'anyadir');
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>OPCIONES</th>
        </tr>
      </thead>
      <tbody>
        {productos.map(producto => (
          <FilaProducto key={producto.id} producto={producto} onEliminar={eliminarProducto} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3"></td>
          <td>
            <button onClick={anyadir}>Añadir</button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

function Formulario() {
  function submit(event) {
    event.preventDefault();
    console.log('Formulario', 'submit');
  }

  return (
    <form onSubmit={submit}>
      <input type="number" placeholder="Id del producto" />
      <input type="text" placeholder="Nombre del producto" />
      <input type="number" step=".01" placeholder="Precio del producto" />
      <button type="submit">Guardar</button>
    </form>
  );
}

function FilaProducto({producto, onEliminar}) {
  function editar() {
    console.log('FilaProducto', 'editar', producto.id);
  }

  function eliminar() {
    console.log('FilaProducto', 'eliminar', producto.id);

    onEliminar(producto.id);
  }

  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombre}</td>
      <td>{producto.precio} €</td>
      <td>
        <button onClick={editar}>Editar</button>
        <button onClick={eliminar}>Eliminar</button>
      </td>
    </tr>
  );
}

const PRODUCTOS = [
  {id: 1, nombre: 'Portátil', precio: 1234},
  {id: 2, nombre: 'Monitor', precio: 123},
];

export default App;
