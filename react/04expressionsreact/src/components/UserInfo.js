function UserInfo() {
  const userName = "Nasim Haider";
  const userAge = 34;
  const userCurrentLocation = "Qatar";
  const specialClass = "info-about-user";
  const userSalary = (a, b) => a * b;
  const userHolidayRemain = (a, b) => a * b;

  return (
    <>
      <h1>{userName}</h1>
      <h2>{userAge}</h2>
      <h2>{userCurrentLocation}</h2>
      <p>120000 * 12={userSalary(120000, 12)}</p>
      <p>12*3=User can take {userHolidayRemain(12, 3)} days of leave</p>
      <p className={specialClass}> The above info is about {userName} </p>
    </>
  );
}

export default UserInfo;
