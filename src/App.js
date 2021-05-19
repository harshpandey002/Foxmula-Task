import { useState } from "react";
import "./App.css";
import TaskOne from "./components/TaskOne/TaskOne";
import TaskTwo from "./components/TaskTwo/TaskTwo";

function App() {
  const [task, setTask] = useState(true);
  return (
    <div>
      {task ? <TaskOne setTask={setTask} /> : <TaskTwo setTask={setTask} />}
    </div>
  );
}

export default App;
