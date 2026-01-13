'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { bikes } from "@/lib/data";
import { format } from "date-fns";
import { MoreHorizontal, Lock, Unlock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { BikeStatusBadge } from "@/components/bike-status-badge";
import { useToast } from "@/hooks/use-toast";

export default function BikesPage() {
  const { toast } = useToast();

  const handleAction = (bikeId: string, action: 'lock' | 'unlock') => {
    toast({
      title: `Bike ${action === 'lock' ? 'Locked' : 'Unlocked'}`,
      description: `Bike ${bikeId} has been successfully ${action === 'lock' ? 'locked' : 'unlocked'}.`,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-headline tracking-tight">E-Bikes</h1>
        <Button>Add New Bike</Button>
      </div>

      <div className="border rounded-lg w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Bike ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Battery</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Last Service</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bikes.map((bike) => (
              <TableRow key={bike.id}>
                <TableCell className="font-medium">{bike.id}</TableCell>
                <TableCell>
                  <BikeStatusBadge status={bike.status} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={bike.battery} className="w-24 h-2" />
                    <span>{bike.battery}%</span>
                  </div>
                </TableCell>
                <TableCell>{bike.location}</TableCell>
                <TableCell>{format(bike.lastService, "PP")}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleAction(bike.id, 'lock')}>
                        <Lock className="mr-2 h-4 w-4" />
                        <span>Lock Bike</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleAction(bike.id, 'unlock')}>
                        <Unlock className="mr-2 h-4 w-4" />
                        <span>Unlock Bike</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
