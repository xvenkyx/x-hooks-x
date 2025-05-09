import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import Stopwatch from "./components/Stopwatch";
import CounterRedux from "./components/CounterRedux";
import CounterUseCallback from "./components/CounterUseCallback";
import CounterUseMemoA from "./components/CounterUseMemoA";

function App() {
  // const [showCounter,setShowCounter] = useState(true)

  return (
    <Router>
      <div className="h-[100vh]">
        <nav className="bg-gray-800 p-4 flex gap-4 text-white items-center h-[7%]">
          <Link
            to="/stopwatch"
            className="hover:text-yellow-300 font-bold text-[100%] border-2 rounded-l-2xl p-1 my-1"
          >
            X-HOOKS-X
          </Link>
          <Link to="/stopwatch" className="hover:text-yellow-300">
            Stopwatch
          </Link>
          <Link to="/counter" className="hover:text-yellow-300">
            Counter
          </Link>
          <Link to="/counter-redux" className="hover:text-yellow-300">
            Counter-Redux
          </Link>
          <Link to="/counter-usecallback" className="hover:text-yellow-300">
            Counter-uCB
          </Link>
          <Link to="/counter-usememoa" className="hover:text-yellow-300">
            Counter-uM-A
          </Link>
        </nav>

        <div className="flex justify-center items-center h-[93%]">
          <Routes>
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/counter-redux" element={<CounterRedux />} />
            <Route path="/counter-usecallback" element={<CounterUseCallback />} />
            <Route path="/counter-usememoa" element={<CounterUseMemoA />} />
            <Route path="*" element={<Stopwatch />} /> {/* Default route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
