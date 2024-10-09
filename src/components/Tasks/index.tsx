import { useState } from "react";
import { Edit, Trash2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

type Item = {
  id: number;
  title: string;
  date: string;
  type: "task" | "event";
};

export default function TasksComponent() {
  const { t } = useTranslation(); //

  const [items, setItems] = useState<Item[]>([
    { id: 1, title: "Reunión de equipo", date: "2023-06-15", type: "event" },
    { id: 2, title: "Terminar informe", date: "2023-06-16", type: "task" },
  ]);
  const [newItem, setNewItem] = useState({
    title: "",
    date: "",
    type: "task" as const,
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleAddItem = () => {
    if (newItem.title && newItem.date) {
      setItems([...items, { ...newItem, id: Date.now() }]);
      setNewItem({ title: "", date: "", type: "task" });
    }
  };

  const handleEditItem = (id: number) => {
    const itemToEdit = items.find((item) => item.id === id);
    if (itemToEdit) {
      setEditingId(id);
    }
  };

  const handleUpdateItem = () => {
    if (editingId) {
      setItems(
        items.map((item) =>
          item.id === editingId ? { ...newItem, id: editingId } : item
        )
      );
      setNewItem({ title: "", date: "", type: "task" });
      setEditingId(null);
    }
  };

  const handleDeleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleSyncWithGoogle = () => {
    alert("Simulando sincronización con Google Calendar...");
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-4 md:p-6 space-y-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white capitalize">
            {t("tareas")}
          </h1>
        </div>

        <div className="grid gap-4">
          <Card className="w-full  mx-auto shadow-lg">
            <CardHeader></CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex space-x-2 items-center">
                  <Input
                    placeholder={t("titulo")}
                    value={newItem.title}
                    onChange={(e) =>
                      setNewItem({ ...newItem, title: e.target.value })
                    }
                  />
                  <Input
                    type="date"
                    value={newItem.date}
                    onChange={(e) =>
                      setNewItem({ ...newItem, date: e.target.value })
                    }
                  />
                  <Select
                    value={newItem.type}
                    onValueChange={() =>
                      setNewItem({
                        ...newItem,
                      })
                    }
                  >
                    <SelectTrigger className="w-32 capitalize">
                      <SelectValue placeholder="Tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="task" className="capitalize">
                        {t("tareas")}
                      </SelectItem>
                      <SelectItem value="event" className="capitalize">
                        {t("eventos")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    onClick={editingId ? handleUpdateItem : handleAddItem}
                    className="bg-cyanDark text-white hover:bg-cyan-900 capitalize"
                  >
                    {editingId ? t("actualizar") : t("agregar")}
                  </Button>
                </div>

                <ul className="space-y-2">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between bg-gray-50 p-2 rounded shadow"
                    >
                      <span>
                        {item.title} - {item.date} ({item.type})
                      </span>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEditItem(item.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={handleSyncWithGoogle}
                  className="ml-auto flex items-center justify-center bg-cyanDark text-white hover:bg-cyan-900"
                >
                  <Calendar className="mr-2 h-4 w-4" />{" "}
                  {t("sincronizar con Google Calendar")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
