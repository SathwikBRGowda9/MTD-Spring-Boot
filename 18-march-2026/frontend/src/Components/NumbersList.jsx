function NumberList() {
  const letters = ["A", "B", "C", "D", "E", "F", "G"];

  return (
    <div>
      <h2>Letters List</h2>

      {letters.map((letter) => (
        <p key={letter}>{letter}</p>
      ))}
    </div>
  );
}

export default NumberList;