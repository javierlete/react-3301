import { useState } from 'react';
import './App.css';

function App() {
  const PRODUCTO_VACIO = { id: '', nombre: '', precio: '' };

  const [productos, setProductos] = useState(PRODUCTOS);
  const [producto, setProducto] = useState(PRODUCTO_VACIO);

  function anyadir() {
    console.log('App', 'anyadir');

    setProducto(PRODUCTO_VACIO);
  }

  function editar(id) {
    console.log('App', 'editar', id);

    setProducto(productos.find(producto => producto.id === id));

    console.log('App', 'producto a editar', producto);
  }

  function guardar(producto) {
    console.log('App', 'guardar', producto);

    if(producto.id) {
      const indice = productos.findIndex(p => p.id === producto.id);

      if(indice !== -1) {
        const nuevosProductos = [...productos];
        nuevosProductos[indice] = producto;
        
        setProductos(nuevosProductos);
      } else {
        setProductos([...productos, producto]);
      }
    } else {
      producto.id = productos.length ? Math.max(...productos.map(p => p.id)) + 1 : 1;
      
      setProductos([...productos, producto]);
    }
  }

  return (
    <main>
      <h1>CRUD</h1>

      <Tabla productos={productos} setProductos={setProductos} onAnyadir={anyadir} onEditar={editar} />
      <Formulario producto={producto} setProducto={setProducto} onGuardar={guardar} />
    </main>
  );
}

function Tabla({ productos, setProductos, onAnyadir, onEditar }) {
  function editarProducto(id) {
    console.log('Tabla', 'editarProducto', id);

    onEditar(id);
  }

  function eliminarProducto(id) {
    console.log('Tabla', 'eliminarProducto', id);

    setProductos(productos.filter(producto => producto.id !== id));
  }

  function anyadir() {
    console.log('Tabla', 'anyadir');

    onAnyadir();
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
          <FilaProducto key={producto.id} producto={producto} onEditar={editarProducto} onEliminar={eliminarProducto} />
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

function Formulario({ producto,setProducto, onGuardar }) {
  console.log('Formulario', 'producto', producto);

  function submit(event) {
    event.preventDefault();
    console.log('Formulario', 'submit');

    onGuardar(producto);
  }

  return (
    <form onSubmit={submit}>
      <input type="number" placeholder="Id del producto" value={producto.id} onChange={e => setProducto({...producto, id: e.target.value})} />
      <input type="text" placeholder="Nombre del producto" value={producto.nombre} onChange={e => setProducto({...producto, nombre: e.target.value})} />
      <input type="number" step=".01" placeholder="Precio del producto" value={producto.precio} onChange={e => setProducto({...producto, precio: e.target.value})} />
      <button type="submit">Guardar</button>
    </form>
  );
}

function FilaProducto({ producto, onEliminar, onEditar }) {
  function editar() {
    console.log('FilaProducto', 'editar', producto.id);

    onEditar(producto.id);
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
  { id: 1, nombre: 'Portátil', precio: 1234 },
  { id: 2, nombre: 'Monitor', precio: 123 },
];

export default App;
