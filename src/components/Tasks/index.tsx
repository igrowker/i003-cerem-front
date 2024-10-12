import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Burger } from "../Sidebar/Burger";
import { useTranslation } from "react-i18next";
import { useTasks } from "@/hooks/Tasks/useTasks";
import LoadingAnimation from "../Loading";
import DeleteTasksDialog from "./Delete";
import EditTasksDialog from "./Edit";
import { Tasks } from "@/types/Tasks/Tasks";
import { useState } from "react";
import { useTasksMutation } from "@/hooks/Tasks/useTasksMutation";
import { formatDate } from "@/common/Helpers/utils";

export default function TasksComponent() {
  const { tasks, isLoading } = useTasks({ auth: true });
  const { addTasksMutation } = useTasksMutation();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [newTask, setNewTask] = useState<Tasks>({
    descripcion: "",
    fecha: "",
    estado: "pendiente",
    usuario: 1,
  });
  const [editingTasks, setEditingTasks] = useState<Tasks | null>(null);

  const handleEditTasks = (tasks: Tasks) => {
    setEditingTasks(tasks);
    setIsEditDialogOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTask = () => {
    if (newTask.descripcion && newTask.fecha) {
      addTasksMutation.mutate(newTask, {
        onSuccess: () => {
          setNewTask({
            descripcion: "",
            fecha: "",
            estado: "pendiente",
            usuario: 1,
          });
        },
      });
    } else {
      console.log("Complete todos los campos antes de agregar una tarea");
    }
  };

  const { t } = useTranslation();

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-4 md:p-6 space-y-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white capitalize">
            {t("tareas")}
          </h1>
          <Burger />
        </div>

        <div className="grid gap-4">
          <Card className="w-full  mx-auto shadow-lg">
            <CardHeader></CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex space-x-2 items-center">
                  <Input
                    placeholder={t("titulo")}
                    name="descripcion"
                    value={newTask.descripcion}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="date"
                    name="fecha"
                    value={newTask.fecha}
                    onChange={handleInputChange}
                  />
                  <Button
                    className="bg-cyanDark text-white hover:bg-cyan-900 capitalize"
                    onClick={handleAddTask}
                  >
                    {t("agregar")}
                  </Button>
                </div>

                <ul className="space-y-2">
                  {tasks.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between bg-gray-50 p-2 rounded shadow"
                    >
                      <span>
                        {item.descripcion} - {formatDate(item.fecha)}
                      </span>
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => handleEditTasks(item)}
                          variant={"ghost"}
                          size={"icon"}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <DeleteTasksDialog id={Number(item.id)} />
                      </div>
                    </li>
                  ))}
                </ul>
                {isEditDialogOpen && editingTasks && (
                  <EditTasksDialog
                    isOpen={isEditDialogOpen}
                    setIsOpen={setIsEditDialogOpen}
                    tasks={editingTasks}
                  />
                )}
                {/* <Button
                  onClick={handleSyncWithGoogle}
                  className="ml-auto flex items-center justify-center bg-cyanDark text-white hover:bg-cyan-900"
                >
                  <Calendar className="mr-2 h-4 w-4" />{" "}
                  {t("sincronizar con Google Calendar")}
                </Button> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
