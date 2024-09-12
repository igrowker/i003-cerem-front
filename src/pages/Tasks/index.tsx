import NotesComponent from "@/components/Notes";
import TasksComponent from "@/components/Tasks";

const TasksPage = () => {
  return (
    <div className="mx-auto container">
      <TasksComponent />
      <NotesComponent />
    </div>
  );
};

export default TasksPage;
