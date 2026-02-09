import "./counter.css";

function CounterControls({incrementCount, decrementCount}) {
  return (
    <div className="counter-controls">
      <button
        className="btn secondary"
        onClick={decrementCount}
      >
        −
      </button>

      <button
        className="btn primary"
        onClick={incrementCount}
      >
        +
      </button>
    </div>
  );
}

export default CounterControls;
