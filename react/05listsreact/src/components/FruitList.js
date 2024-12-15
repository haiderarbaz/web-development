function FruitList() {
  const fruits = ["Apple", "Banana", "Watermelon", "Guava", "DragonFruits"];
  const listItems = fruits.map((fruit) => (
    <li key={Math.random() * 3}>{fruit}</li>
  ));

  return (
    <>
      <h1>List of fruit Itmes</h1>
      <ul>{listItems}</ul>
    </>
  );
}

export default FruitList;
