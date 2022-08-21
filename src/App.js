import logo from "./logo.svg";
import "./App.css";
import { StudentProvider } from "./context/data";
import First from "./components/First";

function App() {
  return (
    <StudentProvider>
      <div className="App">
        <First />
      </div>
    </StudentProvider>
  );
}

export default App;
