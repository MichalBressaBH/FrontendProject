type Props = {
  name: string;
  id: number;
  types: TypeSlot[];
  image: string;
  hp: number;
  weight: number;
  height: number;
};

interface Type {
  name: string;
  url: string;
}

interface TypeSlot {
  slot: number;
  type: Type;
}

export const Card = (props: Props) => {
  return (
    <div className="card">
      <img alt={props.name} src={props.image} className="card-image" />
      <h2>
        {props.name} #{props.id}
      </h2>
      <p>
        HP:{props.hp} Weight:{props.weight} Height:{props.height}
      </p>
      <p className="types-container">
        {props.types.map((item) => (
          <span className={item.type.name} key={item.type.name}>
            {item.type.name}
          </span>
        ))}
      </p>
    </div>
  );
};

// props.types.forEach((item)=> <span className={item.type.name}>{item.type.name}</span>)
// in css make css rule for each pokemon type

Card.defaultProps = {
  alt: "Pokemon picture",
  image: "https://via.placeholder.com/150",
  name: "Pokemon Card",
  id: 0,
  types: ["normal"],
  hp: 1,
  weight: 1,
  height: 1,
};
