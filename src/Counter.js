function Counter(props) {

  return (
    <div className="Counter">
      <small>{props.label}</small>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;