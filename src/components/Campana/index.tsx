import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2, Send, Lightbulb, MessageSquare } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslation } from "react-i18next";
import { Burger } from "../Sidebar/Burger";
import { useCampaingMutation } from "@/hooks/Campaign/useCampaignMutation";
import { toast } from "sonner";

type Message = {
  role: "user" | "bot";
  content: string;
};

export default function CampanaComponent() {
  const [loading, setLoading] = useState(false);
  const [campaignName, setCampaignName] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [campaignIdeas, setCampaignIdeas] = useState("");
  const [customerQuery, setCustomerQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const { addCampaignMutation } = useCampaingMutation();
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "¡Hola! Soy tu asistente de IA para crear campañas de marketing. ¿En qué puedo ayudarte hoy?",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const handleAIAssist = (type: string) => {
    setLoading(true);
    // Simulating AI processing
    setTimeout(() => {
      switch (type) {
        case "ideas":
          setCampaignIdeas(
            "1. Social media contest\n2. Influencer partnership\n3. Limited-time offer"
          );
          break;
        case "response":
          setAiResponse(
            "Gracias por tu consulta. Aquí tienes la información que necesitas..."
          );
          break;
      }
      setLoading(false);
    }, 2000);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage: Message = { role: "user", content: chatInput };
    setChatMessages((prev) => [...prev, userMessage]);
    setChatInput("");

    // Simulate AI response
    setLoading(true);
    setTimeout(() => {
      const botMessage: Message = {
        role: "bot",
        content: `Entiendo que quieres ayuda con "${chatInput}". Aquí tienes algunas sugerencias...`,
      };
      setChatMessages((prev) => [...prev, botMessage]);
      setLoading(false);
    }, 1500);
  };

  const handleCreateCampaign = () => {
    const formattedStartDate = format(new Date(startDate), "dd/MM/yyyy");
    const formattedEndDate = format(new Date(endDate), "dd/MM/yyyy");

    const campaignData: any = {
      fecha_creacion: new Date().toLocaleDateString(), // Aquí también puedes formatear si es necesario
      fecha_inicio: formattedStartDate,
      nombre: campaignName,
      descripcion: campaignDescription,
      fecha_finalizacion: formattedEndDate,
      tipo_campana: "email",
      clics_totales: 2147483647,
      conversiones_totales: 2147483647,
      google_calendar_event_id: "string",
      google_keep_note_id: "string",
      presupuesto: 0,
      tamaño_audiencia: 2147483647,
      rendimiento: null,
      usuario: 1,
    };
    console.log("Campaña creada: ", campaignData);
    try {
      toast.promise(addCampaignMutation.mutateAsync(campaignData), {
        loading: "Creando campaña...",
        success: "Campaña creada con éxito",
        error: "Error al crear la campaña",
      });
      setCampaignName("");
      setCampaignDescription("");
      setStartDate("");
      setEndDate("");
      setCampaignIdeas("");
      setCustomerQuery("");
      setAiResponse("");
    } catch (error) {
      console.error("Error al crear la campaña", error);
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-4 md:p-6 space-y-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white capitalize">
            {t("campaña")}
          </h1>
          <Burger />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Campaña de Marketing con IA</CardTitle>
            <CardDescription>
              Crea campañas efectivas con la asistencia de Llama 2 AI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="email">Redactar Correo</TabsTrigger>
                <TabsTrigger value="ideas">Generar Ideas</TabsTrigger>
                <TabsTrigger value="response">
                  Respuestas Automáticas
                </TabsTrigger>
                <TabsTrigger value="chatbot">Chatbot IA</TabsTrigger>
              </TabsList>
              <TabsContent value="email">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="campaign-name">Nombre de la Campaña</Label>
                    <Input
                      id="campaign-name"
                      placeholder="Ingrese el nombre de la campaña"
                      value={campaignName}
                      onChange={(e) => setCampaignName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="campaign-description">Descripción</Label>
                    <Textarea
                      id="campaign-description"
                      placeholder="Escriba una descripción"
                      value={campaignDescription}
                      onChange={(e) => setCampaignDescription(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Fecha de Inicio</Label>
                    <Input
                      id="start-date"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-date">Fecha de Finalización</Label>
                    <Input
                      id="end-date"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                  <Button
                    onClick={handleCreateCampaign}
                    disabled={loading}
                    className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded capitalize"
                  >
                    {loading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-4 w-4" />
                    )}
                    Crear Campaña
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="ideas">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="campaign-type">Tipo de Campaña</Label>
                    <Input
                      id="campaign-type"
                      placeholder="Ej: Lanzamiento de producto, Evento, Promoción"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="campaign-ideas">Ideas de Campaña</Label>
                    <Textarea
                      id="campaign-ideas"
                      placeholder="Las ideas generadas aparecerán aquí"
                      value={campaignIdeas}
                      onChange={(e) => setCampaignIdeas(e.target.value)}
                      rows={10}
                    />
                  </div>
                  <Button
                    onClick={() => handleAIAssist("ideas")}
                    disabled={loading}
                    className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded capitalize"
                  >
                    {loading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Lightbulb className="mr-2 h-4 w-4" />
                    )}
                    Generar Ideas
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="response">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="customer-query">Consulta del Cliente</Label>
                    <Textarea
                      id="customer-query"
                      placeholder="Ingrese la consulta del cliente aquí"
                      value={customerQuery}
                      onChange={(e) => setCustomerQuery(e.target.value)}
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ai-response">Respuesta Generada</Label>
                    <Textarea
                      id="ai-response"
                      placeholder="La respuesta generada aparecerá aquí"
                      value={aiResponse}
                      onChange={(e) => setAiResponse(e.target.value)}
                      rows={6}
                    />
                  </div>
                  <Button
                    onClick={() => handleAIAssist("response")}
                    disabled={loading}
                    className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded capitalize"
                  >
                    {loading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <MessageSquare className="mr-2 h-4 w-4" />
                    )}
                    Generar Respuesta
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="chatbot">
                <div className="space-y-4">
                  <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                    {chatMessages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          message.role === "user"
                            ? "justify-end"
                            : "justify-start"
                        } mb-4`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            message.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          }`}
                        >
                          {message.content}
                        </div>
                      </div>
                    ))}
                    <div ref={chatEndRef} />
                  </ScrollArea>
                  <form onSubmit={handleChatSubmit} className="flex gap-2">
                    <Input
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Escribe tu mensaje aquí..."
                      className="flex-grow"
                    />
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded capitalize"
                    >
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                      <span className="sr-only">Enviar mensaje</span>
                    </Button>
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-end">
            {/* <Button className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded capitalize">
              <Send className="mr-2 h-4 w-4" /> Enviar Campaña
            </Button> */}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
