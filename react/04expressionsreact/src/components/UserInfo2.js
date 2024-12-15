function UserInfo2() {
  const userName = "Akhtar Imam";
  const userAge = 36;
  const userCurrentLocation = "Abu Dhabi";
  const userSalary = (a, b) => a * b;
  const userHolidayRemain = (a, b) => a * b;
  const specialClass = "info-about-user2";

  return (
    <>
      <h1>{userName}</h1>
      <h2>{userAge}</h2>
      <h3>{userCurrentLocation}</h3>
      <p>
        Annual salary of {userName} is {userSalary(175000, 12)}
      </p>
      <p>
        {userName} can take {userHolidayRemain(12, 3)} days of leave.
      </p>
      <p className={specialClass}>The above info is about {userName}</p>
    </>
  );
}

export default UserInfo2;
