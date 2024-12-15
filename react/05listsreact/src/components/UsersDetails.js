function UsersDetails() {
  const usersInfo = [
    {
      userId: 1,
      userName: "Sohail",
      userEmail: "sohail@gmail.com",
      userAge: 20,
      userLocation: "Russia",
    },
    {
      userId: 2,
      userName: "Umar",
      userEmail: "umar@gmail.com",
      userAge: 18,
      userLocation: "Delhi",
    },
    {
      userId: 3,
      userName: "Maaz",
      userEmail: "maaz@gmail.com",
      userAge: 16,
      userLocation: "Oman",
    },
    {
      userId: 4,
      userName: "Usman",
      userEmail: "usman@gmail.com",
      userAge: 4,
      userLocation: "Oman",
    },
  ];

  return (
    <>
      <h1>User Info</h1>
      {usersInfo.map((user) => (
        <ul key={Math.random() * 2}>
          <li>{user.userId}</li>
          <li>{user.userName}</li>
          <li>{user.userEmail}</li>
          <li>{user.userAge}</li>
          <li>{user.userLocation}</li>
        </ul>
      ))}
    </>
  );
}

export default UsersDetails;
