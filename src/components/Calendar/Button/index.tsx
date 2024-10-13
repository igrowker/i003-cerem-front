import { Button } from "@/components/ui/button";
import { View } from "react-big-calendar";
import { useTranslation } from "react-i18next";

interface CalendarControlButtonsProps {
  onTodayClick: () => void;
  onPrevClick: () => void;
  onNextClick: () => void;
  onViewChange: (view: "month" | "week" | "day" | "agenda") => void;
  activeView: View;
}

const CalendarControlButtons: React.FC<CalendarControlButtonsProps> = ({
  onTodayClick,
  onPrevClick,
  onNextClick,
  onViewChange,
  activeView,
}) => {
  const { t } = useTranslation();
  const getButtonClass = (view: View) => {
    return activeView === view
      ? "bg-cyan-800 text-white py-2 px-4 rounded capitalize"
      : "bg-cyan-500 text-white py-2 px-4 rounded capitalize";
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-4 p-2">
        <div className="flex space-x-4">
          <Button
            onClick={onTodayClick}
            className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded capitalize"
          >
            {t("today")}
          </Button>
          <Button
            onClick={onPrevClick}
            className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded capitalize"
          >
            {t("previous")}
          </Button>
          <Button
            onClick={onNextClick}
            className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded capitalize"
          >
            {t("next")}
          </Button>
        </div>

        <div className="flex space-x-4">
          {/* <button
            onClick={() => onViewChange("month")}
            className={getButtonClass("month")}
          >
            {t("month")}
          </button> */}
          <button
            onClick={() => onViewChange("week")}
            className={getButtonClass("week")}
          >
            {t("week")}
          </button>
          <button
            onClick={() => onViewChange("day")}
            className={getButtonClass("day")}
          >
            {t("day")}
          </button>
          {/* <button
            onClick={() => onViewChange("agenda")}
            className={getButtonClass("agenda")}
          >
            {t("schedule")}
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CalendarControlButtons;
