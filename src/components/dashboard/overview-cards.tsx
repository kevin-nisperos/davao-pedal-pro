import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bike, Users, Activity, CheckCircle } from "lucide-react";
import { bikes, users, rentals } from "@/lib/data";

export function OverviewCards() {
  const totalBikes = bikes.length;
  const activeRentals = rentals.filter(r => r.status === 'Ongoing').length;
  const totalUsers = users.length;
  const availableBikes = bikes.filter(b => b.status === 'Available').length;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Bikes</CardTitle>
          <Bike className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalBikes}</div>
          <p className="text-xs text-muted-foreground">All bikes in the fleet</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Rentals</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{activeRentals}</div>
          <p className="text-xs text-muted-foreground">Bikes currently in use</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalUsers}</div>
          <p className="text-xs text-muted-foreground">Registered riders</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Available Now</CardTitle>
          <CheckCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{availableBikes}</div>
          <p className="text-xs text-muted-foreground">Ready for new rentals</p>
        </CardContent>
      </Card>
    </div>
  );
}
