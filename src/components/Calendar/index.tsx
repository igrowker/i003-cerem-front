import {
  Calendar,
  dateFnsLocalizer,
  DateLocalizer,
  View,
} from "react-big-calendar";
import { format, parse, startOfWeek, getDay, add, sub, Locale } from "date-fns";
import { enUS, es } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Card, CardContent } from "../ui/card";
import { useTranslation } from "react-i18next";
import { messages } from "./utils";
import { useState } from "react";
import CalendarControlButtons from "./Button";
import { Burger } from "../Sidebar/Burger";
import { useCampaign } from "@/hooks/Campaign/useCampaign";
import { Campaign } from "@/types/Campaign/Campaign";
import { useTasks } from "@/hooks/Tasks/useTasks";

const locales: { [key: string]: Locale } = {
  "en-US": enUS,
  es: es,
};

const minTime = new Date();
minTime.setHours(7, 0, 0);

const maxTime = new Date();
maxTime.setHours(19, 0, 0);

const CalendarComponent = () => {
  const { campaign } = useCampaign({ auth: true, fetchCampaign: true });
  console.log(campaign, "campaign");
  const { tasks } = useTasks({ auth: true });
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [view, setView] = useState<View>("month");
  const [date, setDate] = useState(new Date());

  const localizer: DateLocalizer = dateFnsLocalizer({
    format: (date: Date, stringFormat: string) =>
      format(date, stringFormat, { locale: locales[currentLang] }),
    parse: (dateString: string, stringFormat: string) =>
      parse(dateString, stringFormat, new Date(), {
        locale: locales[currentLang],
      }),
    startOfWeek: (date: Date) =>
      startOfWeek(date, { locale: locales[currentLang] }),
    getDay: (date: Date) => getDay(date),
    locales,
  });

  const campaignEvents = (campaign as Campaign[])
    .filter((item) => item.fecha_inicio)
    .map((item) => {
      const startDate = new Date(item.fecha_inicio as string);

      // Ajustar la hora de inicio de la campaña a una hora razonable, por ejemplo 9:00 AM
      startDate.setHours(9, 0, 0, 0); // 9:00 AM

      const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Dura 1 hora

      return {
        id: item.id,
        title: item.nombre,
        start: startDate,
        end: endDate,
        type: "campaign",
      };
    });

  const taskEvents = tasks.map((task) => {
    const taskDate = new Date(task.fecha);

    const start = new Date(taskDate.setHours(11, 0, 0, 0));

    const end = new Date(taskDate.setHours(13, 0, 0, 0));

    return {
      id: task.id,
      title: task.descripcion,
      start: start,
      end: end,
      type: "task",
    };
  });

  // Combina eventos de campañas y tareas
  const events = [...campaignEvents, ...taskEvents];

  console.log(events, "events");

  const handleToday = () => setDate(new Date());

  const handlePrev = () => {
    setDate((prevDate) => {
      if (view === "month") {
        return sub(prevDate, { months: 1 });
      } else if (view === "week") {
        return sub(prevDate, { weeks: 1 });
      } else if (view === "day") {
        return sub(prevDate, { days: 1 });
      } else if (view === "agenda") {
        return sub(prevDate, { months: 1 });
      }
      return prevDate;
    });
  };

  const handleNext = () => {
    setDate((prevDate) => {
      if (view === "month") {
        return add(prevDate, { months: 1 });
      } else if (view === "week") {
        return add(prevDate, { weeks: 1 });
      } else if (view === "day") {
        return add(prevDate, { days: 1 });
      } else if (view === "agenda") {
        return add(prevDate, { months: 1 });
      }
      return prevDate;
    });
  };
  const handleViewChange = (newView: View) => {
    setView(newView);
  };

  const getFormattedDateRange = () => {
    if (view === "month") {
      return format(date, "MMMM yyyy", { locale: locales[currentLang] });
    }
    if (view === "week") {
      const startOfWeekDate = startOfWeek(date, {
        locale: locales[currentLang],
      });
      const endOfWeekDate = add(startOfWeekDate, { days: 6 });
      return `${format(startOfWeekDate, "dd MMM", {
        locale: locales[currentLang],
      })} - ${format(endOfWeekDate, "dd MMM", {
        locale: locales[currentLang],
      })}`;
    }
    if (view === "day") {
      return format(date, "EEEE, dd MMM yyyy", {
        locale: locales[currentLang],
      });
    }
    if (view === "agenda") {
      return format(date, "MMMM yyyy", { locale: locales[currentLang] });
    }
    return "";
  };

  const eventPropGetter = (event: any) => {
    let backgroundColor = "";
    if (event.type === "task") {
      backgroundColor = "bg-cyan-900";
    } else if (event.type === "campaign") {
      backgroundColor = "bg-green-500"; // Cambia a otro color si es campaña
    }

    return {
      className: backgroundColor,
      style: {
        color: "white", // Color de texto blanco para ambos
      },
    };
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-4 md:p-6 space-y-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white capitalize">
            {t("calendario")}
          </h1>
          <Burger />
        </div>

        <Card className="w-full mx-auto shadow-lg">
          <CalendarControlButtons
            onTodayClick={handleToday}
            onPrevClick={handlePrev}
            onNextClick={handleNext}
            onViewChange={handleViewChange}
            activeView={view}
          />
          <div className="text-xl font-bold text-center flex-grow">
            {getFormattedDateRange()}
          </div>
          <CardContent>
            <div className="grid gap-4">
              <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                events={events}
                messages={messages[currentLang]}
                className="bg-white max-h-[750px]"
                eventPropGetter={eventPropGetter}
                view={view}
                min={minTime}
                max={maxTime}
                onView={handleViewChange}
                date={date}
                onNavigate={(newDate: Date, newView: View) => {
                  setDate(newDate);
                  setView(newView);
                }}
                toolbar={false}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CalendarComponent;
