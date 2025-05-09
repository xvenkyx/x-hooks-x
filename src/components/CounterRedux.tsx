import { useDispatch, useSelector } from "react-redux";
import { CounterDispatch, RootState } from "../redux/store";
import { increment, decrement, reset } from "../redux/counterSlice";

const CounterRedux = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: CounterDispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => dispatch(increment())}>➕ Increment</button>
        <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
        <button onClick={() => dispatch(reset())}>🔁 Reset</button>
      </div>
    </div>
  );
}

export default CounterRedux