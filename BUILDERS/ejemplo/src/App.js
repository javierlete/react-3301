import './App.css';
import LabelInput from './LabelInput';
import Titulo from './Titulo';

function App() {
  function valorCambiado(valor) {
    console.log('En APP', valor);
  }

  return (
    <main>
      <header className='App'>
        <h1>Ejemplo</h1>
      </header>

      <Titulo />

      <form>
        <LabelInput etiqueta="Nombre" valorInicial="Javier" valorCambiado={valorCambiado} />
        <LabelInput etiqueta="Apellidos" valorInicial="Lete" />
        <LabelInput etiqueta="Email" valorInicial="javier@email.net" />

        <button>Aceptar</button>
      </form>
    </main>
  );
}

export default App;
