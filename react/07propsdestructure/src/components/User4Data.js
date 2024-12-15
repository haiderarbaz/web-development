export default function User4Data({
  img,
  name,
  age,
  hobbies,
  location,
  children,
}) {
  return (
    <>
      <img src={img} alt={name} />
      <h1>
        Name: <small>{name}</small>
      </h1>
      <p>
        <b>Age:</b> {age}
      </p>
      <p>
        <b>Hobbies:</b> {hobbies}
      </p>
      <p>
        <b>Location:</b> {location}
      </p>
      {children}
    </>
  );
}
