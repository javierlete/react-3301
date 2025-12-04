import './App.css';

function App() {
  const productos = PRODUCTOS;

  return (
    <main>
      <h1>CRUD</h1>

      <Tabla productos={productos} />
      <Formulario />
    </main>
  );
}

function Tabla({productos}) {
  function anyadir() {
    console.log('Añadir');
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
          <FilaProducto key={producto.id} producto={producto} />
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
    console.log('Guardar');
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

function FilaProducto({producto}) {
  function editar() {
    console.log('Editar', producto.id);
  }

  function eliminar() {
    console.log('Eliminar', producto.id);
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
