import { useState, useEffect } from "react";
import CreateTask from "./components/CreateTask";
import ListTasks from "./components/ListTasks";
import signup from "./components/signup"; 
import  { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

 function App() {
   const [tasks, setTasks ] = useState([]);

   console.log("tasks", tasks);

   useEffect(() =>{
      setTasks(JSON.parse(localStorage.getItem("tasks")));
   }, []);

  return (
    
    <DndProvider backend={HTML5Backend}>
    <Toaster/>
    <div>
    <signup/>
    </div>
    <div className="bg-slate-100
                      w-screen
                      h-screen 
                      flex 
                      flex-col 
                      items-center 
                      pt-3 
                      gap-16
                      pt-32">
            <CreateTask tasks={tasks} setTasks={setTasks}/>
            <ListTasks tasks={tasks} setTasks={setTasks} />
    </div>
    </DndProvider>
  )
  
}

export default App;