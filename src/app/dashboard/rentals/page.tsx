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
import { format, formatDistanceToNow } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function RentalsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold font-headline tracking-tight">Rentals</h1>
      <div className="border rounded-lg w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rental ID</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Bike</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Cost</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rentals.map((rental) => {
              const user = users.find((u) => u.id === rental.userId);
              const bike = bikes.find((b) => b.id === rental.bikeId);
              const duration = rental.endTime
                ? formatDistanceToNow(rental.endTime, { addSuffix: false, unit: 'hour' })
                : formatDistanceToNow(rental.startTime, { addSuffix: true });

              return (
                <TableRow key={rental.id}>
                  <TableCell className="font-medium">{rental.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src={user?.avatarUrl} alt="Avatar" />
                        <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user?.name}</div>
                        <div className="text-sm text-muted-foreground">{user?.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{bike?.id}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{duration}</span>
                      <span className="text-xs text-muted-foreground">{format(rental.startTime, "PPp")}</span>
                    </div>
                  </TableCell>
                  <TableCell>{rental.cost ? `₱${rental.cost.toFixed(2)}` : "Ongoing"}</TableCell>
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
      </div>
    </div>
  );
}
