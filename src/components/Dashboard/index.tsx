import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { CheckCircle, ListTodo } from "lucide-react";
import { Burger } from "../Sidebar/Burger";
import { useTasks } from "@/hooks/Tasks/useTasks";
import { formatDate } from "@/common/Helpers/utils";

export default function DashboardComponent() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const { tasks } = useTasks({
    auth: true,
  });
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-4 md:p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <Burger />
        </div>
        {/* Resumen */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <Card className="bg-[#F7FAFC] border-[#779EBF]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#08121F]">
                Tareas Completadas
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-[#0097B2]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#08121F]">12/20</div>
              <Progress value={60} className="mt-2" />
            </CardContent>
          </Card>
          <Card className="bg-[#F7FAFC] border-[#779EBF]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#08121F]">
                Tareas Pendientes
              </CardTitle>
              <ListTodo className="h-4 w-4 text-[#0097B2]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#08121F]">8</div>
              <p className="text-xs text-[#779EBF]">-3 comparado con ayer</p>
            </CardContent>
          </Card>
        </div>

        {/* Tareas y Calendario */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Lista de Tareas */}
          <Card className="bg-[#F7FAFC] border-[#779EBF]">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-[#08121F]">
                  Tareas Pendientes
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tasks.map((task, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded border-[#779EBF] text-[#0097B2] focus:ring-[#5CE1E6]"
                    />
                    <span className="text-[#08121F]">{task.descripcion} - {formatDate(task.fecha)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Calendario */}
          <Card className="bg-[#F7FAFC] border-[#779EBF]">
            <CardHeader>
              <CardTitle className="text-[#08121F]">Calendario</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
