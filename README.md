# Doctor's Appointment Booking System

## Description

This is a simple doctor's appointment booking system. It allows users to book appointments with doctors and view their schedules.

## Features

- User registration and login
- Doctor registration and login
- Appointment booking
- View doctor schedule
- View patient list for a doctor
- View appointment history for a patient

## Development

### Dependencies

  1. React-Router-Dom
  2. Axios
  3. React-icons
  4. React-Toastify
  5. Tailwind CSS

### Tailwind Configuration:

Configure Tailwind CSS and and theme colors in `tailwind.config.js` file.

### Navbar Component

  The Navbar component is a reusable component that can be used in any React application. It includes a logo, a search bar, and a user profile dropdown.

    1. Create Menu Icon to show mobile menu
    2. Create a mobile menu component and mount it on Navbar component
      a. Create cross icon to close mobile menu
      b. Create a list of links for the mobile menu
      c. Create a logo for the mobile menu and redirect to home page
    3. Create a profile picture and a dropdown icon
    4. Create a dropdown menu for the profile picture and mount it on Navbar component


### Home Page

  The Home page is the main page of the application. It includes a hero section, a speciality menu, a top doctors section, and a footer.

    1. Create a Hero component and mount it on Home page
        a. Create left side of the hero section which will have a heading, a paragraph, and a button
        b. Create right side of the hero section which will have hero image

    2. Create a Speciality Menu component and mount it on Home page
        a. Add speciality data and create a card for each speciality.
        b. Each card will have a speciality name and speciality image.
        e. Each card will be a clickable link to the doctor list page of that speciality.

    3. Create Currency Context to change currency dynamically
      a. Surround the Script component with the CurrencyContext provider (index.jsx)

    4. Create a Top Doctors component and mount it on Home page
      a. Add heading and description about top doctors
      b. Map through doctors data and create a card for each doctor.
        i. Each card will have a doctor name, doctor image, and doctor speciality
        ii. Each card will be a clickable link to the doctor profile page.
        iii. Create a doctor type in order to accept doctor data as prop
        iv. Set availability status of the doctors randomly
      c. Create a button to view all doctors

    5. Create a Banner component and mount it on Home page
      a. Create left side of the banner which will have a heading, a paragraph, and a button for booking an appointment
      b. Create right side of the banner which will have a image

  
### Footer Component

Footer component will have a logo and a paragraph, footer menu, contact section, and a copyright section.

  1. Create a Footer component and mount it on Script component after the routes

    a. Create left side of the footer which will have a logo and a paragraph