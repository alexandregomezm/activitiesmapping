import { useState } from "react";
import "./App.css";
import ListActivities from "./components/ListActivities";
import NavegationBar from "./components/NavegationBar";

function App() {
  const [activities, setActivity] = useState([
    {
      id: 1,
      title: "Teste",
      description: "Teste teste teste",
      user: "Alexandre",
      data: "01.12.2025",
    },
    {
      id: 2,
      title: "Teste 2",
      description: "Teste teste teste",
      user: "Barbrinha",
      data: "02.12.2025",
    },
    {
      id: 3,
      title: "Teste 3",
      description: "Teste teste teste",
      user: "Paulinha",
      data: "03.12.2025",
    },
    {
      id: 4,
      title: "Teste 4",
      description: "Teste teste teste",
      user: "Marlon",
      data: "04.12.2025",
    },
  ]);

  return (
    <div className="w-screen h-screen flex bg-blue-600 justify-center p-6">
      <div className="absolute w-4/5 border-3 rounded-md bg-slate-100 space-y-4 p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          R&D Activities Mapping
        </h1>
        <NavegationBar />
        <ListActivities activities={activities} />
      </div>
    </div>
  );
}

export default App;
