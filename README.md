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
  7. UUID

### Tailwind Configuration:

Configure Tailwind CSS and and theme colors in `tailwind.config.js` file.

### Theme Context:

ThemeContext is a custom React context that provides a theme to the application. It allows the application to switch between light and dark themes.

  1. Transfer theme logic from Settings Page to ThemeContext

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

  #### Doctor UI For Left Hero 

    1. Create heroContent file that will contain content for patient and doctor UI
    2. Fill in the content for the doctor UI in left hero component based on the heroContent file

    2. Create a Speciality Menu component and mount it on Home page
        a. Add speciality data and create a card for each speciality.
        b. Each card will have a speciality name and speciality image.
        e. Each card will be a clickable link to the doctor list page of that speciality.


### Appointment Context

Appointment context is a global state that will be used to store the appointment data for the patient.

  1. Add dummy data for the appointments as an array of objects.
  2. Create a state variable to store the appointments and initialize it with empty array.
  3. Once the component mounts, map through the appointments data and find the appointed patients. Assign this to a variable.
  4. Set the appointments state variable with appointed patients.
  5. Wrap the relevant components and pages with the AppointmentContext.Provider (MyAppointmentsPage and DoctorsAppointments)

#### Doctors Appointments

Doctors appointments will be a list of some appointments for the doctor.

  1. Create a DoctorsAppointments component and mount it on Home page if the user is a doctor.
  2. Retrieve appointments array from the AppointmentContext.
  3. Loop through the appointments and create a card for each appointment.
  4. Each card will have a patient name, patient image, appointed date and time, and appointment status.
  5. Add a button to view all appointments which will navigate to MyAppointmentsPage.

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


### Doctor Statistics Context

The Doctor Statistics Context will manage patient statistics, appointment metrics, ratings data, performance indicators, and doctor reviews.

  1. Create DoctorStatsContbextProps interface that will have doctor stats, ratings, reviews and performance indicators.
  2. Create a state variables to store the doctor stats, ratings, reviews and performance indicators. Initialize them with dummy data.


### Doctor Statistics Component

The Doctor Statistics component displays doctor statistics, ratings, reviews, and performance indicators.

  1. Create a DoctorStats component and mount it on Home page if the user is a doctor.
  2. Wrap the component's children with DoctorStatsContext.Provider.

      a. Create a StatsGrid component and mount it on DoctorStats component.
      b. Create a StatCard component and mount it on StatsGrid component. The cards will display today's appointments, total appointments, completed appointments, and overall rating.
      c. Create a button to view all stats and navigate to the DoctorStats page.


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

### Banner Component

