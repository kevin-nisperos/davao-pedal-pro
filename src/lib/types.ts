export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  memberSince: Date;
  totalRentals: number;
};

export type BikeStatus = 'Available' | 'Rented' | 'Locked' | 'Maintenance';

export type Bike = {
  id: string;
  model: string;
  status: BikeStatus;
  battery: number; // Percentage
  location: string;
  lastService: Date;
};

export type RentalStatus = 'Ongoing' | 'Completed' | 'Overdue';

export type Rental = {
  id: string;
  bikeId: string;
  userId: string;
  startTime: Date;
  endTime: Date | null;
  cost: number | null;
  status: RentalStatus;
};

export type Station = {
  id: string;
  name: string;
  location: string;
  capacity: number;
  availableBikes: number;
};
