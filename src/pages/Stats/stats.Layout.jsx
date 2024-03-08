import { useSelector } from "react-redux";

const Stats = () => {
  const val = useSelector((state) => state.calculator.result);

  return (
    <div>
      <h1>Stats: Calc Result: {val}</h1>
    </div>
  );
};

export default Stats;
