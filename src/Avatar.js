import "./styles.css";
import dataX from "./Data"; //importa el default como dataX

export default function Curriculum() {
  let index = Math.floor(Math.random() * dataX.length); //genera un numero aleatorio con rango de la cantidad de elementos

  return (
    //devuelbe los elementos
    <div className="All">
      <div className="App">
        <img
          src="https://api.minimalavatars.com/avatar/random/png"
          alt="avatar"
        />
        <div className="info">
          <div className="name">
            <h2> {dataX[index].name}</h2>
            <h3> {dataX[index].planet}</h3>
          </div>
          <h5> {dataX[index].text}</h5>
        </div>
      </div>
    </div>
  );
}
