import { OverviewCards } from "@/components/dashboard/overview-cards";
import { RecentRentals } from "@/components/dashboard/recent-rentals";
import { RentalsChart } from "@/components/dashboard/rentals-chart";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold font-headline tracking-tight">Dashboard</h1>
      <OverviewCards />
      <div className="grid gap-6 md:grid-cols-2">
        <RentalsChart />
        <RecentRentals />
      </div>
    </div>
  );
}
