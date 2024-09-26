import NotesComponent from "@/components/Notes";
import TasksComponent from "@/components/Tasks";
import TareasService from "../../services/TareasService";
import { useEffect } from "react";

const TasksPage = () => {
  // const [tareas, setTareas] = useState<string[]>([]);

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const data = await TareasService.getTareas();
        console.log(data);
        // setTareas(data);
      } catch (error) {
        console.error("Error fetching tareas:", error);
      }
    };

    fetchTareas();
  }, []);
  return (
    <div className="mx-auto h-screen container overflow-auto">
      <TasksComponent />
      <NotesComponent />
    </div>
  );
};

export default TasksPage;
