import './App.css';

function App() {
  return (
    <main>
      <h1>CRUD</h1>

      <Tabla />
      <Formulario />
    </main>
  );
}

function Tabla() {
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
        <FilaProducto producto={{id: 1, nombre: 'Portátil', precio: 1234}} />
        <FilaProducto producto={{id: 2, nombre: 'Monitor', precio: 123}} />
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3"></td>
          <td>
            <button>Añadir</button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

function Formulario() {
  return (
    <form>
      <input type="number" placeholder="Id del producto" />
      <input type="text" placeholder="Nombre del producto" />
      <input type="number" step=".01" placeholder="Precio del producto" />
      <button type="submit">Guardar</button>
    </form>
  );
}

function FilaProducto({producto}) {
  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombre}</td>
      <td>{producto.precio} €</td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  );
}

export default App;
