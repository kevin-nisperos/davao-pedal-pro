import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { stations } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function StationsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold font-headline tracking-tight">Stations</h1>
      <div className="border rounded-lg w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Station Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead>Capacity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stations.map((station) => (
              <TableRow key={station.id}>
                <TableCell className="font-medium">{station.name}</TableCell>
                <TableCell>{station.location}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{station.availableBikes} Bikes</Badge>
                </TableCell>
                <TableCell>{station.capacity} Total Docks</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
