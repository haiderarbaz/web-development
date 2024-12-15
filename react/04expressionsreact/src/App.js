import UserInfo from "./components/UserInfo";
import UserInfo1 from "./components/UserInfo1";
import UserInfo2 from "./components/UserInfo2";

function App() {
  const myName = "Arbaz Haider";
  const multiply = (a, b) => a * b;
  const specialClass = "not-simple-class";
  return (
    <>
      <h1>{myName}</h1>
      <h2>4 * 4 = {4 * 4}</h2>
      <p>My Friend List: {["Saahil", "Raj", "Faizan", "Arshad"]}</p>
      <p>4 * 4 = {multiply(4, 4)}</p>
      <p className={specialClass}>This is a special class</p>
      <UserInfo />
      <UserInfo1 />
      <UserInfo2 />
    </>
  );
}

export default App;
