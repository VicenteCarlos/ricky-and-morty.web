import "./style.css";

const Card = ({ char }) => {
  return (
    <div id="containerCard">
      <div id="contentCard">
        <img src={char.image} alt={char.name} />
        <div className="content">
          <p>{char.species}</p>
          <p>{char.gender}</p>
        </div>
        <strong>{char.status}</strong>
      </div>
      <h2>{char.name}</h2>
    </div>
  );
};

export { Card };
