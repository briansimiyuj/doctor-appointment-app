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
  6. Add consultation type to the appointment data.

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
  10. Create a function to reschedule the appointment and update the appointment details
    a. Create a setter function to update patient appointments array
    b. Create a deep copy of previous appointments and asssign it to a variable 
    c. Find the appointment to reschedule by matching date and time
    d. If the appointment is found, create an updated appointment object with:
      i. New appointment with updated date and time
      ii. New date and time for the consultation
      iii. New status

    e. Replace the old appointment with the updated one in the appointments array
    f. Save the updated appointments to localStorage using the patient ID as part of the key
    g. Return the updated appointments array to update state
    h. If the appointment is not found, return the original appointments array


  
### Patient Details Page

Patient details page will show the patient's details; medical history, allergies, notes, prescription, name and contact information. The doctor will be able to add notes, prescription, allergies and medical history.

  1. Create a Patient Details Page and mount it on Script component and provide a route for it and wrap the route with BookingContextProvider, AppointmentContextProvider and PatientDetailsContextProvider
  2. If there are no appointment for the patient, show a message saying "No appointment found for this patient"

    ### Patient Header Component

    Patient header component will show the patient's name, photo, and contact information. 

    1. Create a Patient Header component and mount it on the Patient Details Page
      a. Add patient photo component and mount it on the Patient Header component
      b. Create Patient Basic Info component and mount it on the Patient Header component

        #### Patient Basic Info Component

        Patient basic info component will show the patient's name, age, gender, and medical condition.

  3. Create a Patient Contact Info component and mount it on the Patient Details Page

    ### Patient Contact Info Component

    Patient contact info component will show the patient's contact information and address.


    ### Tabs Navigation Component
    
    Tabs navigation component will show the tabs for the patient details page.

    1. Create a Tabs Navigation component and mount it on the Patient Details Page  
    2. Create an array of tabs objects
    3. Map through the tabs array and create a tab button for each tab object
    4. Add an active class to the active tab button
    5. Add an onClick event to the tab button and set the active tab to the tab object's id


    ### Tabs Content Component

    Tabs content component will be a container for the tabs.

    1. Create a Tabs Content component and mount it on the Patient Details Page if the tab ID corresponds to the active tab and pass the tab ID as a prop
    2. Set Tabs Content props with the tab ID and children as props
    3. If the active tab doesn't match the tab ID, return null
    4. Display the tab's children


    #### Appointments Tab Component

    Appointments tab component will show the patient's appointments.

      1. Set the active tab to "Appointments" by default on the Patient Details Context
      2. Create a component for the Appointments Tab and mount it on the Tabs Content component with the id of "Appointments"
      3. Create a component for Appointment and mount it on the Appointments Tab component if there are patient appointments

      ### Appointment Component

      Appointment component will show the appointment details: date, time, consultation type, and status. Each status will have different background color.

      #### Appointment Tab Header Component

      Appointment tab header component will show the appointment title and a button to manage the appointment based on the appointment status.

      ##### Tab Action Button Component

      Tab action button component will show the button to manage the appointment based on the appointment status.

      - 🟢 **Pending appointments** show an "Approve Appointment" button with a checkmark icon and a "Reject Appointment" button with a cross icon.
      - 🔵 **Confirmed appointments** display both "Reschedule" and "Cancel" buttons side by side.
      - ⚪ **Completed appointments** offer an "Add Notes" button for post-appointment documentation.
      - 🔴 **Cancelled appointments** provide a "Schedule New Appointment" button to facilitate rebooking.
      - 🔴 **Rejected appointments** show a "Schedule New Appointment" button to facilitate rebooking.
      - 🟣 **Other statuses** show a generic "Manage Appointment" button as a fallback option.

      1. Create a Tab Action Button component and mount it on the Appointment Tab Header component

     **Buttons Action**

      *Update Appointment Status*: Update appointment function will update the appointment status based on the button clicked.

        1. Add `updateAppointmentStatus` function to the patient details context props
        2. Call the `updateAppointmentStatus` function with the appointment and the new status as parameters 

          a. Create a deep copy of the patient's appointments array
          b. Find the index of the appointment to update
          c. Check if the appointment exists in the array
          d. If the appointment exists, create a new appointment object with the updated status
          e. Replace the appointment at the found index with the new appointment object
          f. Update the patient's appointments array with the new array
          g. Save the updated appointments to localStorage using the patient ID as part of the key
          h. Implement a separate useEffect hook to load appointments from localStorage when the component mounts
          i. Load appointments from localStorage when the component mounts

      *Approve Appointment Button*: Approve appointment button will approve the appointment.

        1. Attach approve appointment function from update patient details hook to the approve appointment button

      *Cancel Appointment Button*: Cancel appointment button will open a modal to confirm the cancellation of the appointment.

        1. Attach open modal function from update patient details hook to the cancel appointment button

      *Reject Appointment Button*: Reject appointment button will reject the appointment.

        1. Attach open modal function from update patient details hook to the reject appointment button

      *Reschedule Appointment Button*: Reschedule appointment button will open a modal to reschedule the appointment.

        1. Attach open modal function from update patient details hook to the reschedule appointment button


      ### Update Patient Details Hook

        Update patient details hook will update the patient details in the database.

      *Approve Function*

          1. Create a function to approve the appointment 

      *Cancel Appointment Function*

       Cancel appointment function will open a modal to confirm the cancellation of the appointment.

        1. Create states for modal visibility and appointment to cancel
        2. Create a function to open the modal which takes the appointment to cancel as a parameter
          a. Set the appointment to cancel state to the appointment parameter
          b. Set the modal visibility state to true

        3. Create a function to close the modal

          a. Set the appointment to cancel state to null
          b. Set the modal visibility state to false

      *Reject Appointment Function*

      Reject appointment function will open a modal to confirm the rejection of the appointment.  

        1. Create a state for appointment to reject and initialize it to null
        2. Create a function to reject the appointment which takes reason and alterntive as parameters
          a. If there is no appointment to reject, exit the function early
          b. Retreive appointment ID from the appointment to reject object (date - time)
          c. Retrieve rejection from local storage using the appointment ID as part of the key 
          d. Create a new rejection object with:
            - The provided rejection reason
            - Any alternative suggestion (or empty string if not provided)
            - Timestamp of when the rejection was made
            - Full appointment details for reference
            
          e. Store the updated rejection reason back into local storage

        3. Create a state for modal visibility and initialize it to false
        4. Create a function to open the modal which takes the appointment to reject as a parameter
          a. Set the appointment to reject state to the appointment parameter
          b. Set the modal visibility state to true

        5. Create a function to close the modal

          a. Set the appointment to reject state to null
          b. Set the modal visibility state to false

      *Reschedule Appointment Function*

      Reschedule appointment function will open a modal to confirm the rescheduling of the appointment.

        1. Create a state for appointment to reschedule and initialize it to null
        2. Create states for modal visibility, new date and new time and initialize them to false and an empty string respectively
        3. Create a function to open the modal which takes the appointment to reschedule as a parameter
          a. Initialize the new date and new time states to the appointment date and time respectively
          b. Set the modal visibility state to true
          c. Set the appointment to reschedule state to the appointment parameter

        4. Create a function to close the modal
          a. Set the appointment to reschedule state to null
          b. Set the modal visibility state to false
          c. Set new date and new time states to null


    ### Modal Context

      Modal context will be used to manage the state of the modal (Handle cancel appointment, reason for cancellation, etc.)

        1. Retrieve updateAppointmentStatus function from the patient details context
        2. Create states for reason, alternative and isConfirmed and initialize them to an empty string and false respectively
        3. Check if the reason is not empty and isConfirmed is true, if both are true, set a boolean state to it
        4. Create a function to handle the cancel appointment

          a. If there is no appointment to cancel or the boolean state is false, return
          b. Call the updateAppointmentStatus function with the appointment to cancel and the 'cancelled' status
          c. Call onClose function to close the modal

        5. Create a function to handle reject appointment
          a. If there is no appointment to reject or the boolean state is false, exit the function early
          b. Call the updateAppointmentStatus function with the appointment to reject and the 'rejected' status
          c. If an onReject callback function is provided, call it with the appointment to reject and the rejection reason
          d. Call onClose function to close the modal


    ### Cancel Appointment Modal Component

      Cancel appointment modal component will be used to confirm the cancellation of the appointment.

      1. Create a Cancel Appointment Modal component and mount it on the Tab Action Button component if showCancelModal state is true 
        a. Set the modal visibility state to true (for development purposes)
        b. Add dummy appointment data for testing purposes and set it to the appointment to cancel state

      2. Create a Modal Body component and mount it on the Cancel Appointment Modal component
      3. Wrap the Modal Body component with a Modal Provider
      4. Create a Reason component and mount it on the Modal Body component
        a. It will have a text area to input the reason for cancellation
        b. If the reason is empty, show an error message

      5. Create an Alternative Input component and mount it on the Modal Body component  
      6. Make the the modal scrollable if the content is too long
      7. Create a Confirmation checkbox component and mount it on the Modal Body component
        a. It will have a checkbox to confirm the cancellation 
        b. If the checkbox is not checked, show an error message

      8. Create a Modal Footer component and mount it on the Cancel Appointment Modal component

        a. It will have a button to close the modal
        b. It will have a button to confirm the cancellation
        c. Make the buttons stacked vertically on smaller screens

      9. Set the modal visibility state back to false and initialize the appointment to cancel state with null

    ### Reject Appointment Modal Component 

    Reject appointment modal component will be used to confirm the rejection of the appointment. It will have a similar structure to the Cancel Appointment Modal component.

    ### Reschedule Modal Context

    Reschedule modal context will be used to manage the state of the modal (Handle rescheduling of the appointment)

      1. Retrieve newDate, newTime, setNewDate, setNewTime from the update patient details hook
      2. Check if the new date and time are not empty and isConfirmed is true, if both are true, set a boolean state to it
      3. Create a function to handle the reschedule confirmation
        a. If there is no appointment to reschedule or the boolean state is false, exit the function early
        b. Call onClose function to close the modal

      4. Create states for selected doctors and available doctors and initialize them to null and doctors in doctors data respectively
      5. Create a function to filter the doctors based on speciality
      6. Create a function to reset the filtered doctors to show all doctors
        a. Filter the current doctor from the available doctors array


    ### Reschedule Modal Component

    Reschedule modal component will be used to confirm the rescheduling of the appointment. 

      1. Create a Reschedule Modal component and mount it on the Tab Action Button component if showRescheduleModal state is true
      2. Create a Modal Body component and mount it on the Reschedule Modal component. Wrap the Modal Body component with a Modal Provider

        #### Date Picker Context

        Date Picker context will be used to manage the state of the date picker (Handle date selection)

          1. Retrieve newDate, setNewDate from the Reschedule Modal context
          2. Create a state for current month and initialize it to a new Date object
          3. Create a state for selected date and initialize it to: if newDate is available, new Date(newDate) else null
          4. Update the selected date state with newDate object if the newDate changes
          5. Update newDate state with the selected date if it is available
          6. Create a function to get days in a month and return an array of days in the month
          7. Create a function to get the first day of the month and return the day of the week
          8. Create a function to navigate to the previous month and update the current month state
          9. Create a function to navigate to the next month and update the current month state
          10. Create a function to check if a date is in the past and return a boolean to check if the date is in the past
          11. Create a function to check if a date is selected and return a boolean to check if the date is selected
          12. Create a function to check if a date is today and return a boolean to check if the date is today
          12. Create a function to handle the date selection and update the selected date state if the date is not in the past
          13. Create a state for isCalendarVisible and initialize it to false
          14. Create functions to handle the calendar visibility and update the isCalendarVisible state
          15. Add a small delay to allow the user to see their selection before closing the calendar
          16. Create a function to check if a date is available and returns a boolean
              a. First check doctorAvailability if provided
              b. Compare date components (day, month, year) rather than timestamps
              c. Fall back to dummySlots when no doctor availability exists
              d. Use schedule.availableSlots as final fallback option
              e. Parse status from slot string format when using schedule data

          17. Generate available dates array for highlighting in calendar
              a. Filter doctorAvailability or dummySlots to only include "available" status
              b. Map filtered slots to Date objects for comparison
              c. Store in availableDates state for efficient access
              d. Update when doctorAvailability or schedule changes

          18. Implement multi-level fallback system for date availability
              a. Try doctorAvailability from props as primary source
              b. Use dummySlots from imported data as secondary source
              c. Fall back to schedule context data if needed
              d. Ensure component works with partial or missing data

          19. Implement time slot selection logic
            a. Create a state for selectedTime and initialize it to: if initialTime is available, new Date(initialTime) else null
            b. Create a state for isTimePickerVisible and initialize it to false
            c. Set selectedTime with newTime if available when newTime changes
            d. Set newTime with selectedTime if available when selectedTime changes
            e. Create a function to handle the time selection and update the selectedTime

          20. Create a function to show and hide the time picker. When the user selects a time, update the selectedTime state and hide the time picker.


        #### Date Picker Content

        Date Picker Content component displays the selected date and manages the visibility of the calendar. It:
        
          1. Shows the selected date in an input field
          2. Displays the calendar when the input is clicked
          3. Positions the calendar as a dropdown with absolute positioning
          4. Contains all the child components for the calendar UI

        #### Date Picker

        Date Picker is the main component that wraps the DatePickerContent with the DatePickerProvider context. It:

          1. Provides state management through DatePickerContext
          2. Handles date selection logic
          3. Manages calendar visibility
          4. Ensures proper data flow between all subcomponents

        ##### Calendar Header Component

        Calendar Header component will be used to navigate to the previous and next months
        
          1. Create a Calendar Header component and mount it on the Date Picker component
            a. It will have a button to navigate to previous month and a button to navigate to next month
          
          2. Create an array of months names and map over it with the current month and current year to display the month name and year in the header
          3. Attach an event listener to the previous month button to navigate to the previous month
          4. Attach an event listener to the next month button to navigate to the next month

        #### Day Names Component

          1. Create a Day Names component and mount it on the Date Picker component
          2. Create an array of day names and map over it to display the day names

        #### Calendar Grid Component

          1. Create a Calendar Grid component and mount it on the Date Picker component
          2. Retrieve the current month, getDaysInMonth, and getFirstDayOfMonth from the Date Picker component
          3. Create a function to render the calendar grid and return a table with the days of the month
            a. Create constants for the year, month, and first day of the month and assign them to their respective variables
            b. Create an empty array to store the days of the month
            c. Loop through firstDayOfMonth times to add empty cells to the days array
            d. Loop through the days in the month and add them to the days array as a component (Day Cell)

          #### Day Cell Component

            1. Display the day of the month in the div 
              a. if the day is in the past, text color should be gray and cursor should be not-allowed
              b. if the day is selected, background color should be blue and text color should be white
              c. if the day is today, and not selected, border color should be blue, background color white
              d. if the day is not today and not selected, background color should be white and text color should be black, background color on hover should be light gray
              e. if the day is not today, not selected, and not available, background color should be red, text color should be gray, cursor should be not-allowed. Make sure to disable the button

            2. Create a function to handle the date selection and update the selected date state if the date is not in the past
            3. Attach the function to the div element as an onClick event listener

        #### Selected Date Display Component

          1. Create a Selected Date Display component and mount it on the Date Picker component
            a. Retrieve the selected date and showCalendar function from the Date Picker context
            b. Display the selected date in an input field
            c. Attach showCalendar function to the input field to show the calendar when clicked

        #### Available Time Slots Hook

        Available Time Slots hook will be used to fetch the available time slots for the selected date and update the state accordingly. It will be used in the Time Picker component to display the available time slots.

          1. Filter the available slots based on the selected date
          2. Get all slots from the schedule (retrieve from schedule context)
          3. Group the filtered slots by morning, afternoon and evening
          4. Create dummy slots for the selected date
          5. Filter the slots based on the current time; if the slot is in the past, remove it from the array
          6. Add a buffer time of 30 minutes to avoid booking slots that are too close to the current time
          7. Cache the generated dummy slots by date to avoid re-generating them after selection

        #### Time Picker Component

        Time Picker component will be used to display the available time slots for the selected date. 

          1. Create a Time Picker component and mount it on the Modal Body component and wrap it with Date Picker context
          2. Create a function that closes time slot grid when the user clicks outside of it

        #### Select Time Display Component

        Select Time Display component will be used to display selected time.

          1. Create a Select Time Picker component and mount it on the Time Picker component
          2. Attach showTimePicker function to the input field to show the time picker when clicked
            a. If the user hasn't selected a date, display a message to select a date first

        #### Select Time Picker Header Component

        Select Time Picker Header component will be used to display the selected time

          1. Create a Select Time Picker Header component and mount it on the Time Picker component

        #### Time Slot Grid Component

        Time Slot Grid component will be used to display various groups of time slots

          1. Create a Time Slot Grid component and mount it on the Time Picker component
          2. Create Time Slot Grid Group component and mount it on the Time Slot Grid component. This will be used to group the time slots by morning, afternoon and evening
          3. Do the same for all groups of time slots

      ### Doctor Selector Component

      Doctor Selector component will be used to display a list of doctors available for the rescheduled appointment.

      1. Create a Doctor Selector component and mount it on the Modal Body component
      2. Retrieve selected doctor state and available doctors from the Reschedule context
      3. Create a state for dropdown visibility and initialize it to false
      4. Create a state for search term and initialize it to empty string
      5. Filter the doctors based on the search term
      6. Create a function to handle doctor selection and update the selected doctor state

      #### Select Doctor Display Component

      Select Doctor Display component will be used to display the selected doctor

        1. Create a Select Doctor Display component and mount it on the Doctor Selector component and pass selected doctor and showDropdown state as props
        2. If selected doctor is available, display the doctor's name and image. If not, display a message to select a doctor
        3. Add a dropdown icon to the right of the doctor's name and image. When clicked, toggle the showDropdown state
        4. Attach a function to the parent div to toggle the showDropdown state
        5. If showDropdown is true, display the following:

        #### Doctor Searchbar Component

        Doctor Searchbar component will be used to search for doctors

        1. Create a Doctor Searchbar component and mount it on the Doctor Selector component. Pass search term state as a prop
        2. Make the searchbar a controlled component by attaching a value attribute to the input element and setting it to the search term state
        3. Create a function to handle the search term change and update the search term state
        4. Attach the function to the input element's onChange event

        #### Speciality Filter Component

        Speciality Filter component will be used to filter doctors by speciality

        1. Create a Speciality Filter component and mount it on the Doctor Selector component.
        2. Loop through the speciality data and create a button for each speciality
        3. When an user clicks on a speciality, the button will be highlighted
        4. Retrieve the filter speciality functions from the reschedule context.
        5. Create a function to handle the speciality change and update the filter speciality state
        6. Create a function to handle the speciality reset and update the filter speciality state
        7. Make the component into a dropdown 

        #### Doctor List Component

        Doctor List component will be used to display a list of doctors

          1. Create a Doctor List component and mount it on the Doctor Selector component and pass the following props: filteredDoctors, selectedDoctorID and doctor selection function
          2. Fill in the doctor's name, image and speciality
          3. Attach onSelectDoctor function to the parent div to select the doctor

      ### Reschedule Modal Footer Component

      Modal Footer component will display a button to confirm the rescheduling of the appointment and a button to close the modal. It will be similar to cancel appointment and reject appointment modal footers.

        1. Create a Modal Footer component and mount it on the Reschedule Appointment Modal component and wrap it with Reschedule Modal Provider

    3. Create a confirmation checkbox component and mount it on Modal Body component

        

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