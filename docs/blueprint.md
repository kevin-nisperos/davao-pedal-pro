# **App Name**: Davao Pedal Pro

## Core Features:

- User Authentication: Secure user registration and login using Firebase Auth.
- E-bike and Station Locator: Display available e-bikes and rental stations on a map within Davao City, leveraging Firestore data.
- Rental Management: Allow users to start and end rentals via the mobile app, updating Firestore with rental status and timestamps.
- Real-time Rental Tracking: Track rental duration and compute the rental cost based on the specified rates using Firebase Functions.
- Payment and Locking System: Automatically lock e-bikes via a tool if payments are overdue. This is handled by a Firebase Function that monitors payment statuses.
- Admin Dashboard: A React-based dashboard to view and manage e-bikes, renters, rental status and manually lock/unlock bikes, reading data from Firestore.
- Push Notifications: Send push notifications to users via Firebase Functions for rental updates, payment reminders, and alerts when bikes are locked.

## Style Guidelines:

- Primary color: Vivid blue (#29ABE2) to convey trust, technology, and energy.
- Background color: Light blue (#E1F5FE) to create a clean, open, and trustworthy feel.
- Accent color: Orange (#FF9800) for highlights, calls to action, and important alerts.
- Body and headline font: 'PT Sans' (sans-serif) will be used to ensure readability across devices.
- Use consistent and modern icons to represent e-bike status, locations, and actions throughout the app.
- Maintain a clean and intuitive layout across both mobile app and admin panel for ease of use.
- Implement subtle animations to provide feedback on user interactions and enhance the overall experience.