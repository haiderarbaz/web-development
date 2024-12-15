function UserInfo1() {
  const userName = "Arshad Imam";
  const userAge = 30;
  const userCurrentLocation = "Saudi Arabia";
  const userSalary = (a, b) => a * b;
  const userHolidayRemian = (a, b) => a * b;
  const specialClass = "info-about-user1";

  return (
    <>
      <h1>{userName}</h1>
      <h2>{userAge}</h2>
      <h3>{userCurrentLocation}</h3>
      <p>150000*12={userSalary(150000, 2)}</p>
      <p>12*3={userHolidayRemian(12, 3)}</p>
      <p className={specialClass}>The above info about {userName}</p>
    </>
  );
}

export default UserInfo1;
