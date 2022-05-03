import "./card.style.css";

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default Card;
