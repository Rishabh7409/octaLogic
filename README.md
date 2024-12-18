# Vehicle booking web application
Crud Application using NodeJS, ReactJs, ExpressJs, MUI, Mysql

# Vehicle booking System
A simple Boooking list built using React, Node.js, and an in-memory database (Mysql). The application allows users to view, add, bookings records via a clean and intuitive interface.

# Features
1. Booking List and Details
 Displays a list of booking showing their Name and Vehicle.
 Clicking "Book Vehicle" opens a modal or a new view with the form taken first name and last name.
# Tech Stack
Frontend
 React: Built using functional components and hooks.
 MUI: using for form to taken input from user
 CSS: For basic styling.
Backend
 Node.js with Express: Provides a REST API for booking management.
 In-memory database: Booking data is stored in a Mysql.
 
# API Endpoints
The backend provides the following RESTful API endpoints:

GET /api/vehicle-types: Retrieves the list of all vehicle type by wheels.

GET /api/vehicles: Retrieves details of a specific type of vehicle by type_id.

GET /api/bookings: Retrieves the list of all bookings.

POST /api/book-vehicle: add the booking data.

# Setup Instructions
To run the project locally, follow these steps:

1. Clone the repository
bash
Copy code
git clone https://github.com/Rishabh7409/octaLogic.git
cd octaLogic

3. Install dependencies
 # Backend
Navigate to the backend folder and install dependencies:

cd vehicle-booking-backend

npm install

run seeder to create vehicle data

node seeders/seedData.js

Run the Node.js backend server:

npm run dev

The backend will start on http://localhost:5000.

 # Frontend
Navigate to the frontend folder and install dependencies:

cd vehicle-booking-frontend

npm install

Run the React frontend:

npm run dev

The frontend will be available at http://localhost:5173.

 Test the application
   
Navigate to http://localhost:5173 to view the Booking List.

Add records.

# Screenshots

Booking List View:

![image](https://github.com/user-attachments/assets/6eea4f00-9372-4a96-9f5b-6864d4053898)

First page of booking:

![image](https://github.com/user-attachments/assets/d2a05828-7a07-4d44-9a58-a5490cf2ebd4)

Second page of booking:

![image](https://github.com/user-attachments/assets/c2bd18fe-ca2b-427a-9208-aac695487b73)

Third page of booking:

![image](https://github.com/user-attachments/assets/be46dd10-c405-4777-998e-eb8e77c01896)

Forth page of booking:

![image](https://github.com/user-attachments/assets/02c763c5-e7dc-4da4-b06e-539273f6f10b)

Fifth page of booking:

![image](https://github.com/user-attachments/assets/9ea238ae-b54e-472d-8645-0077265b96a7)




Thank you
