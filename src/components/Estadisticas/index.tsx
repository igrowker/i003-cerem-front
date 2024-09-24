import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { useEffect, useState } from "react";
import { Burger } from "../Sidebar/Burger";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartConfig,
} from "../ui/chart";

interface CampaignStats {
  date: string;
  emailOpenRate: number;
  clickRate: number;
  conversionRate: number;
}

export default function EstadisticasComponent() {
  const { t } = useTranslation();
  const [stats, setStats] = useState<CampaignStats[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // llamada a una API
      const mockData: CampaignStats[] = [
        {
          date: "01/05",
          emailOpenRate: 25,
          clickRate: 3.5,
          conversionRate: 1.2,
        },
        {
          date: "08/05",
          emailOpenRate: 28,
          clickRate: 4.0,
          conversionRate: 1.5,
        },
        {
          date: "15/05",
          emailOpenRate: 30,
          clickRate: 4.2,
          conversionRate: 1.8,
        },
        {
          date: "22/05",
          emailOpenRate: 32,
          clickRate: 4.5,
          conversionRate: 2.0,
        },
        {
          date: "29/05",
          emailOpenRate: 35,
          clickRate: 5.0,
          conversionRate: 2.2,
        },
      ];
      setStats(mockData);
    };

    fetchData();
  }, []);

  const config: ChartConfig = {
    emailOpenRate: { label: t("email-open-rate"), color: "#8884d8" },
    clickRate: { label: t("click-rate"), color: "#82ca9d" },
    conversionRate: { label: t("conversion-rate"), color: "#ffc658" },
  };

  const renderLineChart = (dataKey: keyof CampaignStats) => (
    <ChartContainer config={config}>
      <LineChart data={stats}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis tickFormatter={percentFormatter} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke={`var(--color-${dataKey})`}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ChartContainer>
  );
  const percentFormatter = (value: number) => `${value.toFixed(2)}%`;

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-4 md:p-6 space-y-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            {t("marketing-statistics")}
          </h1>
          <Burger />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>{t("email-open-rate")}</CardTitle>
            </CardHeader>
            <CardContent>{renderLineChart("emailOpenRate")}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t("click-rate")}</CardTitle>
            </CardHeader>
            <CardContent>{renderLineChart("clickRate")}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t("conversion-rate")}</CardTitle>
            </CardHeader>
            <CardContent>{renderLineChart("conversionRate")}</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
