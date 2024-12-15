export default function User2Data(props) {
  return (
    <>
      <img src={props.img} alt={props.name} />
      <h1>
        Name: <small>{props.name}</small>
      </h1>
      <p>
        <b>Age:</b> {props.age}
      </p>
      <p>
        <b>Hobbies:</b> {props.hobbies.join(" ")}
      </p>
      <p>
        <b>Location:</b> {props.location}
      </p>
    </>
  );
}
