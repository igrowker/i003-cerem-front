import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Trash2Icon, PencilIcon } from "lucide-react";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

type Note = {
  id: number;
  title: string;
  content: string;
  lastModified: Date;
};

export default function NotesComponent() {
  const { t } = useTranslation();
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteContent, setNewNoteContent] = useState("");
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);
  const { t } = useTranslation(); //

  const addNote = () => {
    if (newNoteTitle || newNoteContent) {
      setNotes([
        ...notes,
        {
          id: Date.now(),
          title: newNoteTitle,
          content: newNoteContent,
          lastModified: new Date(),
        },
      ]);
      setNewNoteTitle("");
      setNewNoteContent("");
    }
  };

  const updateNote = (id: number, title: string, content: string) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, title, content, lastModified: new Date() }
          : note
      )
    );
    setEditingNoteId(null);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-4 md:p-6 space-y-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white capitalize">
            {t("note")}
          </h1>
        </div>

        <Card className="w-full  mx-auto shadow-lg">
          <CardHeader></CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Label htmlFor="note-title" className="capitalize"> {t("note_title")}</Label>

              <Input
                id="note-title"
                value={newNoteTitle}
                onChange={(e) => setNewNoteTitle(e.target.value)}

                placeholder={t("note_title")}
                className="mb-2"
              />
              <Label htmlFor="note-content" className="capitalize"> {t("contenido")}</Label>

                placeholder={t("titulo")}
                className="mb-2"
              />
              <Textarea
                id="note-content"
                value={newNoteContent}
                onChange={(e) => setNewNoteContent(e.target.value)}

                placeholder={t("contenido")}

                className="mb-2"
              />
              <Button
                onClick={addNote}
                className="ml-auto flex items-center justify-center bg-cyanDark text-white hover:bg-cyan-900 capitalize"
              >
                {t("newNote")}

              </Button>
            </div>
            <ScrollArea className="h-[200px] rounded-md border mt-2">
              {notes.length === 0 ? (
                <p className="text-center text-muted-foreground p-4 capitalize">
                  {t("notasNoGuardadas")}
                </p>
              ) : (
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {notes.map((note) => (
                    <div key={note.id} className="bg-muted p-4 rounded-lg">
                      {editingNoteId === note.id ? (
                        <>
                          <Input
                            value={note.title}
                            onChange={(e) =>
                              updateNote(note.id, e.target.value, note.content)
                            }
                            className="mb-2"
                          />
                          <Textarea
                            value={note.content}
                            onChange={(e) =>
                              updateNote(note.id, note.title, e.target.value)
                            }
                            className="mb-2"
                          />
                          <Button
                            onClick={() => setEditingNoteId(null)}
                            className="capitalize"
                          >
                            {t("save")}
                          </Button>
                        </>
                      ) : (
                        <>
                          <h3 className="font-medium mb-2">{note.title}</h3>
                          <p className="text-sm mb-2">{note.content}</p>
                          <p className="text-xs text-muted-foreground mb-2">
                            Última modificación:{" "}
                            {format(note.lastModified, "dd/MM/yyyy HH:mm")}
                          </p>
                          <div className="flex justify-end space-x-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => setEditingNoteId(note.id)}
                            >
                              <PencilIcon className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => deleteNote(note.id)}
                            >
                              <Trash2Icon className="h-4 w-4" />
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
