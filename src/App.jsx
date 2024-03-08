// import { Provider } from "react-redux";
// import UdayStore from "./redux/store";
// import Calculator from "./pages/Calculator/Calculator.Layout";
// import Stats from "./pages/Stats/stats.Layout";

// function App() {
//   return (
//     <Provider store={UdayStore}>
//       <Calculator />
//       <hr />
//       <Stats />
//     </Provider>
//   );
// }

// export default App;

import { Provider } from "react-redux";
import UdayStore from "./redux/store";
//import Calculator from "./pages/Calculator/Calculator.Layout";
//import Stats from "./pages/Stats/Stats.Layout";
import Todo from "./pages/Todos/Todos.Layout";

function App() {
  return (
    <Provider store={UdayStore}>
      <Todo />
    </Provider>
  );
}

export default App;
