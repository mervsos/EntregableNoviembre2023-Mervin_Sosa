import React, { useState } from 'react';
import Card from './Card';

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [libroTitulo, setLibroTitulo] = useState('');
  const [libroDescripcion, setLibroDescripcion] = useState('');
  const [errorMesage, setErrorMesage] = useState('');
  const [ingresoDato, setIngresoDato] = useState(null);

  const ingresoha = (e) => {
    e.preventDefault();

    if (libroTitulo.length < 3 || libroTitulo.startsWith(' ')) {
      setErrorMesage('Por favor chequea que la información sea correcta');
      return;
    }

    if (libroDescripcion.length < 6) {
      setErrorMesage('Por favor chequea que la información sea correcta');
      return;
    }

    setErrorMesage('');
    setIngresoDato({
      title: libroTitulo,
      description: libroDescripcion
    });
  };

  return (
    <div className="App">
      <h1>Información del Libro</h1>
      <form> Ingresar={ingresoDato}
        <input
          type="text"
          placeholder="Título del libro"
          value={libroTitulo}
          onChange={(e) => setLibroTitulo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción del libro"
          value={libroDescripcion}
          onChange={(e) => setLibroDescripcion(e.target.value)}
        />
        <button type="submit">Enviar</button>

      
      </form>
      {errorMesage && <p style={{ color: 'red' }}>{errorMesage}</p>}
      {ingresoDato && <Card data={ingresoDato} />}
    </div>
  );
}

export default App;
