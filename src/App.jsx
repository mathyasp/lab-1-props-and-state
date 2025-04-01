function App() {
  const [counts, setCounts] = useState([1, 4, 3]);

  const updateCount = (index, delta) => {
    const newCounts = [...counts];
    const newValue = newCounts[index] + delta;
    if (newValue >= 0 && newValue <= 10) {
      newCounts[index] = newValue;
      setCounts(newCounts);
    }
  };

  const resetCounts = () => {
    setCounts(counts.map(() => 0));
  };

  const totalCount = counts.reduce((sum, current) => sum + current, 0);

  return (
    <div className="App">
      <h1>Total Count: {totalCount}</h1>
      <button onClick={resetCounts}>Reset All</button>
      {counts.map((value, index) => (
        <Counter
          key={index}
          label={`Counter ${index + 1}`}
          value={value}
          increment={() => updateCount(index, 1)}
          decrement={() => updateCount(index, -1)}
        />
      ))}
    </div>
  );
}