Banner component will have a heading, a paragraph, and a button for booking an appointment or creating an account.

  1. Create a Banner component and mount it on Home page
    a. Create left side of the banner which will have a heading, a paragraph, and a button for booking an appointment or creating an account

      #### Update for Doctor UI

        i. Create a bannerContent.ts file that will contain content for patient and doctor UI
        ii. Update LeftBannerSide component to use the content from bannerContent based on the user type

    b. Create right side of the banner which will have a image for both doctor and patient UI

  
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

  1. Get doctorID and patientID from the URL using useParams hook and store them in a constant
  2. Set state variables to store the doctor info and patient info
  3. Fetch and update the doctor info whenever the doctorID and doctors array changes
  4. Fetch and update the patient info whenever the patientID and patients array changes
  5. Set a state variable to store slot index
  6. Set a state to store selected time slot and initialize it with empty array
  7. Set a state to store slot time and initialize it with empty string
  8. Set a state to store appointed doctors and initialize it with data from local storage
  9. Set a state to store appointed patients and initialize it with data from local storage
  10. For the `appointedPatients` state:
    a. Initialize it with data from local storage if available
    b. If no data exists in local storage, create sample data with the first 3 patients from the patients array
    c. Each appointed patient object has a structure with:
      i. `patientInfo`: Contains the full patient information object
        - Add medical history to the patient object
        
      ii. `appointedTime`: Contains the appointment time slot information
        - For sample data, times are set to "10:00 AM", "11:00 AM", and "12:00 PM" for the first three patients respectively

    d. This data structure allows doctors to view their appointed patients with relevant appointment details
    e. The state is persisted to local storage whenever it changes, ensuring data persistence across page refreshes

  11. The context provides methods to update both `appointedDoctors` and `appointedPatients` arrays, allowing for appointment management from both the patient and doctor perspectives
  12. Set a state to store a boolean to check if the doctor is booked or not and initialize it with false. This will be per doctor


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

   ###### Bug fix 

    - Retrieves slotIndex and setSlotIndex from BookingContext instead of managing internal state

  b. Create an array of days of the week
  c. Get doctor info from the BookingContext

    d. Create a function to fetch the booking slots from the server
      i. Set doctorSlots with an empty array
      ii. Create a variable to store the date of the current day
      iii. Create a loop to iterate over the days of the week
            1. Create a variable to store current time using new Date()
            2. Create a variable to store end time using new Date()
            3. Set current time and end time to today + i days
            4. Set end time hours to 21:00
            5. For today (i=0): if current hour < 8, set to 8:00; else calculate next 30-min slot
            6. For other days:/ set start time to 8:00
            7. Create time slots array and populate with 30-minute intervals until end time


      iv. Create a variable to store the time slots and set it to an empty array
      v. Create a while loop to check if the current time is before the end time
        1. Set formatted time
        2. Push the formatted time and dateTime to the time slots array
        3. Increase the current time by 30 minutes
      
      vi. Update the doctorSlots state with the time slots array
      vii. Run getAvailableSlots function when the doctor info is updated
      viii. Create a function to handle the slot selection
        - Add the selected time slot to local storage
        - Update the isBooked state to true, based on the doctorID and previous isBooked state

    e. Create a function to cancel the appointment

      i. Remove the selected time slot from local storage
      ii. Update the isBooked state to false based on the doctorID and previous isBooked state

    #### Time slot management

      1. Check if dynamic time slot management is updating based on day selection

    f. Create a function to remove past appointments from appointedDoctors array and update isBooked state

#### Booking Slots Component

  1. Create Booking Days component and mount it on Booking Slots component
    a. Map through the days of the week and create a card for each day (form input)
    b. Add a click event listener to each card that will set the slotIndex to the index of the day
    
  2. Create Booking Time component and mount it on Booking Slots component
    a. Map through the time slots and create a card for each time slot (form input)
    b. Add a scroll functionality (fixed)
    c. Check if time slots are being updated based on day selection
    d. Add a click event listener to each card that will set the slotTime to the time of the card
    
  3. Create a Booking Button
  4. Create a submit function that will book the appointment

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

  #### New Update Profile Type

    1. Create a type for doctor and patient data
    2. Create state variables to store the doctor and patient data and initialize them with dummy data


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

    #### New update 

    1. Update the Profile Info data with the new data from the ProfileContext
    2. Create Profile Data component and mount it on Profile Info component
         a. Add profile data from the ProfileContext based on the user type
         b. Create a coverImage component and mount it on Profile Data component

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
        e. Create other input fields for the user data and display the current data
        f. Style improvements for better user experience
          i. Add hover effects for image uploads
          ii. Enhance button states and transitions
          iii. Implement scrollable modal with sticky header
          iv. Improve form layout and spacing
          v. Add visual feedback for interactive elements
        g. Responsive design implementation
          i. Full-width inputs on mobile, controlled width on larger screens
          ii. Optimized image sizes across breakpoints
          iii. Expanded cover image height for better visual impact
          iv. Adjusted text and spacing for different screen sizes
          v. Maintained hover effects across devices
        h. Create useEditFormInput hook to handle all input change functions
        i. Create a submit button to submit the form

      7. Initialize the editing state back to false### Login Context
### Login Context

