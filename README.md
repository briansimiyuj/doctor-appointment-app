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
  6. Tailwind-scrollbar

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

### Currency Context

The Currency Context provides currency conversion functionality throughout the application.

  1. Create a CurrencyContext using React's Context API
    a. Define interface for context props:
      - currency: string for currency code
      - setCurrency: function to update currency
      - rate: number for conversion rate
      - setRate: function to update rate
      - currencySymbol: string for currency symbol (€ or $)

  2. Create CurrencyProvider component
    a. Initialize state variables:
      - currency: stores current currency code
      - rate: stores current conversion rate
    b. Provide currencySymbol based on selected currency
    c. Wrap the component tree with CurrencyContext.Provider

  3. Usage in components:
    a. Import CurrencyContext and useContext
    b. Access currency values and functions using useContext hook
    c. Use setCurrency to change currency
    d. Use rate for price conversions
    e. Use currencySymbol to display correct currency symbol



### Top Doctors Component

The Top Doctors component displays a list of top doctors.

  1. Create a TopDoctors component and mount it on Home page
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
    b. Create footer menu which will have a list of links
    c. Create right side of the footer which will have a contact section
      i. Create social media icons and links
    d. Create copyright section which will have a /paragraph


### About Page

The About page is a simple page that explains what MediCare is and what it does. It will have a heading, an image, about text and WhyChooseUs section.

  1. Create a About page and mount it on Script component and provide a route for it
    a. Create a heading
    b. Create about image and mount it on About page
    c. Create about text and mount it on About page
<!-- Both about image and about text have the same parent div -->
    d. Create WhyChooseUs section and mount it on About page


### Doctors Page

The Doctors page is a page that lists all the doctors in the database. It will have a filter menu, search bar, and a list of doctors.

  1. Create a Doctors page and mount it on Script component and provide a route for it
    a. Create a search bar and mount it on Doctors page

  2. Create a filter menu and mount it on Doctors page
      a. Create a filter menu button
      b. Create a collapsible menu that shows/hides speciality options
      c. Map through specialityData to display all available specialities
      d. Implement active state styling for selected speciality
      e. Add navigation functionality to filter doctors by speciality
      f. Make the menu responsive for both mobile and desktop views

    3. Create Doctors List component and mount it on Doctors page
      a. Initialize a state variable to store the filtered doctors
      b. Create a function to filter doctors based on speciality
      c. Run the filter function when the speciality and doctors data change
      d. Add a route for speciality page that will show all doctors with that speciality
      e. Map through the filtered doctors and create a card for each doctor
      f. Each card will have a doctor name, doctor image, availability status and doctor speciality
      

### Booking Context

Booking context will be used to store the booking data and provide it to the Booking page.

  1. Get doctorID from the URL using useParams hook and store it in a  constant
  2. Set a state variable to store the doctor info
  3. Fetch and update the doctor info whenever the doctorID and doctors array changes


### Booking Page

Booking page will have doctor details, booking slots and related doctors.

  1. Create a Booking page and mount it on Script component and provide a route for it
  2. Wrap the Booking page with the BookingContext provider as the parent component
  3. Create a Doctor Details component and mount it on Booking page
    a. Create a Doctor image component and mount it on Doctor Details component
    b. Create a Doctor info component and mount it on Doctor Details component
        i. Provide doctor name with a verified icon
        ii. Provide doctor speciality, degree, and experience
        iii. Provide doctor about text
        iv. Provide doctor rate

  4. Create a Booking Slots component and mount it on Booking page

    #### Booking Slots Hook

  Booking slots hook will be used to fetch the booking slots from the server and store them in a state variable. It will also provide a function to update the booking slots when the doctorID changes.

  a. Create a state variable to store doctor slots, slotIndex and slotTime
  b. Create an array of days of the week
  c. Get doctor info from the BookingContext

  d. Create a function to fetch the booking slots from the server
    i. Set doctorSlots with an empty array
    ii. Create a variable to store the date of the current day
    iii. Create a loop to iterate over the days of the week
      1. Create a variable to store current time
      2. Increase current time by i (i is the index of the day)
      3. Create a variable to store the end time of the current day
      4. Increase the end time by i 
      5. Set the end time to be 21:00 
      6. Check today matches with the current time. If it does, set the next slot to next hour; if it's past 08:00 and set the next slot to 08:00 next day
      7. If the minute is 0, set the minute to 30; if it's 30, set the minute to 0

    iv. Create a variable to store the time slots and set it to an empty array
    v. Create a while loop to check if the current time is before the end time
      1. Set formatted time
      2. Push the formatted time and dateTime to the time slots array
      3. Increase the current time by 30 minutes
    
    vi. Update the doctorSlots state with the time slots array
    vii. Run getAvailableSlots function when the doctor info is updated

