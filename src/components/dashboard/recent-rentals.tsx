import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { rentals, users, bikes } from "@/lib/data";
import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function RecentRentals() {
  const recentRentals = rentals.slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Rentals</CardTitle>
        <CardDescription>A quick look at the latest rental activity.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead className="hidden sm:table-cell">Bike</TableHead>
              <TableHead className="hidden md:table-cell">Started</TableHead>
              <TableHead>Cost</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentRentals.map((rental) => {
              const user = users.find((u) => u.id === rental.userId);
              const bike = bikes.find((b) => b.id === rental.bikeId);
              return (
                <TableRow key={rental.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src={user?.avatarUrl} alt="Avatar" />
                        <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="font-medium">{user?.name}</div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{bike?.id}</TableCell>
                  <TableCell className="hidden md:table-cell">{format(rental.startTime, "PPP p")}</TableCell>
                  <TableCell>{rental.cost ? `₱${rental.cost.toFixed(2)}` : 'N/A'}</TableCell>
                  <TableCell>
                    <Badge variant={
                      rental.status === 'Completed' ? 'default'
                      : rental.status === 'Ongoing' ? 'secondary'
                      : 'destructive'
                    }>{rental.status}</Badge>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