Login context will be used to store the user login data and provide it to the Login page.

  1. Create an interface for login data       
    a. Add userType field with 'patient' | 'doctor' type
    b. Add setUserType function to update user type
  2. Create state variables to s`tore the login data
    a. Initialize userType state with 'patient' as default
    b. Add userType and setUserType to context value
  3. Wrap the routes in Script component with the LoginContext provider as the parent component


### Login Page

Login page will be used to log in and sign up the user. A user can either log in or sign up using their email and password. The user can also sign up using their Google account.

  1. Create a button in the Navbar component to navigate to the Login page
      i. Set it in a conditional rendering to show only when the user is not logged in and the user is not on the Login page
  
  2. Create a Login Page and mount it on Script component and provide a route for it
  3. Create a state variable for isSignUp and initialize it with true
  4. Create a Sign Up component and mount it on the Login page if isSignUp is true
    a. Render the Sign Up title and description
    b. Add user type selection
      i. Create radio button group for patient/doctor selection
      ii. Style selection options with visual feedback
      iii. Handle type selection changes
      iv. Show relevant fields based on user type
    c. Create labels and inputs for email, password, confirm password and name
    d. Make the inputs controlled components  
    e. Add placeholders to the inputs and show password toggle icons
    f. Create a component for the input labels and mount it on the Sign Up Form component 
    g. Create a button and a function to handle the sign up button click
    h. Create a span to switch to the Sign In component when the user already has an account
  
  5. Create a Sign In component and mount it on the Login page if isSignUp is false
     a. Render the Sign In title and description
     b. On Form input components, create labels and inputs for both the Sign In and Sign Up components
     c. Create a button and a function to handle the sign in button click
     d. Create a span to switch to the Sign Up component when the user does not have an account

  6. Create a section for the Google aunthentication button for both the Sign In and Sign Up components
  
  
### My Appointments Page

My appointments page will show the user's appointments. It will have a list of appointments with the doctor's name, date, time, and location. The user will be able pay for the appointment and cancel it.

  1. Create a My Appointments Page and mount it on Script component and provide a route for it. Wrap the route with BookingContextProvider
  2. Loop through the doctors array and create a card component and mount it on the My Appointments Page
    a. Create buttons to pay for the appointment and cancel it  
    b. Create Appointment photo component and mount it on the card component
    c. Create Doctor information component and mount it on the card component


    #### Appointed Doctors

    Appointed doctors will be a list of doctors that the user has an appointment with. It will have a list of doctors with the doctor's name, date, time, and location. The user will be able to cancel the appointment.

      1. Create a type for Appointed Doctors
      2. Create a state variable for the appointed doctors and initialize it with an empty array and pass as props

  3. Get appointed doctors from the local storage
  4. If there are no appointed doctors, display a message saying "No Appointments" 
  5. If there are appointed doctors, loop through the appointed doctors array and create a card component and mount it on the Appointed Doctors Page
    a. Pass doctor info as props to the card component
    b. Display the doctor's name, date, time, and location
    c. Create a button to cancel the appointment 


    #### Appointed Patients

    Appointed patients will be a list of patients that the user has an appointment with. It will have a list of patients with the patient's name, date, time, and location. The user will be able to cancel the appointment.

    1. Create a component for the PatientAppointmentCard component and mount it on the My Appointments Page
    2. Improvise the AppointmentPhoto component to display the patient's photo when the user is a doctor
    3. Create a component for the PatientInfo component and mount it on the PatientAppointmentCard component


### Patient Details Context

Patient details context will be used to store the patient's details and appointment details and provide it to the Patient Details page

  1. Create props for the Patient Details context
  2. Create a state variable for the patient and initialize it with null
  3. Create a state variable for active tab and initialize it with "Medical History"
  4. Create a state variable for patient appointment with `appointment type` and initialize it with empty array
  5. Create a function to fetch the patient appointment based on patient id
  6. Find the appointed patient based on the patient id and set the patient details and appointment details
  7. Create a state variables for notes and documents with respective types and initialize them with empty array
  8. Create functions to add and remove documents and update local storage
  9. Create functions to add and remove notes and update local storage

  
### Patient Details Page

Patient details page will show the patient's details; medical history, allergies, notes, prescription, name and contact information. The doctor will be able to add notes, prescription, allergies and medical history.

  1. Create a Patient Details Page and mount it on Script component and provide a route for it


### Settings Context

Settings context will be used to store the user's settings and provide it to the Settings page

  1. Consultation settings (fees, duration, currency)
  2. Availability settings (new patients, online/in-person consultations)
  3. Notification preferences with user-specific controls
    a. Base notifications for all users (email, SMS, appointments, bookings)
    b. Additional settings for doctors (payments, system updates)


### Dark Mode

Dark mode will be a toggleable feature that will change the color scheme of the app to dark mode. It will have a button to toggle the dark mode on and off.

  1. Apply dark mode color scheme to styles.css and components
  2. Create Settings page and mount it on Script component and provide a route for it
    a. Create a toggle button to toggle the dark mode on and off
    b. Add notifications settings **transfer to NotificationSettings component**
    c. Set dark mode to localStorage

  3. Make the inputs in Settings page controlled components with data from SettingsContext
  4. Transfer these settings to theme context
  5. Make the save button disabled if the settings are not changed


### Doctor's Settings Component

Doctor's Settings will be a component that will allow the doctor to set their consultation fee, session duration, availability settings and preferences for online consultation.

  1. Create a Doctor's Settings component and mount it on the Settings page if the user is a doctor
  2. Add labels and inputs for consultation fee, session duration, availability settings and preferences for online consultation
  3. Make the inputs controlled components with data from SettingsContext



### Notifications Settings Component

Notifications Settings will be a component that will allow the doctor to set their notification preferences.

  1. Create a Notification Settings component and mount it on the Settings page
  2. Bring in the notification settings from Settings page
  3. Add more settings for appointment reminders, booking updates, payment reminders, and system updates



### Settings Management Hook

Settings Management Hook will update the settings in the database and update the SettingsContext.

  1. Retrieve consultationSettings, availabilitySettings, notificationSettings, updateConsultationSettings, updateAvailabilitySettings, updateNotificationSettings from SettingsContext
  2. Create functions to update the settings in the local storage and update the SettingsContext
    a. Track what user has changed in the settings
    b. Create an object for newSettings and spread it with consultationSettings, availabilitySettings or notificationSettings. If user has changed any of the settings, update the corresponding property in newSettings
    c. Update consultationSettings, availabilitySettings or notificationSettings with newSettings 

  4. Create a function to update the settings in the localStorage and update the SettingsContext (checkIfChanged)
    a. Create a state for initialSettings and initialize it with consultationSettings, availabilitySettings and notificationSettings
    b. Create a boolean state for hasChanges and initialize it JSON version of newSettings.
      i. If the JSON version of newSettings is not equal to the JSON version of initialSettings, hasChanges will be true
    c. Set isChanged state to hasChanges

  5. Call checkIfChanged in the 3 update functions
  6. Add currency input to the Settings page and update the consultationSettings with the selected currency
  7. Retrieve handleSettingsUpdate from SettingsContext and call it when the user clicks the save button

### Not Found Page

Not Found Page will be a page that will be displayed when the user tries to access a page that does not exist.

  1. Create a Not Found Page and mount it on Script component and provide a route for it


### Loading State

Loading State will be a page that will be displayed when the app is loading.

  1. Create a state for loading in the Script component and initialize it with true
  2. Create a Loading component and create several loading animations components
  3. Use LogoLoading component as the loading animation for the entire app


### Is Authenticated Guard

Is Authenticated Guard will be a component that will check if the user is authenticated and if not, it will redirect the user to the login page.

  1. Make some pages and components that require authentication follow this pattern (LoginPage, BookingSlots, MyAppointmentsPage, SettingsPage)


### Schedule Context Types

Schedule Context Types define the structure for doctor's schedule management. It includes working hours, preferences, available slots, blocked dates and break times.

  1. Create ScheduleContextProps interface
    a. Define schedule object structure:
      i. Working hours with start and end times
      ii. Preferences for slot duration and patient limits
      iii. Available slots array with dates and time slots
      iv. Blocked dates array
      v. Break time with start and end
    b. Define setSchedule function type to update schedule state

### Schedule Context

Schedule Context manages the doctor's schedule configuration and time slot availability. It handles: Working hours and break times, Available and blocked time slots, Appointment status (booked, available, break), Schedule preferences (slot duration, max patients, auto-confirmation), Weekly calendar view state.

  1. Create dummy data for the doctor's schedule configuration and time slot availability
    a. Create ScheduleDummyData.ts file with:
      i. Weekly time slots array with status
      ii. Blocked dates array
      iii. Default preferences object
      iv. Working hours and break time
      v. Consolidated dummy schedule object

  2. Create ScheduleContext using React's Context API
    a. Define interface for context props:
      - schedule: workingHours, availableSlots, blockedDates, breakTime
      - preferences: slotDuration, maxPatientsPerDay, autoConfirmation
      - slot management: index, time, selected slot
    b. Initialize state variables with dummy data
       - Check if the schedule is saved in localStorage, if yes, use it as the initial state. Otherwise, use the dummy data.
    c. Create a state variable for isChanged and set it to false
    d. Provide context values to children components


### Schedule Page

Schedule Page will be a page that will show the doctor's schedule. It will have a list of days with the doctor's schedule for each day. The doctor will be able to manage the schedule, choose the days of the week that he/she will be available, and the time slots that he/she will be available.

  1. Create a Schedule Page and mount it on Script component and provide a route for it
  2. Wrap the Schedule Page's children with ScheduleContextProvider

#### Weekly Calendar Component

Weekly Calendar Component will be a component that will show the doctor's schedule for each day of the week. It will have a list of days with the doctor's schedule for each day. The doctor will be able to manage the schedule, choose the days of the week that he/she will be available, and the time slots that he/she will be available.

  1. Create a Weekly Calendar Component and mount it on the Schedule Page
  2. Retrieve schedule data from ScheduleContext
  3. Create a list of days of the week and map over it to create a list of days with the doctor's schedule for each day. Add date to each day
  4. From the schedule data, retrieve the doctor's slots for each day of the week and map over it to create a list of time slots for each day
  5. Based on slot status:
      a. If slot is booked - display booked status with time
      b. If slot is available/break/blocked - show select element with status options
      c. Style slots differently based on their status (green for available, yellow for booked, gray for break)

  6. Add time to selected element
  7. Create a button to save the schedule
  8. Make the button disabled if the schedule is not changed
  9. On button click, send the updated schedule to the backend


### Schedule Management Hook

Schedule management hook handles all schedule-related operations and state management.

  1. Initialize state variables
    a. Create tempSchedule state to store schedule changes
    b. Create isChanged state to track modifications
    c. Get schedule data from ScheduleContext

  2. Handle status updates
    a. Create handleInputChange function that:
      i. Takes event, date and slotIndex as parameters
      ii. Extracts status and time from selected value
      iii. Formats value to match data structure (time - status)
      iv. Updates tempSchedule with new formatted value
      v. Updates main schedule state
      vi. Sets isChanged flag for save button activation

  3. Track state changes
    a. Monitor tempSchedule updates
    b. Compare with original schedule
    c. Enable/disable save functionality based on changes
    
  4. Save schedule changes
     a. Save updated schedule to local storage once schedule data and isChanged flag change
     b. Set schedule data with updated tempSchedule 
     c. Reset isChanged flag

### Schedule Slots Component

Schedule slots component will be used to display the doctor's schedule. 

  1. Create a Schedule Slots Component and mount it on the Weekly Calendar Component
  2. Transfer the schedule UI from the Weekly Calendar Component to the Schedule Slots Com