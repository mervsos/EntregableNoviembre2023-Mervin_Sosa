//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card() {
  return (
    <div>
      <h2>Información Ingresada:</h2>
      <p><strong>Título:</strong> {data.titulo}</p>
      <p><strong>Descripción:</strong> {data.descripcion}</p>
    </div>
  );
}

export default Card;