#### Booking Slots Component

  1. Create Booking Days component and mount it on Booking Slots component
    a. Map through the days of the week and create a card for each day
    b. Add a click event listener to each card that will set the slotIndex to the index of the day
    
  2. Create Booking Time component and mount it on Booking Slots component
    a. Map through the time slots and create a card for each time slot
    b. Add a scroll functionality
    
  3. Create a Booking Button

#### Related Doctors Component

Related doctors component will show the doctors that are related to the current doctor based on their speciality. 

  1. Create a Related Doctors component and mount it on Booking page
    a. Retrieve the doctor info and  doctor ID from the BookingContext
    b. Create a state to store the related doctors state and set it to an empty array
    c.  Create a variable to store the doctors with the same speciality as the current doctor
    d. Push the doctors with the same speciality to the related doctors state
    e. Map through the related doctors and create a card for each doctor


### Contact Page

Contact page will show the contact information of the clinic and the doctors.

  1. Create a Contact Us Page and mount it on Script component and provide a route for it 
  2. Create a Contact Image component and mount it on Contact Us Page
  3. Create a Contact Info component and mount it on Contact Us Page
  4. Create a Contact Map component and mount it on Contact Us Page


### Profile Context

Profile context will be used to store the user profile data and provide it to the Profile page.

  1. Create a type for userData and address
  2. Create a state variable to store the user data and initialize it with a dummy user data
  3. Create a state variable for editing and initialize it with false


### Profile Page

Profile page will show the user profile data and allow the user to edit the data.

  1. Create a Profile Page and mount it on Script component and provide a route for it
  2. Wrap the the routes in Script component with the ProfileContext provider as the parent component
  3. Create a Profile Image component and mount it on Profile page
    a. Get the user profile image from the ProfileContext and display it

  4. Create a Profile Info component and mount it on Profile page
    a. Get the user profile name from the ProfileContext and display it
    b. Create a Profile Contact component and mount it on Profile Info component
      i. Fill the contact details from the ProfileContext and display it
    
    c. Create a Basic Info component and mount it on Profile Info component
    d. Add a button to edit the profile to Profile Page

    #### Edit Profile Modal

    Edit profile modal will be used to edit the user profile data.  

      1. Make a conditional rendering for the edit profile modal
      2. Add a functionality to the edit button to change the state of the editing variable to true
      3. Create the edit profile modal and mount it on the Profile page
      4. Initialize the editing state to true for a moment in order to design the modal
      5. Create a cancel button to close the modal
      6. Create edit form component and mount it on the edit profile modal
        a. Create a file input to upload the profile picture
        b. Display the current profile picture
        c. Create a function to handle image click which will open the file selector dialog
        d. Create a function to handle image change which will set the profile picture to the selected image
        e. Create other input fields for the user data and display the current data (make a component for them)
          i. Create a function to change the user data
          ii. For every input field, create a function to handle the input change
          
        f. Create useEditFormInput hook to handle all input change functions
          i. Check if the input value is the same as the current value and return

        g. Create a submit button to submit the form
          i. Make the button disabled if the user data is the same as the current data