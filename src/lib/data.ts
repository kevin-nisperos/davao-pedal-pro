import type { User, Bike, Rental, Station, BikeStatus, RentalStatus } from './types';

export const users: User[] = [
  { id: 'USR001', name: 'Juan Dela Cruz', email: 'juan.delacruz@example.com', avatarUrl: 'https://picsum.photos/seed/101/100/100', memberSince: new Date('2023-01-15'), totalRentals: 12 },
  { id: 'USR002', name: 'Maria Clara', email: 'maria.clara@example.com', avatarUrl: 'https://picsum.photos/seed/102/100/100', memberSince: new Date('2023-02-20'), totalRentals: 5 },
  { id: 'USR003', name: 'Andres Bonifacio', email: 'andres.bonifacio@example.com', avatarUrl: 'https://picsum.photos/seed/103/100/100', memberSince: new Date('2023-03-10'), totalRentals: 23 },
  { id: 'USR004', name: 'Jose Rizal', email: 'jose.rizal@example.com', avatarUrl: 'https://picsum.photos/seed/104/100/100', memberSince: new Date('2023-05-01'), totalRentals: 8 },
  { id: 'USR005', name: 'Gabriela Silang', email: 'gabriela.silang@example.com', avatarUrl: 'https://picsum.photos/seed/105/100/100', memberSince: new Date('2023-06-12'), totalRentals: 15 },
];

export const bikes: Bike[] = [
  { id: 'DPP-001', model: 'CityCruiser X', status: 'Available', battery: 95, location: 'SM Lanang', lastService: new Date('2024-07-01') },
  { id: 'DPP-002', model: 'EcoRide S', status: 'Rented', battery: 60, location: 'En-route', lastService: new Date('2024-06-25') },
  { id: 'DPP-003', model: 'CityCruiser X', status: 'Locked', battery: 30, location: 'Abreeza Mall', lastService: new Date('2024-07-05') },
  { id: 'DPP-004', model: 'VoltRunner', status: 'Maintenance', battery: 0, location: 'Main Depot', lastService: new Date('2024-07-15') },
  { id: 'DPP-005', model: 'EcoRide S', status: 'Available', battery: 100, location: 'Gaisano Mall', lastService: new Date('2024-07-10') },
  { id: 'DPP-006', model: 'CityCruiser X', status: 'Available', battery: 88, location: 'SM Lanang', lastService: new Date('2024-07-02') },
  { id: 'DPP-007', model: 'VoltRunner', status: 'Rented', battery: 75, location: 'En-route', lastService: new Date('2024-07-11') },
];

export const rentals: Rental[] = [
  { id: 'RNT001', bikeId: 'DPP-002', userId: 'USR001', startTime: new Date(Date.now() - 2 * 60 * 60 * 1000), endTime: null, cost: null, status: 'Ongoing' },
  { id: 'RNT002', bikeId: 'DPP-003', userId: 'USR002', startTime: new Date(Date.now() - 26 * 60 * 60 * 1000), endTime: new Date(Date.now() - 24 * 60 * 60 * 1000), cost: 170, status: 'Overdue' },
  { id: 'RNT003', bikeId: 'DPP-001', userId: 'USR003', startTime: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), endTime: new Date(Date.now() - (3 * 24 * 60 * 60 * 1000 - 3 * 60 * 60 * 1000)), cost: 220, status: 'Completed' },
  { id: 'RNT004', bikeId: 'DPP-007', userId: 'USR004', startTime: new Date(Date.now() - 30 * 60 * 1000), endTime: null, cost: null, status: 'Ongoing' },
  { id: 'RNT005', bikeId: 'DPP-005', userId: 'USR005', startTime: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), endTime: new Date(Date.now() - (5 * 24 * 60 * 60 * 1000 - 1.5 * 60 * 60 * 1000)), cost: 170, status: 'Completed' },
];

export const stations: Station[] = [
  { id: 'STA001', name: 'SM Lanang Premier', location: 'J.P. Laurel Ave, Davao City', capacity: 20, availableBikes: 8 },
  { id: 'STA002', name: 'Abreeza Mall', location: 'J.P. Laurel Ave, Poblacion District, Davao City', capacity: 15, availableBikes: 5 },
  { id: 'STA003', name: 'Gaisano Mall of Davao', location: 'J.P. Laurel Ave, Poblacion District, Davao City', capacity: 25, availableBikes: 18 },
  { id: 'STA004', name: 'SM City Davao', location: 'Quimpo Blvd, Ecoland, Davao City', capacity: 20, availableBikes: 12 },
];
