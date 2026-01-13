'use client';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { date: "Mon", rentals: Math.floor(Math.random() * 20) + 10 },
  { date: "Tue", rentals: Math.floor(Math.random() * 20) + 15 },
  { date: "Wed", rentals: Math.floor(Math.random() * 20) + 12 },
  { date: "Thu", rentals: Math.floor(Math.random() * 20) + 20 },
  { date: "Fri", rentals: Math.floor(Math.random() * 20) + 25 },
  { date: "Sat", rentals: Math.floor(Math.random() * 20) + 30 },
  { date: "Sun", rentals: Math.floor(Math.random() * 20) + 28 },
];

const chartConfig = {
  rentals: {
    label: "Rentals",
    color: "hsl(var(--primary))",
  },
};

export function RentalsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Rental Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <ResponsiveContainer>
            <BarChart data={chartData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} width={30} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Bar dataKey="rentals" fill="var(--color-rentals)" radius={8} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
