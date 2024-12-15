function UserLists() {
  const usersDetails = [
    {
      userId: 1,
      userName: "John",
      userAge: 21,
    },
    {
      userId: 2,
      userName: "Kiron",
      userAge: 23,
    },
    {
      userId: 3,
      userName: "Jonathan",
      userAge: 25,
    },
    {
      userId: 4,
      userName: "Sam",
      userAge: 27,
    },
    {
      userId: 5,
      userName: "Laila",
      userAge: 29,
    },
  ];

  return (
    <>
      <h1>Users List</h1>
      {usersDetails.map((users) => (
        <ul key={Math.random() * 5}>
          <li>{users.userId}</li>
          <li>{users.userName}</li>
          <li>{users.userAge}</li>
        </ul>
      ))}
    </>
  );
}
export default UserLists;
