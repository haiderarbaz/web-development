import FruitList from "./components/FruitList";
import UserLists from "./components/UserLists";
import UsersDetails from "./components/UsersDetails";

function App() {
  const numberSytem = [1, 2, 3, 4, 5];
  const listItems = numberSytem.map((number) => (
    <li key={Math.random() * 1}>{number}</li>
  ));
  return (
    <>
      <ul>{listItems}</ul>
      <FruitList />
      <UserLists />
      <UsersDetails />
    </>
  );
}

export default App;
