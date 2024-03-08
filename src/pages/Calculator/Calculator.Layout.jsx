import { useDispatch, useSelector } from "react-redux";
import { add, divide, multiply, subtract } from "./Calculator.Slice";

const Calculator = () => {
  const val = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Result: {val}</h1>

      <button onClick={() => dispatch(add(2))}>Add 2</button>
      <button onClick={() => dispatch(subtract(20))}>Subtract 20</button>
      <button onClick={() => dispatch(multiply(4))}>Multiply 4</button>
      <button onClick={() => dispatch(divide(6))}>Divide 6</button>
    </div>
  );
};

export default Calculator;
