import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { BikeStatus } from "@/lib/types";
import { CheckCircle, Zap, Ban, Wrench } from "lucide-react";

type BikeStatusBadgeProps = {
  status: BikeStatus;
};

export function BikeStatusBadge({ status }: BikeStatusBadgeProps) {
  const statusConfig = {
    Available: {
      variant: "default",
      className: "bg-green-500/20 text-green-700 border-green-500/30 hover:bg-green-500/30 dark:text-green-400",
      icon: <CheckCircle className="mr-1 h-3 w-3" />,
    },
    Rented: {
      variant: "secondary",
      className: "bg-blue-500/20 text-blue-700 border-blue-500/30 hover:bg-blue-500/30 dark:text-blue-400",
      icon: <Zap className="mr-1 h-3 w-3" />,
    },
    Locked: {
      variant: "destructive",
      icon: <Ban className="mr-1 h-3 w-3" />,
    },
    Maintenance: {
      variant: "outline",
      className: "bg-yellow-500/20 text-yellow-700 border-yellow-500/30 hover:bg-yellow-500/30 dark:text-yellow-400",
      icon: <Wrench className="mr-1 h-3 w-3" />,
    },
  };

  const config = statusConfig[status];

  return (
    <Badge variant={config.variant} className={cn("capitalize", config.className)}>
      {config.icon}
      {status}
    </Badge>
  );
}
