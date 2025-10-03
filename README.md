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
  8. JSPDF
  9. Loadash

### Tailwind Configuration:

Configure Tailwind CSS and and theme colors in `tailwind.config.js` file.

### Theme Context:

ThemeContext is a custom React context that provides a theme to the application. It allows the application to switch between light and dark themes.

  1. Transfer theme logic from Settings Page to ThemeContext

### Navbar Component

Navbar component will a reusable component that will be used in all pages. It will have the following features: logo, menu, dropdown menu and profile picture. 

  1. Create a logo for the navbar component and mount it on Navbar component. It will be a link to the home page.
  2. Create a menu list for the navbar component. It will be a list of links to the different pages of the application.
    a. Home
    b. About Us
    c. Doctors (for patients users) 
    d. Dashboard (for doctors users)
    e. Contact Us

  3. Create a dropdown menu for the navbar component. It will be a dropdown menu that will show when the user hovers on the profile picture. It will have the following options:
    a. My Profile
    b. My Appointments
    c. Settings
    d. Logout

  4. Create a mobile menu for the navbar component. It will be similar to the menu list but will be displayed on mobile devices. 


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
  3. Loop through the appointments and create a card for each appointment. Show three cards only.
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

### Doctor Context

The DoctorContext is a context that will be used to store the doctor data and provide it to the components that need it.

  1. Create `doctors` state of type `DoctorType[]` and set it to an empty array
  2. On component mount, fetch the doctor data from the local storage and set it to the `doctors` state
  3. Once `doctors` state is updated, update the local storage with the new data
  4. Create `addDoctor` function that will take a doctor object as a parameter
    a. Use the `doctors` state to add the new doctor to the list

  5. Create `updateDoctor` function that will take `id` and `updateDoctor` as parameters
    a. Use the `doctors` state to find the doctor with the given `id` and update it with the new data

  6. Create `removeDoctor` function that will take `id` as a parameter
    a. Use the `doctors` state to find the doctor with the given `id` and remove it from the list

  7. Create `getDoctorByID` function that will take `id` as a parameter
    a. Use the `doctors` state to find the doctor with the given `id` and return it

  8. Create `getDoctorByName` function that will take `id` and `name` as parameters
    a. Use the `doctors` state to find the doctor with the given `id` and `name` and return it

### Doctors Page

The Doctors page is a page that lists all the doctors in the database. It will have a filter menu, search bar, and a list of doctors.

  1. Create a Doctors page and mount it on Script component and provide a route for it and wrap it with `DoctorsProvider`
    a. Create a search bar and mount it on Doctors page

  2. Create a filter menu and mount it on Doctors page
      a. Create a filter menu button
      b. Create a collapsible menu that shows/hides speciality options
      c. Map through specialityData to display all available specialities
      d. Implement active state styling for selected speciality
      e. Add navigation functionality to filter doctors by speciality
      f. Make the menu responsive for both mobile and desktop views

    3. Create Doctors List component and mount it on Doctors page
      a. Retrieve `doctors` state from `DoctorContext`
      b. Initialize a state variable to store the filtered doctors
      c. Create a function to filter `doctors` based on speciality
      d. Run the filter function when the speciality and `doctors` data change
      e. Add a route for speciality page that will show all doctors with that speciality
      f. If there are no doctors with that speciality, show a message saying "No doctors found"
      g. Map through the filtered doctors and create a card for each doctor
      h. Each card will have a doctor name, doctor image, availability status and doctor speciality
      

### Booking Context

Booking context will be used to store the booking data and provide it to the Booking page.

  1. Get doctorID from the URL using useParams hook
  2. Retrieve the following:
    i. `schedule` from the `ScheduleContext`
    ii. `profile` from the `ProfileContext`
    iii. `doctors` from the `DoctorContext`

  3. Create the following state variables:
    i. `slots` state - initialize it with `schedule`'s `availableSlots` data mapped to proper format
    ii. `doctorInfo` state - initialize it with null
    iii. `patientInfo` state - initialize it with `profile` data or null
    iv. `slotIndex` state - initialize it with 0
    v. `slotTime` state - initialize it with empty string
    vi. `selectedTimeSlot` state - initialize it with null
    vii. `consultationType` state - initialize it with `in-person`
    viii. `loading` state - initialize it with false
    ix. `isBooked` state - initialize it with empty object
    x. `appointedDoctors` state - initialize it with empty array
    xi. `appointedPatients` state - initialize it with empty array
    xii. `appointments` state - initialize it with empty array
  
  4. Create a `fetchDocInfo` function that:
    i. Finds the doctor from the `doctors` array using `doctorID`
    ii. Updates the `doctorInfo` state with the found doctor

  5. Create a `handleSetIsBooked` function that:
    i. Takes `doctorID` and `status` as parameters
    ii. Updates the `isBooked` state object with the new status for that doctor

  6. Set up real-time Firestore listeners:
    
    i. **Fetch appointments** (triggered when `profile._id` changes):
       - Query `appointments` collection where `patient.patientInfo._id` equals current user's ID
       - Use `onSnapshot` for real-time updates
       - Update `appointments` state with fetched data
       - Return unsubscribe function for cleanup
    
    ii. **Fetch appointed doctors** (triggered when `profile._id` changes):
       - Query `appointments` collection where `patient.patientInfo._id` equals current user's ID
       - Use `onSnapshot` for real-time updates
       - Extract `doctor` objects from each appointment
       - Update `appointedDoctors` state with extracted doctors
       - Return unsubscribe function for cleanup
    
    iii. **Fetch appointed patients** (triggered when `doctorID` changes):
       - Query `appointments` collection where `doctor.doctorInfo._id` equals current doctor's ID
       - Use `onSnapshot` for real-time updates
       - Extract `patient` objects from each appointment
       - Update `appointedPatients` state with extracted patients
       - Return unsubscribe function for cleanup
    
    iv. **Fetch isBooked status** (triggered when `profile._id` changes):
       - Query all documents from `bookedDoctors` collection
       - Use `onSnapshot` for real-time updates
       - Filter documents where `patientID` equals current user's ID and `isBooked` is true
       - Build object with `doctorID` as keys and `true` as values
       - Update `isBooked` state with the built object
       - Return unsubscribe function for cleanup

  7. When `profile` and `doctorID` change:
    i. Call `fetchDocInfo` function to get doctor details
    ii. Update `patientInfo` state with current `profile` data or null


### Booking Page

Booking page will have doctor details, booking slots and related doctors.

  1. Create a Booking page and mount it on Script component and provide a route for it
  2. Wrap the Booking page with the `BookingContext` and `ScheduleContext` provider as the parent component
  3. Create a Doctor Details component and mount it on Booking page
    a. Create a Doctor image component and mount it on Doctor Details component
    b. Create a Doctor info component and mount it on Doctor Details component
        i. Provide doctor name with a verified icon
        ii. Provide doctor speciality, degree, and experience
        iii. Provide doctor about text
        iv. Provide doctor rate
        v. Doctor's hospital name
        vi. Hospital location
        vii. Patients reviews and ratings

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

      e. Create a function to cancel the appointment that takes the appointmentID as a parameter
        i. Retrieve appointments array from local storage
        ii. Look for the appointment with the matching appointmentID
        iii. If the appointment is not found, exit the function
        iv. Create a new appointments array without the appointment
        v. Update the appointments array with the new appointments 
        vi. Update the local storage with the new appointments array
        viii. Update the appointedDoctors array by removing the appointment doctor from the array
          - Update the local storage with the new appointedDoctors array

        ix. Update the isBooked state to false, based on the doctorID and previous isBooked state

      #### Time slot management

        1. Check if dynamic time slot management is updating based on day selection

      f. Create a function to remove past appointments from appointedDoctors array and update isBooked state
      g. Create a memoization `doctorSlots` function to create slots for doctor
        i. Loop through the `slots` array and create a new date object for each slot
          - Return the new date object

      h. Create a `handleSubmitBooking` function to handle the booking form submission
        i. If the doctor is booked, show an alert
        ii. Create a new appointment object of Appointment type
        iii. Update the `appointments` state with the new appointment object
        iv. Mark the doctor as booked in the `isBooked` state

#### Booking Slots Component

  1. Retreive `handleTimeSlotSelection`, `selectedSlot`, `doctorSlots`, `slotIndex`, `doctorInfo`, `isBooked`, `handleSubmitBooking`, `setSlotIndex`, `setSelectedSlot` and `days` from `BookingSlots` hook
    b. Create a `isReady` state to check if both day and time slot are selected
    c. Create a `isCurrentDoctorBooked` state to check if the current doctor is booked
    d. Retreive `isAuthenticated` state from `LoginContext`

  2. Create a `handleSubmit` function to handle the booking form submission
    a. If `selectedSlot` and `doctorInfo` are not empty, call `handleSubmitBooking` function

  3. Create a form to select the time slot
    a. Attach `handleSubmit` function to the form's `onSubmit` event
    b. Create Booking Days component and mount it on Booking Slots component and pass `days`, `doctorSlots`, `slotIndex` and `setSlotIndex` as props
      i. Create a `handleDayClick` function which takes `index` as a parameter
          - Set `slotIndex` to `index`
      ii. Map through `doctorSlots` array and create a card for each time slot (form input)
      iii. Check if slot is available and if it is, style it accordingly
      iv. Add a click event listener to each card that will set the slotIndex to the index of the day
    
    c. Create Booking Time component and mount it on Booking Slots component and pass `doctorSlots`, `slotIndex`, `setSlotIndex`, `selectedSlot`, `handleTimeSlotSelection` and `setSelectedSlot` as props
      i. Create a `handleTimeChange` function which takes `slot` as a parameter
        - Set `selectedSlot` to `slot`'
        - Call `handleTimeSlotSelection` function with `slot` as a parameter 
      
      ii. Find the day in `doctorSlots` array that matches the `slotIndex` and assign it to `selectedDaySlots`
      iii. Map through `selectedDaySlots` array and create a card for each time slot (form input)
      iv. Check if slot is available and if it is, style it accordingly
      v. Add a click event listener to each card that will set the slotIndex to the index of the day

    d. Create Consultation Type component and mount it on Booking Slots component 
      i. Retreive `consultationType` state from `BookingContext`
      ii. Create radio buttons for each consultation type (online and in-person)
      iii. Make them controlled components and set the value of each radio button to the corresponding consultation type
    
  3. Check if the user is authenticated 
    a. If the user is authenticated, create a Booking button and style it based on `isReady` and `isCurrentDoctorBooked` state
    b. If the user is not authenticated, create a button that will redirect the user to the login page

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

  1. Create a `profile` state and initialize it with null
  2. Create a `isEditing` state and initialize it with `false`
  3. Retrieve `userType` from `LoginContext`
  4. Create a `formData` state and initialize it with null
  5. Create states for user input values:
    a. `nameValue` for name
    b. `emailValue` for email
    c. `phoneValue` for phone
    d. `emailValue` for email
    e. `specialityValue` for speciality
    f. `experienceValue` for experience
    g. `aboutValue` for about
    h. `educationValue` for education
    i. `certificationsValue` for certifications
    j. `feesValue` for fees
    k. `medicalHistoryValue` for medical history
    l. `addressValue` for address
    m. `profileImage` for profile image
    n. `coverImage` for cover image
    o. `dateOfBirthValue` for date of birth
    p. `genderValue` for gender
    q. `residenceValue` for residence
    r. `cityValue` for city
    s. `stateValue` for state
    t. `countryValue` for country
    u. `hospitalValue` for hospital
    v. `licenseCertificate` for license certificate  
    w. `hospitalLocation` for hospital location
    x. `showModal` for showing modal

  6. Create a `loading` state and a `readyToSubmit` state, both initialized to `false`
  7. Update `readyToSubmit` state based on field validation: 
    a. For both patients and doctors, ensure `nameValue`, `emailValue`, `phoneValue`, `addressValue`, `genderValue`, `dateOfBirthValue`, and `profileImage` are filled
    b. For doctors, additionally validate: ensure `specialityValue`, `experienceValue`, `aboutValue`, `educationValue`, `certificationsValue`, `feesValue`, `hospitalValue`, `licenseCertificate` and `coverImage` are filled
    c. For patients, additionally validate: ensure `medicalHistoryValue` is filled
    d. If `isEditing` is `true`, we update `readyToSubmit` state to `profileHasChanged` state 

  8. Retrieve `name` and `email` from `LoginContext`
  9. If `name` and `email` change, update the `nameValue` and `emailValue` states accordingly
  10. If `email`, `phone`, `residence`, `city`, `state`, `country` change, update the `addressValue` with their new values
  11. Create `fetchProfile` function takes `userID` and `userType` as parameters and fetches the profile data from the firestore API
     a. Retrieve "profile" collection from firestore  
     b. Retrieve the document object with reference to the collection
     c. If the document exists, create a `profileData` object with the retrieved document
     d. If `userType` matches `profileData.userType`, retrieve `profileData`. Otherwise, return null

  12. If `profile` changes, update the `profileImage`, `coverImage` and `licenseCertificate` states with the new values from `profile`
  13. Create a `loadProfileForEditing` function that retrieves the `profileData` from `localStorage` and sets the `profile` state with the retrieved data. This function will be used to load the profile data when the user clicks on the edit button on the profile page.
  14. Call `loadProfileForEditing` function when the `profile` and `isEditing` states changes
  15. Create a `deepEqual` function that compares two objects and returns `true` if they are deeply equal and `false` otherwise. This function will be used to compare `profileImage`, `coverImage` and `licenseCertificate` states with the new values from `profile`
  16. Create a `profileHasChanged` function that returns `true` if any of the new values from `profile` are different from the current states and `false` otherwise. This function will be used to determine if the user has made any changes to the profile data.
  17. If `userID` changes, create `loadProfile` function
    a. If `userID` is empty, exit the function
    b. Call `fetchProfile` function with `userID` and `userType` as arguments and assign it to `userProfile` constant
    c. If `userProfile` exists, set `profile` state to `userProfile` and `loading` state to `false`


### Profile Page

Profile page will show the user profile data and allow the user to edit the data.

  1. Create a Profile Page and mount it on Script component and provide a route for it
  2. Wrap the Profile page with the `ProfileContext`, `PatientDetailsProvider`, and `DocumentTabProvider` as the parent components
  3. Retrieve `isEditing`, `showModal` and `profile` states from the `ProfileContext`
  4. Retrieve `isAuthenticated` state from the `LoginContext`
  5. If `isAuthenticated` is false, mount NotFound Page
  6. If `profile` is null;
    a. Display a message to the user that their profile is not found and they should create a new profile
    b. Create a button to open add profile modal by setting  `showModal` to true
    c. If `showModal` is true, display the add profile modal

  7. If `profile` is not null;
    a. If `isEditing` is true, reuse the add profile modal otherwise display the profile data
    b. Create a button to open edit profile modal by setting  `isEditing` and `showModal` to true

  8. Create a Profile Image component and mount it on Profile page
    a. Get the user profile image from the ProfileContext and display it

  9. Create a Profile Info component and mount it on Profile page
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
         

    #### Add Form Input Hook
      
      The useAddFormInput custom hook is used to manage the state and logic for handling form inputs when adding a new profile (doctor or patient).

      1. Initialize the hook with context
        a. Import and use LoginContext to access current user data
        b. Destructure `userType`, `name`, and `email` from the context

      2. Create state variables for form input fields
        a. Create `nameValue` and `emailValue` and initialize them using context values
        b. Create `phoneValue`, `specialityValue`, `aboutValue`, `experienceValue`, `feesValue`, and `medicalHistoryValue` as empty strings
        c. Create imageValue and coverImageValue state variables to handle profile and cover image uploads respectively, both initialized as null

      3. Create `handleInputChange` function to update state on input change
        a. Extract `name`, `value`, and `type` from the event target
        b. If the input type is "file":
          i. Cast the target as HTMLInputElement
          ii.Check if the file exists
            - If `name` is "profileImage", set `imageValue` to the file
            - If `name` is "coverImage", set `coverImageValue` to the file
    
        c. For other input types, use a switch-case to update the corresponding state
          i. For `name`, update `nameValue`
          ii. For `email`, update `emailValue`
          iii. For `phone`, update `phoneValue`
          iv. For `speciality`, update `specialityValue`
          v. For `about`, update `aboutValue`
          vi. For `experience`, update `experienceValue`
          vii. For `fees`, update `feesValue`
          viii. For `medicalHistory`, update `medicalHistoryValue`

      4.  Create readyToSubmit memoized boolean using useMemo
        a. Always return false if `nameValue`, `emailValue`, `phoneValue`, or `imageValue` are missing
        b. If the user is a doctor:
          i. Require `specialityValue`, `aboutValue`, `experienceValue`, and `feesValue` to be truthy
          ii. If `coverImageValue` is optional and should not block submission

        c. If the user is a patient:
          i. Require `medicalHistoryValue` to be truthy
      
    #### Add Profile Modal

    Add a modal to allow users to add their profile data.  

      1. Retrieve `isEditting` and `setShowModal` from `ProfileContext`
      2. Mount ModalHeader and pass title and `setShowModal` as `onClose` props
      3. Create AddForm component and mount it on the Add Profile Modal. Wrap it the `DocumentTabProvider`
     
     
     ### Add Profile Form Component

     1. Create a form component that will be used to add profile data. It will have the following fields:
        a. `profileImage`: Image input field 
        b. `name`: Text input field
        c. `email`: Text input field
        d. `phone`: Text input field

        For doctors:
        e. `coverImage`: Image input field
        f. `speciality`: Select input field with options from `specialities`
        g. `education`: Text input field
        h. `experience`: Text input field
        i. `fees`: Text input field
        j. `certifications`: Text input field
        k. `about`: Textarea input field
        l. `hospital`: Text input field
        m. `licenseCertificate`: File input field
        n. `hospitalLocation`: Text input field

        For patients:
        e. `medicalHistory`: Textarea input field 
        f. `residence`: Text input field
        g. `city`: Text input field
        h. `state`: Text input field
        i. `country`: Text input field

     2. Make the input fields controllled components using the states in `ProfileContext`
     3. Add a button to submit the form. It will be disabled if any of the fields are empty depending on the user type.
     4. Attach `onSubmit` event to the form to call the `submitProfile` function from `SubmitProfileHook`. If `isEditting` is true, call `editProfile` function from `EditProfileHook` 
     5. Add a button to close the modal. Attach `onClose` event to the button to call the `setShowModal` function from `ProfileContext`

### Submit Profile Hook

Submit profile hook will be used to submit the profile data to the local storage.

  1. Retrieve the following:
    a. `profile` and `showModal` states from the `ProfileContext`
    b. `userID` state from the `LoginContext`
    c. `uploadAndProcessFile` function from `UploadFile` hook
    d. `addDoctor` function from `DoctorContext`

  2. Create `resolvedUserID` constant that will store the resolved user ID from the `userID` state or generate a new one if it's not available.
    a. If `userID` is not available, set it to `resolvedUserID` 

  3. Call `uploadAndProcessFile` function to upload the profile image, cover image and license certificate. The function will return a promise that resolves with the file properties.
  4. Create `submitProfile` function that will be called when the submit button is clicked
    a. Create a validation logic to check if all the fields are filled. If any of the fields are empty, return an error message.
    b. Create a new object with the profile data and the file properties from the `uploadAndProcessFile` function. Each `userType` will be used to determine which fields to include in the object.
    c. Create a new object for `DoctorType` 
    d. Call `addDoctor` function and pass the new object as the argument. The function will return a promise that resolves with the doctor data. Call `addDoctor` if the `userType` is a doctor.
    e. Save the object in the firestore database; if the `userType` is a doctor, save under the `doctors` collection. If the `userType` is a patient, save under the `patients` collection.
    f. Return the profile data object
    g. Set `setShowModal` to false 

### Edit Profile Hook 

Edit profile hook will be used to edit the profile data and update it in the local storage.

  1. Retrieve the profile data,  `setProfile` and `setShowModal` state from the `ProfileContext`
  2. Retrieve `setName` and `userType`  from `LoginContext`
  3. Retrieve `uploadAndProcessFile` function from `UploadFile` hook
  4. Retrieve saved profile data from the local storage
  5. Create `editProfile` callback function that will be called when the edit button is clicked
    a. Call `uploadAndProcessFile` function to upload the profile image, cover image and license certificate. The function will return a promise that resolves with the file properties.
    b. Create a logic hook check if the values are equal to the saved profile data. If they are equal, exit the function.
    c. Create a new object with the updated profile data and the file properties from the `uploadAndProcessFile` function
    d. Update the saved profile data with the updated profile data
    e. Save the updated profile data in the firestore
    f. Set `setProfile` to the updated profile data
    g. Set `setName` to the updated profile data's name
    h. Return the updated profile data object
    i. Set `setShowModal` to false 

  6 . Create `handleEditProfile` function that will be called when the form is submitted
    a. Disable the normal form submission behavior
    b. Call `editProfile` function 




### Login Context

Login context will be used to store the user login data and provide it to the Login page.

  1. Create an interface for login data       
    a. Add userType field with 'patient' | 'doctor' type
    b. Add setUserType function to update user type

  2. Create state variables to store the login data
    a. Initialize userType state with null as the default value
    b. Add userType and setUserType to context value
    c. Create a `loading` state and initialize it to true

  3. Wrap the routes in Script component with the LoginContext provider as the parent component
  4. For every render:
    a. Retrieve `storedUser` and `storedAuth` from `localStorage`
    b. If `storedAuth` and `storedUser` true, set the login data to the context value and `isAuthenticated` to true
    c. If `storedUser` is not null, set the user data to the context value and `isAuthenticated` to true
    d. Set `loading` to false
  
  5. Create `showSignOutModal` state variable to store the sign out modal visibility
  6. If `showSignOutModal` and `isAuthenticated` are true, render the sign out modal
  7. Create `closeSignOutModal` function to close the sign out modal
    a. Set the `showSignOutModal` state to false
  
  8. Create `openSignOutModal` function to open the sign out modal
    a. Set the `showSignOutModal` state to true`

  9. Persist the `isAuthenticated` state to local storage


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
    i. Retreive `name`, `email`, `userType`, `password` and `confirmPassword` from the Login Context
    j. Retreive `signUp` function from the Sign Up Hook
    k. Create a function to handle the form submission
      i. if there is `userType` selected, call `signUp` function with the retrieved values as parameters
    
    j. Attach the form submission function to `onSubmit` event of the form
  
  5. Create a Sign In component and mount it on the Login page if isSignUp is false
     a. Render the Sign In title and description
     b. On Form input components, create labels and inputs for both the Sign In and Sign Up components
     c. Create a button and a function to handle the sign in button click
     d. Create a span to switch to the Sign Up component when the user does not have an account
     e. Retreive `email` and `password` from the Login Context
     f. Retreive `signIn` function from the Sign In Hook
     g. Create a function to handle the form submission
       i. Call `signIn` function with the retrieved values as parameters

     h. Attach the form submission function to `onSubmit` event of the form

  6. Create a section for the Google aunthentication button for both the Sign In and Sign Up components

### Appointments Context

The Appointments Context manages all appointment data in the app. It enriches raw appointment JSON with patient and doctor info, splits appointments into upcoming and past, and makes them globally available for any component to consume.

  1. Create props for the Appointments context  
    a. Define `AppointmentsContextProps` with:  
        i. `appointments: AppointmentType[]`  
        ii. `pastAppointments: AppointmentType[]`  
        iii. `upcomingAppointments: AppointmentType[]`  

  2. Create state variables for appointments  
    a. `appointments` — initialized as an empty array `[]`  
    b. `pastAppointments` — initialized as an empty array `[]`  
    c. `upcomingAppointments` — initialized as an empty array `[]`  
    d. `appointment` — initialized as null  

  3. on every render;
    a. Fetch appointments from the `localStorage` 
    b. If appointments are found in the `localStorage`, parse them as JSON 
    c.  Update the `appointments` state with the parsed appointments
    d. Split appointments into upcoming and past  
    e. Get the current date  
      i. Filter upcoming appointments:  
        - Date is equal to or after now and the status is `"pending"`, `"confirmed"`, `"approved"`, `"rescheduled"`, or `"follw-up"`.
      ii. Filter past appointments:  
        - Date is before now  and the status is `"completed"`, `"cancelled"` or `"rejected"`.
      ii. Update `pastAppointments` and `upcomingAppointments` using `setPastAppointments` and `setUpcomingAppointments`  

  4. Retreive `_id` from URL params
  5. Whenever ` _id` changes;
    a. Fetch appointments from the `localStorage`
    b. If appointments and `_id` are found, find the appointment with the matching `_id` in the `appointments` array
    c. Update `appointment` state with the found appointment
  
  
### My Appointments Page

My appointments page will show the user's appointments. It will have a list of appointments with the doctor's name, date, time, and location. The user will be able pay for the appointment and cancel it.

  1. Create a My Appointments Page and mount it on Script component and provide a route for it. Wrap the route with ScheduleProvider, BookingContextProvider, AppointmentContextProvider and PatientDetailsProvider
  2. Create a Tab Selector Buttons component and mount it on the My Appointments Page
    a. Retrieve the `activeTab` state variable from the AppointmentContext
    b. Display `Upcoming`, and `Past` buttons
    c. When a button is clicked, update the `activeTab` state variable with the button's value
  2. Loop through the doctors array and create a card component and mount it on the My Appointments Page
    a. Create buttons to pay for the appointment and cancel it  
    b. Create Appointment photo component and mount it on the card component
    c. Create Doctor information component and mount it on the card component

  3. Retrieve `activeTab` state, `pastAppointments`, and `upcomingAppointments` state variables from the AppointmentContext
  4. Retrieve `showCancelModal`, `closeCancelModal`, `openCancelModal` and `appointmentToCancel` from `updatePatientDetails` custom hook
  5. Retrieve `cancelAppointment` from `BookingSlots` custom hook
  6. Create `renderAppointment` function that will filter the appointments based on the `activeTab` state variable
    a. If `activeTab` is `Upcoming`, return the `upcomingAppointments` otherwise return the `pastAppointments` and set it to `data` constant
    b. If `data` is empty, return a message saying "No Appointments"
    c. Loop through the `data` array and create a card component for appointment
       i. If the user is patient, return AppointmentCard component and pass `key` and `doctor` as props
       ii. If the user is doctor, return PatientAppointmentCard component and pass `key`, `appointment` and `patient` as props

    d. Return the `renderAppointment` function as a JSX element

    #### Appointed Doctors

    Appointed doctors will be a list of doctors that the user has an appointment with. It will have a list of doctors with the doctor's name, date, time, and location. The user will be able to cancel the appointment.

      1. Create a type for Appointed Doctors
      2. Create a state variable for the appointed doctors and initialize it with an empty array and pass as props

  5. Get appointed doctors from the local storage
  6. If there are no appointed doctors, display a message saying "No Appointments" 
  7. If there are appointed doctors, loop through the appointed doctors array and create a card component and mount it on the Appointed Doctors Page
    a. Retreive `showCancelModal` and `closeCancelModal` state variables from `updatPatientDetails` hook
    b. Retrieve `cancelAppointment` function from `BookingSlots` hook
    c. Pass doctor info as props to the card component
    d. Display the doctor's name, date, time, and location
    e. Create two buttons, one for canceling the appointment and one for viewing the appointment details
      i. On clicking the cancel button, call the `showCancelAppointmentModal` function and pass the appointment as a parameter
      ii. On clicking the view button, navigate to the appointment details page

  8. If `showCancelModal` is true, mount the Cancel Appointment Modal and pass `appointmentToCancel`, `closeCancelModal`, and `cancelAppointment` as props

    #### Appointed Patients

    Appointed patients will be a list of patients that the user has an appointment with. It will have a list of patients with the patient's name, date, time, and location. The user will be able to cancel the appointment.

    1. Create a component for the PatientAppointmentCard component and mount it on the My Appointments Page
    2. Improvise the AppointmentPhoto component to display the patient's photo when the user is a doctor
    3. Create a component for the PatientInfo component and mount it on the PatientAppointmentCard component

  


### Patient Details Context

  1. Create props for the Patient Details context
  2. Create a state variable for the patient and initialize it with null
  3. Create a state variable for active tab and initialize it with;
    a. If `profile` type is `patient` then `prescriptions` else `Medical History`
  4. Create a state variable for patient appointment with `appointment type` and initialize it with: if there is saved appointment in local storage then the saved appointment else empty array
  5. Create a function to fetch the patient appointment based on patient id
  6. Find the appointed patient based on the patient id and set the patient details and appointment details
  7. Create state variables for notes and documents with respective types and initialize them with data from local storage
  8. Create functions to add and remove documents and update local storage for both doctors and patients
  9. Create functions to add and remove notes and update local storage
  10. Add `updateAppointmentStatus` function to the patient details context props
    a. Create a deep copy of the patient's appointments array
    b. Find the index of the appointment to update
    c. Check if the appointment exists in the array
    d. If the appointment exists, create a new appointment object with the updated status
    e. Replace the appointment at the found index with the new appointment object
    f. Update the patient's appointments array with the new array
    g. Save the updated appointments to localStorage using the patient ID as part of the key
    h. Implement a separate useEffect hook to load appointments from localStorage when the component mounts
    i. Load appointments from localStorage when the component mounts

  12. Create a function to reschedule the appointment and update the appointment details
    a. Create a setter function to update patient appointments array
    b. Create a deep copy of previous appointments and assign it to a variable 
    c. Find the appointment to reschedule by matching date and time
    d. If the appointment is found, create an updated appointment object with:
      i. New appointment with updated date and time
      ii. New date and time for the consultation
      iii. New status
    e. Replace the old appointment with the updated one in the appointments array
    f. Save the updated appointments to localStorage using the patient ID as part of the key
    g. Return the updated appointments array to update state
    h. If the appointment is not found, return the original appointments array

  13. Create a function to update the appointment details
    a. Create a setter function to update patient appointments array

  14. Create a function to update the notes which takes updated note as a parameter
     a. Loop through the notes array and find the note with the same id as the updated note parameter and assign a constant to it
     b. Update the notes state with the updated note
     c. Save the updated notes to localStorage using the patient ID as part of the key

  15. Create the following states for medical history:
    a. `medicalConditions` - an array of medical conditions and initialize it with data from localStorage
    b. `allergies` - an array of allergies and initialize it with data from localStorage
    c. `medications` - an array of medications and initialize it with data from localStorage
    d. `surgeries` - an array of surgeries and initialize it with data from localStorage

  16. Create a functions to update the medical history:
    a. Create `addMedicalCondition` function which takes a new medical condition as a parameter
      i. Create a new medical condition array with the new medical condition and the existing medical conditions
      ii. Update the `medicalConditions` state with the new medical condition array
      iii. Save the updated medical conditions to localStorage using the patient ID as part of the key

    b. Create `removeMedicalCondition` function which takes a medical condition index as a parameter
      i. Create a new medical condition array with the existing medical conditions excluding the medical condition at the given index
      ii. Update the `medicalConditions` state with the new medical condition array
      iii. Save the updated medical conditions to localStorage using the patient ID as part of the key

    c. Create `addAllergy` function which takes a new allergy as a parameter
      i. Create a new allergies array with the new allergy and the existing allergies
      ii. Update the `allergies` state with the new allergies array
      iii. Save the updated allergies to localStorage using the patient ID as part of the key

    d. Create `removeAllergy` function which takes an allergy index as a parameter
      i. Create a new allergies array with the existing allergies excluding the allergy at the given index
      ii. Update the `allergies` state with the new allergies array
      iii. Save the updated allergies to localStorage using the patient ID as part of the key

    e. Create `addMedication` function which takes a new medication as a parameter
      i. Create a new medications array with the new medication and the existing medications
      ii. Update the `medications` state with the new medications array
      iii. Save the updated medications to localStorage using the patient ID as part of the key

    f. Create `removeMedication` function which takes a medication index as a parameter
      i. Create a new medications array with the existing medications excluding the medication at the given index
      ii. Update the `medications` state with the new medications array
      iii. Save the updated medications to localStorage using the patient ID as part of the key

    g. Create `addSurgery` function which takes a new surgery as a parameter
      i. Create a new surgeries array with the new surgery and the existing surgeries
      ii. Update the `surgeries` state with the new surgeries array
      iii. Save the updated surgeries to localStorage using the patient ID as part of the key

    h. Create `removeSurgery` function which takes a surgery index as a parameter
      i. Create a new surgeries array with the existing surgeries excluding the surgery at the given index
      ii. Update the `surgeries` state with the new surgeries array
      iii. Save the updated surgeries to localStorage using the patient ID as part of the key

    i. Create `updateMedicalCondition` function which takes a medical condition index and a new medical condition as parameters
      i. Create a new medical condition array with existing medical conditions
      ii. Find the medical condition at the given index and update it with the new medical condition
      iii. Update the `medicalConditions` state with the new medical condition array
      iv. Save the updated medical conditions to localStorage using the patient ID as part of the key

    j. Create `updateAllergies` function which takes an allergy index and a new allergy as parameters
      i. Create a new allergies array with existing allergies
      ii. Find the allergy at the given index and update it with the new allergy
      iii. Update the `allergies` state with the new allergies array
      iv. Save the updated allergies to localStorage using the patient ID as part of the key

    k. Create `updateMedications` function which takes a medication index and a new medication as parameters
      i. Create a new medications array with existing medications
      ii. Find the medication at the given index and update it with the new medication
      iii. Update the `medications` state with the new medications array
      iv. Save the updated medications to localStorage using the patient ID as part of the key

    l. Create `updateSurgeries` function which takes a surgery index and a new surgery as parameters
      i. Create a new surgeries array with existing surgeries
      ii. Find the surgery at the given index and update it with the new surgery
      iii. Update the `surgeries` state with the new surgeries array
      iv. Save the updated surgeries to localStorage using the patient ID as part of the key

  17. Create `prescriptions` state which will be an array of prescription objects. Initialize it with data from localStorage if available
  18. Create `addPrescription` function which takes a new prescription or an array of prescriptions as a parameter  
    a. Check if the input is an array or a single object  
    b. Create a new prescriptions array by combining existing prescriptions with the new one(s)  
    c. Update the `prescriptions` state with the new prescriptions array  
    d. Save the updated prescriptions to `localStorage` using the patient ID as part of the key 

  19. Create `updatePrescription` function which takes a prescription index and a new prescription as parameters
      i. Create a new prescriptions array with existing prescriptions
      ii. Find the prescription at the given index and update it with the new prescription
      iii. Update the `prescriptions` state with the new prescriptions array
      iv. Save the updated prescriptions to localStorage using the patient ID as part of the key

  20. When `patientDetails` and `appointmentID` changes, fetch the documents from `localStorage` based on the profile type and update the `documents` state accordingly

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
      - 🔵 **Approved appointments** display "Manage Appointment" and "Cancel" buttons side by side.
      - 🔵 **Follow up appointments** display "Manage Appointment" and "Cancel" buttons side by side.
      - ⚪ **Completed appointments** offer an "Add Notes" button for post-appointment documentation, a "Schedule History" button to display schedule history and a "View Notes" button for viewing notes.
      - 🔴 **Cancelled appointments** provide a "Schedule New Appointment" button to facilitate rebooking, "Schedule History" button to display schedule history and a "View Notes" button for viewing notes.
      - 🔴 **Rejected appointments** show a "Schedule New Appointment" button to facilitate rebooking and "Schedule History" button to display schedule history.
      - 🟣 **Rescheduled appointments** display a "Rescheduled History" button to display the rescheduled history.
      - 🟣 **Other statuses** show a generic "Manage Appointment" button as a fallback option.

     ##### Patient Tab Action Button Component

      The **Patient Tab Action Button** component displays context-specific actions a patient can take, based on the current appointment status.

      - 🟢 **Pending appointments**  
        Show a disabled **"Awaiting Doctor Approval"** button and an optional **"Cancel Appointment"** button.
      - 🔵 **Approved appointments**  
        Display **"Join Live Chat"** and **"Join Video Call"** buttons for managing the live session, plus **"Cancel Appointment"**.
      - 🔵 **Follow-up appointments**  
        Display **"Reschedule Follow-up"** and **"Cancel Follow-up"** buttons.
      - ⚪ **Completed appointments**  
        Offer **"View Doctor Notes"** and **"Rate & Review"** buttons. (Optionally a **"Book Follow-up"** if needed.)
      - 🔴 **Cancelled appointments**  
        Provide **"Schedule History"** and **"View Doctor Notes"** buttons (since doctor already rescheduled if needed).
      - 🔴 **Rejected appointments**  
        Provide a **"Schedule History"** and **"View Rejection Reasons"** button (system/admin handles next steps, not patient).
      - 🟣 **Rescheduled appointments**  
        Display a **"View Reschedule History"** button to review changes.
      - 🟣 **Other statuses**  
        Fall back to a generic **"Manage Appointment"** button.



      1. Create a Tab Action Button component and mount it on the Appointment Tab Header component if the user is a doctor.
      2. Create a Patient Tab Action Button component and mount it on the Appointment Tab Header component if the user is a patient.

     **Buttons Action**

      *Approve Appointment Button*: Approve appointment button will approve the appointment.

        1. Attach approve appointment function from update patient details hook to the approve appointment button

      *Cancel Appointment Button*: Cancel appointment button will open a modal to confirm the cancellation of the appointment.

        1. Attach open modal function from update patient details hook to the cancel appointment button

      *Reject Appointment Button*: Reject appointment button will reject the appointment.

        1. Attach open modal function from update patient details hook to the reject appointment button

      *Reschedule Appointment Button*: Reschedule appointment button will open a modal to reschedule the appointment.

        1. Attach open modal function from update patient details hook to the reschedule appointment button

      *Reschedule History Button*: Reschedule history button will show the rescheduled history of the appointment.

        1. Attach open modal function from update patient details hook to the reschedule history button

      *Schedule New Appointment Button*: Schedule new appointment button will open a modal to schedule a new appointment.

        1. Attach open modal function from update patient details hook to the schedule new appointment button

      *Schedule History Button*: Schedule history button will show the schedule history of the appointment.

        1. Attach open modal function from update patient details hook to the schedule history button

      *Manage Appointment Button*: Manage appointment button will open a modal to manage the appointment.

        1. Attach open modal function from update patient details hook to the manage appointment button

      *Add Notes Button*: Add notes button will open a modal to add notes to the appointment.

        1. Attach open modal function from update patient details hook to the add notes button

      *View Notes Button*: View notes button will open a modal to view the notes of the appointment.

        1. Attach open modal function from update patient details hook to the view notes button


      ### Update Patient Details Hook

        Update patient details hook will update the patient details in the database.

      *Cancel Appointment Function*

        1. Create state variables for modal visibility and appointment management
          a. Initialize showCancelModal and showRejectModal states to false for controlling modal display
          b. Initialize appointmentToCancel state with localStorage fallback to persist appointment data across renders

        2. Create a function to open the cancel modal which takes an appointment as a parameter
          a. Store the appointment in localStorage with key 'CurrentAppointmentToCancel' for persistence
          b. Set the appointmentToCancel state to the provided appointment
          c. Set showCancelModal state to true to display the modal

        3. Create a function to close the cancel modal
          a. Remove the appointment data from localStorage using 'CurrentAppointmentToCancel' key
          b. Set appointmentToCancel state back to null to clear the selected appointment
          c. Set showCancelModal state to false to hide the modal

        4. The appointmentToCancel state initialization should check localStorage on component mount
          a. Retrieve any saved appointment from localStorage using 'CurrentAppointmentToCancel' key
          b. Parse the JSON data if it exists, otherwise default to null
          c. This ensures appointment data persists if the component re-renders while modal is open


      *Reject Appointment Function*

      Reject appointment function will open a modal to confirm the rejection of the appointment.  

        1. Create a state for appointment to reject and initialize it with data from localStorage if available
        2. Create a state for modal visibility and initialize it to false
        3. Create a function to open the modal which takes the appointment to reject as a parameter
          a. Save the appointment to localStorage for persistence
          b. Set the appointment to reject state to the appointment parameter
          c. Set the modal visibility state to true

        4. Create a function to close the modal
          a. Remove the appointment from localStorage
          b. Set the appointment to reject state to null
          c. Set the modal visibility state to false

      *Reschedule Appoi1ntment Function*

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

      *Reschedule History Modal Function*

      Reschedule history modal function will open a modal to display the reschedule history of the appointment.

        1. Create a state for reschedule history modal visibility and initialize it to false
        2. Create a function to open the modal
          a. Set the modal visibility state to true
        
        3. Create a function to close the modal
          a. Set the modal visibility state to false

      *Schedule New Appointment Function*

      Schedule new appointment function will open a modal to schedule a new appointment.

        1. Create states for modal visibility and appointment to schedule and initialize them to false and null respectively
        2. Create a function to open the modal which takes the appointment to schedule as a parameter
          a. Set the modal visibility state to true
          b. Set the appointment to schedule state to the appointment parameter
          
        3. Create a function to close the modal
          a. Set the modal visibility state to false
          b. Set the appointment to schedule state to null

      *Schedule History Modal Function*

      Schedule history modal function will open a modal to show the schedule history of the appointment.

        1. Create a state for schedule history modal visibility and initialize it to false
        2. Create a function to open the modal
          a. Set the modal visibility state to true

        3. Create a function to close the modal
          a. Set the modal visibility state to false

      *Manage Appointment Function*

      Manage appointment function will open a modal to manage the appointment.

      1. Create a states for modal visibility and appointment to manage and initialize them to false and data from localStorage respectively
      2. Create a function to open the modal
        a. Set the modal visibility state to true
        b. Save the appointment to localStorage for persistence
        b. Set the appointment to manage state to the appointment parameter

      3. Create a function to close the modal
        a. Set the modal visibility state to false
        b. Set the appointment to manage state to null

      *Add Notes Function*

      Add notes function will open a modal to add notes to the appointment.

        1. Create a state for notes modal visibility and initialize it to false
        2. Create a state for appointment to add notes and initialize it with data from localStorage if available, otherwise null
        3. Create a function to open the notes modal
          a. Set the notes modal visibility state to true
          b. Save the appointment to localStorage for persistence
          c. Set the appointment to add notes state to the appointment parameter
        
        4. Create a function to close the notes modal
          a. Set the notes modal visibility state to false
          b. Set the appointment to add notes state to null
          c. Remove the appointment from localStorage

      *View Notes Function*

      View notes function will open a modal to view notes of the appointment.

        1. Create a state for view notes modal visibility and initialize it to false
        2. Create a state for appointment to view notes and initialize it with data from localStorage if available, otherwise null
        3. Create a function to open the view notes modal 
          a. Set the view notes modal visibility state to true
          b. Save the appointment to localStorage for persistence
          c. Set the appointment to view notes state to the appointment parameter

        4. Create a function to close the view notes modal
          a. Set the view notes modal visibility state to false
          b. Set the appointment to view notes state to null
          c. Remove the appointment from localStorage

      *Update Appointment Status Function*

      Update appointment status function will update the status of the appointment.

      #### Approve Appointment Hook

      Approve appointment hook will be used to approve pending appointments and store the approval action in the centralized schedule history.

        1. Retrieve updateAppointmentStatus from the patient details context and addScheduleHistoryEntry from the schedule history hook
        2. Retrieve userType from the login context to determine who is performing the approval action
        3. Get the latest appointment from patientAppointments array (first item in the array)
        4. Create a function to handle the approve appointment action
          a. Check if there is a latest appointment available to approve
          b. If appointment exists, call updateAppointmentStatus function with the appointment and "approved" status
          c. Determine performer details based on user type:
            i. For doctors: use doctor name and ID from the appointment
            ii. For patients: use patient name and ID from the appointment
            iii. Set type field to the current userType from login context
          d. Call addScheduleHistoryEntry function with:
            i. Updated appointment object with "approved" status
            ii. Action type as "approved"
            iii. Reason as "Appointment approved by [userType]"
            iv. No alternative (undefined)
            v. Previous values containing the original appointment status
            vi. Performer details object with type, name, and ID
            vii. Detailed notes about the approval action including date and time
            viii. No reschedule details (undefined) since this is an approval action

      #### Reject Appointment Hook

      Reject appointment hook will be used to reject pending appointments and store the rejection action in the centralized schedule history.

        1. Retrieve patientDetails, patientAppointments, and updateAppointmentStatus from the patient details context and addScheduleHistoryEntry from the schedule history hook
        2. Retrieve userType from the login context to determine who is performing the rejection action
        3. Retrieve appointment to reject from the update patient details hook
        3. Get patientID from patientDetails for localStorage operations
        4. Create a function to handle the reject appointment action which takes reason ans alternative as parameters
          a. Get the appointment to reject either from the hook or from localStorage as fallback using 'CurrentAppointmentToReject' key
          b. If there is no appointment to reject (neither from parameter nor localStorage), log error and exit the function
          c. Create an appointment ID using the format: date-time for tracking purposes
          d. Retrieve existing rejection reasons from localStorage using the patient ID as part of the key
          e. Create a new rejection reason object with:
            i. The provided rejection reason
            ii. Any alternative suggestion (or empty string if not provided)
            iii. Timestamp of when the rejection was made
            iv. Full appointment details for reference
          f. Store the updated rejection reasons object back to localStorage with the appointment ID as the key
          g. Call updateAppointmentStatus function with the appointment and "rejected" status
          h. Determine performer details based on user type:
            i. For doctors: use doctor name and ID from the appointment
            ii. For patients: use patient name and ID from the appointment
            iii. Set type field to the current userType from login context
          i. Call addScheduleHistoryEntry function with:
            i. Updated appointment object with "rejected" status
            ii. Action type as "rejected"
            iii. Reason as the provided rejection reason
            iv. Alternative as the provided alternative suggestion
            v. Previous values containing the original appointment status
            vi. Performer details object with type, name, and ID
            vii. Detailed notes about the rejection action including date, time, and alternative if provided
            viii. No reschedule details (undefined) since this is a rejection action

        5. Return handleRejectAppointment function for use in components
        6. The hook maintains backward compatibility with existing localStorage rejection storage while integrating with the new centralized schedule history system
        7. Uses appointment data as the source of truth for performer details instead of requiring additional context providers
        



    ### Modal Context

      Modal context will be used to manage the state of the modal (Handle cancel appointment, reason for cancellation, etc.)

        1. Retrieve updateAppointmentStatus function from the patient details context and handleRejectAppointment as rejectAppointment, cancelAppointment, reason and alternative states from update patient details hook
        2. Create states for reason, alternative and isConfirmed and initialize them to an empty string and false respectively
        3. Check if the reason is not empty and isConfirmed is true, if both are true, set a boolean state to it
        4. Create a function to handle the cancel appointment

          a. If there is no appointment to cancel or the boolean state is false, exit the function early
          b. Call the cancelAppointment function with the appointment to cancel and the reason parameter
          c. Call onClose function to close the modal

        5. Create a function to handle reject appointment
          a. If there is no appointment to reject or the boolean state is false, exit the function early
          b. Call the updateAppointmentStatus function with the appointment to reject and the 'rejected' status
          c. If an onReject callback function is provided, call it with the appointment to reject and the rejection reason
          d. Call onClose function to close the modal
          e. Call the rejectAppointment function with the reason and alternative parameters

    ### Modal Header Component

      Modal header component will be used to display the header of the modal and the close button. It will be a reusable component across all patient details modals.


    ### Cancel Appointment Modal Component

      Cancel appointment modal component will be used to confirm the cancellation of the appointment.

      1. Create a Cancel Appointment Modal component and mount it on the Tab Action Button component if showCancelModal state is true 
        a. Set the modal visibility state to true (for development purposes)
        b. Add dummy appointment data for testing purposes and set it to the appointment to cancel state

      2. Create a Modal Body component and mount it on the Cancel Appointment Modal component
      3. Wrap the Modal Body component with a Modal Provider
      4. Create a Reason component and mount it on the Modal Body component if profileType is doctor
        a. It will have a text area to input the reason for cancellation
        b. If the reason is empty, show an error message

      5. Create an Alternative Input component and mount it on the Modal Body component if profileType is doctor
      6. Make the the modal scrollable if the content is too long
      7. Create a Confirmation checkbox component and mount it on the Modal Body component
        a. It will have a checkbox to confirm the cancellation 
        b. If the checkbox is not checked, show an error message

      8. Create a Modal Footer component and mount it on the Cancel Appointment Modal component

        a. It will have a button to close the modal
        b. It will have a button to confirm the cancellation
        c. Make the buttons stacked vertically on smaller screens

      9. Set the modal visibility state back to false and initialize the appointment to cancel state with null

    ### Cancel Appointment Hook

    Cancel appointment hook will be used to cancel the appointment and store the reason for cancellation in local storage.

      1. Retrieve updateAppointmentStatus from the patient details context and addScheduleHistoryEntry from the schedule history hook
      2. Retrieve the appointmentToCancel from updatePatientDetails hook 
      3. Create a function to handle the cancel appointment which takes reason and alternative as parameters 
        a. Get the appointment to cancel either from the hook state or from localStorage as fallback
        b. If there is no appointment to cancel (neither from state nor localStorage), log error and exit the function
        c. Call the updateAppointmentStatus function with the appointment and the "cancelled" status
        d. Create an appointment ID using the format: date-time
        e. Retrieve existing cancellation reasons from localStorage using the patient ID as part of the key
        f. Create a new cancellation reason object with the provided reason, alternative, timestamp, and appointment details
        g. Store the updated cancellation reasons object back to localStorage with the appointment ID as the key

      4. Store the appointment cancellation in schedule history
        a. Call addScheduleHistoryEntry function with appointment, "cancelled" action type, reason, and alternative parameters
        b. Pass performedBy object with patient information from the appointment (type: "patient", name, and _id)



    ### Reject Appointment Modal Component 

    Reject appointment modal component will be used to confirm the rejection of the appointment. It will have a similar structure to the Cancel Appointment Modal component.

    ### Reschedule Modal Context

    Reschedule modal context will be used to manage the state of the modal (Handle rescheduling of the appointment)

      1. Retrieve newDate, newTime, setNewDate, setNewTime from the date and time context
      2. Initialize date and time states from appointment data
      3. Create a state for isConfirmed and initialize it to false
      4. Check if the new date and time are not empty and isConfirmed is true, if both are true, set a boolean state to it
      5. Create a function to handle the reschedule confirmation
        a. If there is no appointment to reschedule or the boolean state is false, exit the function early
        b. Call onClose function to close the modal

      6. Create states for selected doctors and available doctors and initialize them to null and doctors in doctors data respectively
      7. Create a function to filter the doctors based on speciality
      8. Create a function to reset the filtered doctors to show all doctors
        a. Filter the current doctor from the available doctors array

      9. Retrieve the reschedule appointment function from the reschedule appointment hook
       a. Assign the function to a boolean variable
       b. If the boolean state is true, call the onClose function to close the modal

      10. Create a state for consultation type and initialize it to null

    ### Date Time Context

    Date Time context will be used to provide date and time state to the date picker context.

      1. Create a state for date and initialize it to initial date (which is null)
      2. Create a state for time and initialize it to null (which is null)


    ### Reschedule Modal Component

    Reschedule modal component will be used to confirm the rescheduling of the appointment. 

      1. Create a Reschedule Modal component and mount it on the Tab Action Button component if showRescheduleModal state is true
      2. Create a Modal Body component and mount it on the Reschedule Modal component. Wrap the Modal Body component with a Modal Provider

        #### Date Picker Context

        Date Picker context will be used to manage the state of the date picker (Handle date selection)

          1. Retrieve the date and time states from the date time context as newDate and newTime respectively
          2. Create a state for selected date and initialize it to newDate
          3. Update the selected date state with newDate if newDate is available
          4. Update newDate state with the selected date if it is available and newDate and selected date change
          5. Create a function to get days in a month and return an array of days in the month
          6. Create a function to get the first day of the month and return the day of the week
          7. Create a function to navigate to the previous month and update the current month state
          8. Create a function to navigate to the next month and update the current month state
          9. Create a function to check if a date is in the past and return a boolean to check if the date is in the past
          10. Create a function to check if a date is selected and return a boolean to check if the date is selected
          11. Create a function to check if a date is today and return a boolean to check if the date is today
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
            c. Set selectedTime with external time if available when external time changes
            d. Set external time with selectedTime if available when selectedTime changes
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

        1. Create a Select Time Display component that can work with either DatePickerContext or ScheduleAppointmentContext
          a. Accept a `useScheduleContext` prop to determine which context to use (default: false)
          b. Get `openTimePicker` from the DatePickerContext
          c. Get time value from the appropriate context based on the `useScheduleContext` prop
              i. If using ScheduleAppointmentContext, try to get `newTime` from it
              ii. If using DatePickerContext or if ScheduleAppointmentContext is not available, get `selectedTime` from DatePickerContext
          d. Handle potential errors if the specified context is not available
        2. Render a clickable container that displays the selected time or "Select Time" if no time is selected
        3. Attach the `openTimePicker` function to show the time picker when clicked
        4. Include a clock icon to visually indicate the time selection functionality


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

      ### Consultation Type Selector Component

      Consultation Type Selector component will be used to select the consultation type

        1. Create a Consultation Type Selector component and mount it on the Modal Body component
        2. Make two radio inputs for the online and in-person consultation types

      ### Reschedule Modal Footer Component

      Modal Footer component will display a button to confirm the rescheduling of the appointment and a button to close the modal. It will be similar to cancel appointment and reject appointment modal footers.

        1. Create a Modal Footer component and mount it on the Reschedule Appointment Modal component and wrap it with Reschedule Modal Provider and Date Picker Provider. Wrap the Reschedule Modal Provider and Date Picker Provider with Date Time Provider.

    3. Create a confirmation checkbox component and mount it on Modal Body component

    ### Reschedule Appointment Hook

    Reschedule Appointment hook will be used to handle the rescheduling of the appointment

      1. Retrieve updateAppointment function from Patient Details context
      2. Create a function to handle the rescheduling of the appointment which takes appointment, newDate, newTime, consultationType and selectedDoctor as parameters
        a. If newDate, newTime, and selectedDoctor are not provided, exit the function 
        b. Create an object to store the updated appointment details
        c. Update the appointment status to "rescheduled" 
        d. Store rescheduling history
        e. Store the updated appointment details in the database and local storage

      3. Save the updated appointments to localStorage

    ### Rescheduled History Modal

    Rescheduled History Modal will be used to display the rescheduling history of the appointment.

    1. Create a Rescheduled History Modal component and mount it on the Tab Action Button component if showRescheduleHistoryModal state is true
    2. Add an onClose prop to the Rescheduled History Modal component
    3. Pass the closeRescheduleHistoryModal function as the onClose prop from the parent
    4. Call the onClose prop when the user triggers a close action (e.g., clicking the close button)
    5. Ensure the modal closes properly and updates the modal visibility state
    6. Create an interface of the rescheduling history
    7. Create a function to get the rescheduling history of the appointment which returns an array of rescheduling history
    8. Create a Modal Body component and mount it on the Rescheduled History Modal component; it will display the original appointment details and the rescheduled appointment details
    9. Create a Reason component and mount it on the Modal Body component; it will display the reason for rescheduling
      a. Retrieve patient details from the patient details context 
      b. Create a state for rejection data with type RejectionData or string and initialize it to null
      c. Every time patient details change, do the following:
        i. Retrieve the reason for rescheduling from local storage
      d. Get most recent rejection data 
      e. Display the reason for rescheduling if it exists

  ### Schedule Appointment Context

  Schedule Appointment Context will be used to store the new appointment details and provide it to the Schedule Appointment Modal component

    1. Retrieve newDate and newTime from Date Time context
    2. Create the following states:
      a. consultationType and initialize it to the props passed
      b. isConfirmed and set it to false

    2. Integrate with DatePickerContext to reuse the DatePicker and TimePicker components
      a. Get selectedDate and selectedTime from DatePickerContext
      b. Use these values for newDate and newTime in the Schedule Appointment Context

    3. Create a validation check (isValid) that ensures all required fields are filled
      a. Check if newDate, newTime, consultationType are all provided
      b. Verify that isConfirmed is true

    4. Create a function to handle the schedule appointment submission
      a. If isValid is false or there is no patient details, exit the function
      b. If there are valid inputs (newDate, newTime, consultationType, and isConfirmed):
         i. Call scheduleAppointment with the necessary parameters (newDate, newTime, consultationType, appointment)
         ii. If the scheduling is successful (scheduleSuccess is true), close the modal by calling onClose()

  ### Schedule Appointment Modal

  Schedule Appointment Modal will be used to schedule a new appointment

    1. Create a Schedule Appointment Modal component and mount it on the Tab Action Button component if showScheduleNewAppointmentModal state is true and pass onClose prop
    2. Mount the Modal Header component and Modal Body component on the Schedule Appointment Modal component and pass onClose prop
    3. Create a Modal Body component and mount it on the Schedule Appointment Modal component and wrap it with DatePickerProvider and ScheduleAppointmentProvider. Wrap the DatePickerProvider and ScheduleAppointmentProvider components with a DateTimeProvider
      a. Mount the DatePicker and TimePicker components on the Modal Body component
      b. Create a ScheduleConsultationTypeSelector component and mount it on the Modal Body component. It will similar to ConsultationTypeSelector on Reschedule Appointment Modal
      c. Create a ConfirmationCheckbox component and mount it on the Modal Body component. It will be similar to the ConfirmationCheckbox on Reschedule Appointment Modal
    
    4. Create a Modal Footer component and mount it on the Schedule Appointment Modal component; it will have a button to close the modal and a button to schedule the appointment

  ### Schedule Appointment Hook

    Schedule Appointment Hook will be used to schedule a new appointment and store the new appointment details in the local storage

    1. Retrieve patient details, patient appointments, and updateAppointment function from the PatientDetailsContext
    2. Create a function to schedule a new appointment which takes an object with appointment, newDate, newTime and consultationType as parameters
      a. If any of the required parameters are not provided, exit the function and return false
      b. Create a new appointment object by spreading the original appointment and updating with the provided parameters
      c. Call the updateAppointment function to update the appointment in the application state
      d. Get existing appointments from local storage and update the specific appointment in the array
      e. Save the updated appointments array back to local storage using the patientID as part of the key
      f. Return true to indicate that the appointment was successfully scheduled

  ### Schedule History Modal

  Schedule History Modal will be used to display the patient's schedule history

    1. Create a Schedule History Modal component and mount it on the Tab Action Button component if showScheduleHistoryModal state is true and pass onClose prop
    2. Mount the Modal Header component on the Schedule History Modal component and pass onClose and title props
            3. Create an interface for the rescheduling history that tracks all appointment actions and changes
      a. Use ScheduleHistoryItem interface to track individual actions (scheduled, rescheduled, cancelled, rejected, approved, completed)
      b. Include the full AppointmentType object to maintain complete appointment data for each history entry
      c. Track who performed each action using performedBy field:
        i. appointment.patient & appointment.doctor: Define who the appointment is between (appointment participants)
        ii. performedBy: Identifies who initiated/performed the specific action (action performer)
          - Examples: Patient schedules → performedBy = patient, Doctor approves → performedBy = doctor
      d. For rescheduled appointments, store previousValues to track what changed (date, time, doctor, consultationType)
      e. Include optional reason and alternative fields for cancellations and rejections
      f. Add timestamp for each action and optional notes for additional context
      g. Include optional rescheduleDetails for rescheduled appointments containing:
        i. originalAppointment object with previous date, time, consultationType, doctorName, and doctorID
        ii. newAppointment object with updated date, time, consultationType, doctorName, and doctorID
        iii. This provides detailed before/after comparison for rescheduled appointments

    4. Create a function to get the rescheduling history of the appointment which returns an array of ScheduleHistoryItem objects
      a. Retrieve history from localStorage using appointment ID as the key
      b. Parse and return the complete history array showing the full lifecycle of appointment changes
      c. Each history item contains the appointment state at that point in time and who made the change

    5. Create a Modal Body component and mount it on the Schedule History Modal component
      a. If there is no scheduling history, display a message indicating that there is no history to display
      b. If there is scheduling history, display a card for each history item showing when the appointment was scheduled, previous appointment, reason, alternative, and who made the change and notes. 
      c. Loop through the history array and create a card for each item
        i. Create a ScheduleHistoryHeader component and mount it on the Schedule History Card component and pass actionType and timeStamp as props
           The ScheduleHistoryHeader component displays the action label and timestamp for each history item

          - Create getActionLabel function that takes action string as parameter and returns appropriate label:
            *"cancelled" returns "Appointment Cancelled"*
            *"rescheduled" returns "Appointment Rescheduled"*
            *"rejected" returns "Appointment Rejected"*
            *"approved" returns "Appointment Approved"*
            *"pending" returns "Appointment Pending"*
            *"completed" returns "Appointment Completed"*
            *"follow-up" returns "Follow-up Scheduled"* 
            *default returns "Appointment Updated"*

          - Create getActionColor function that takes action string as parameter and returns appropriate CSS color class:
            *"cancelled" returns "text-red-600"*
            *"rescheduled" returns "text-blue-600"*
            *"rejected" returns "text-red-600"*
            *"approved" returns "text-green-600"*
            *"pending" returns "text-yellow-600"*
            *"completed" returns "text-gray-600"*
            *"follow-up" returns "text-blue-600"*
            *default returns "text-gray-600"*

          - Display the action label with appropriate color styling using the getActionColor function
          - Format the timestamp showing both date and time in a readable format

        ii. Create Schedule History Details component and mount it on the Schedule History Card component and pass the history item as a prop
          - Display current appointment details (date, time, doctor, consultation type)
          - Display past appointment details (date, time, doctor, consultation type) if available

        iii. Create Schedule History Metadata component and mount it on the Schedule History Card component and pass performedBy, reason, altenative, and notes as props
          - Display who made the change
          - Display reason, alternative, and notes if available

  ### Schedule History Hook

    Schedule history hook will be used to manage schedule history of appointments and provide centralized storage for all appointment actions.

      1. Retrieve patientDetails from Patient Details context
      2. Create a function to add a new history item to the schedule history array which takes appointment, actionType, reason, alternative, previousValues, performedBy and notes as parameters
        a. If there is no patientDetails, exit the function 
        b. Get the existing history array from localStorage using patientID as the key
        c. Create a new history item object with the appointment, actionType, reason, alternative, previousValues, performedBy, notes, ID and timestamp
        d. Add the new history item to the history array at the beginning
        e. Save the updated history array to localStorage using patientID as the key

      3. Create a function to get the schedule history of the appointment which returns an array of ScheduleHistoryItem objects
        a. If there is no patientDetails, return an empty array
        b. Retrieve history from localStorage using patientID as the key
        c. Parse and return the complete history array showing the full lifecycle of appointment changes

      4. Update other hooks for updating appointment to use Schedule History hook

  ### Manage Appointment Modal

    Manage Appointment Modal will be used to provide doctors with quick status management and appointment overview functionality for efficient appointment handling.

      1. Create a Manage Appointment Modal component and mount it on the Tab Action Button component if the showManageModal state is true and pass closeManageModal as a prop
      2. Mount ModalHeader component on the Manage Appointment Modal component and pass title and onClose as props
      3. Create a ModalBody component and mount it on the Manage Appointment Modal component
      4. Create a StatusManagement component and mount it on the ModalBody component
      5. Create a LiveChat Component and mount it on the ModalBody component
      6. Create a Video Call Component and mount it on the ModalBody component


  ### Status Management Component

    Status Management Component will be used to mark the appointment as completed.

      1. Retrieve handleMarkAsComplete function from complete appointment hook
      2. Create a button and attach handleMarkAsComplete as an onClick event handler

  #### Complete Appointment Hook

    Complete Appointment Hook will be used to handle the completion of an appointment and update the appointment status accordingly.

      1. Retreive updateAppointmentStatus from patient details context, addScheduleHistoryEntry from schedule history hook and userType from the login context
      2. If there is no appointmentToManage, return null
      3. Create a function to mark the appointment as completed
        a. Call updateAppointmentStatus with the appointment and status of 'completed'
        b. Get perfomer details from appointment data
        c. Add a new history item to the schedule history array using addScheduleHistoryEntry function
        
      4. Close the manage appointment modal

  ### Add Notes Modal Component

    Add Notes Modal Component will be used to add notes to an appointment.

      1. Create a Add Notes Modal component and mount it on the Tab Action Button component if the showAddNotesModal state is true and pass closeAddNotesModal as a prop
      2. Mount ModalHeader component on the Add Notes Modal component and pass title and onClose as props
      3. Create a ModalBody component and mount it on the Add Notes Modal component and  wrap it with AddNotesProvider
      4. Create a ModalFooter component and mount it on the Add Notes Modal component and pass closeAddNotesModal and triggerFollowUpScheduling from Schedule Follow Up Hook as props 
        a. Create a button to close the modal and attach closeAddNotesModal as an onClick event handler
        b. Create a button to submit the notes 
          i. Attach handleSubmit as an onClick event handler
        
        c. Create a button to schedule a follow up appointment if followUpDate is selected and appointmentToAddNotes is available
         i. Attach triggerFollowUpScheduling as an onClick event handler if appointmentToAddNotes is available
         ii. Make the button disabled if appointmentToAddNotes is null and followUpDate is not selected

      5. Retrieve pendingFollowUp, confirmFollowUpScheduling and cancelFollowUpScheduling from Schedule Follow Up Hook
      6. Create a Follow Up Modal component and mount it on the Add Notes Modal component if pendingFollowUp is true and pass pendingFollowUp, confirmFollowUpScheduling and cancelFollowUpScheduling as props

  #### Follow Up Modal Component

  Follow Up Modal Component will be used to let the doctor review or edit the follow up date for scheduling a follow up appointment.

    1. Mount ModalHeader component on the Follow Up Modal component and pass title and onClose as props
    2. Create a ModalBody component and mount it on the Follow Up Modal component and pass followUp and onClose as props
      a. Wrap ModalBody with DateTimeProvider, ScheduleAppointmentProvider, ScheduleProovider and DatePickerProvider to provide the necessary context for date, time, and consultation type selection.
      b. Pass the consultationType from the followUp data as a prop to ScheduleAppointmentProvider to ensure the correct initial consultation type is set.
      c. Mount DatePicker, TimePicker, and ScheduleConsultationTypeSelector components inside the providers.
      d. Use a FooterWrapper component inside the providers to access context hooks only within the provider tree, preventing context errors.

  ### Add Notes Context

    Add Notes Context will be used to manage the state of adding clinical notes to completed appointments and provide form data to the Add Notes Modal component.

      1. Create the following states:
        a. notes and initialize it to an empty string
        b. prescription and initialize it to an empty string
        c. diagnosis and initialize it to an empty string
        d. follow up date and initialize it to an empty string
        e. isSubmitting and initialize it to false
        f. appointmentNotes and initialize it to data from localStorage, otherwise an empty array

      2. Create a function to add notes to the appointment which takes notes as a parameter
        a. Create updateNotes array with the previous notes and the new notes
        b. Update the appointmentNotes state with the updated notes array
        c. Update the localStorage with the updated appointmentNotes using patientID as the key

      3. Create a function to get appointment notes which takes appointmentID as a parameter
        a. Filter the appointmentNotes array to find the appointment with the given ID
        b. Return the notes of the found appointment

      4. Create a function to reset the form data
         a. Set the notes, prescription, diagnosis, follow up date, and isSubmitting states to their initial values 

    #### Modal Body Component

      1. Create an NotesForm component and mount it on the ModalBody component
        a. Create a ClinicalNotesInput component and mount it on the NotesForm component
          i. Create a TextArea and make it controlled by the notes state
          ii. If the notes state is empty, display a message that says "Clinical notes are required"

        b. Create a DiagnosisInput component and mount it on the NotesForm component
          i. Create a TextArea and make it controlled by the diagnosis state

        c. Create a PrescriptionInput component and mount it on the NotesForm component
          i. Create a TextArea and make it controlled by the prescription state

        d. Create a FollowUpDateInput component and mount it on the NotesForm component
          i. Reuse the DatePicker component and wrap it with DateTimeProvider and DatePickerProvider, and pass the follow up date state as a prop to both providers
          ii. Create a DatePickerWrapper component to bridge the gap between DatePicker's selectedDate and AddNotes context's setFollowUpDate
          iii. Use useEffect to sync selectedDate from DatePicker with setFollowUpDate in AddNotes context
          iv. Convert selectedDate to ISO string format (YYYY-MM-DD) before setting followUpDate state
          v. If there is no follow up date, display a message that says "Please select a follow-up date to schedule a follow-up appointment."

    #### Add Notes Hook

    Add Notes Hook will be used to handle the submission of notes. It will take appointment as a parameter

      1. Retreive notes, prescription, diagnosis, follow up date, addAppointmentNotes and resetForm from Add Notes contexts
      2. Retrieve patient details from patient details context
      3. Create a function to handle the submission of notes 
        a. If the notes, appointment or patient details are empty, exit the function  
        b. Create a new appointment object with ID, appointmentID, patientID, doctorID, notes, prescription, diagnosis, follow up date, created at timeStamp, and doctor name
        c. Call addAppointmentNotes with the new appointment object
        d. Reset the form data
        e. Close the modal

    #### Schedule Follow Up Hook

    The Schedule Follow Up Hook manages the process of automatically scheduling a follow-up appointment when a doctor adds a note with a follow-up date. The flow ensures the doctor can review and edit the follow-up before it is finalized.

    1. Create a state to store `pendingFollowUp` and initialize it to null.  
      - This state holds the details of the follow-up appointment that is being prepared but not yet confirmed.

    2. Retrieve the `scheduleAppointment` function from the Schedule Appointment hook.  
      - This function will be used to actually create the new appointment once the doctor confirms.

    3. Create a function `triggerFollowUpScheduling` which takes an appointment and a follow-up date as parameters:  
      a. If the appointment or follow-up date is not provided, exit the function and alert the user.
      a. Extract the default time (usually the same as the original appointment) and consultation type from the appointment.  
      b. Set the `pendingFollowUp` state with the appointment, follow-up date, default time, and consultation type.  
      - This step is like preparing a draft of the new appointment and showing it to the doctor for review.

    4. Create a function `confirmFollowUpScheduling` which takes appointment, date, time, and consultation type as parameters:  
      a. Call `scheduleAppointment` with the provided appointment details.  
      b. Reset the `pendingFollowUp` state to null after scheduling.  
      - This step finalizes the follow-up appointment after the doctor reviews and confirms the details.

    5. Create a function `cancelFollowUpScheduling` which resets the `pendingFollowUp` state to null.  
      - This allows the doctor to cancel the follow-up scheduling process if they change their mind.

    6. Use the `pendingFollowUp` state to control the display of a modal or review screen, allowing the doctor to edit and confirm the follow-up appointment before it is scheduled.

  ### View Notes Hook

  View Notes Hook will be used to fetch and display the notes for a specific appointment. It will take appointment as a parameter.

    1. Create a state to store appointment notes and initialize it to an empty array
    2. Retrieve patient details from patient details context
    3. Whenever appointment and patient details change, do the following:
      a. If appointment and patient details are empty, set appointment notes to an empty array and exit the function
      b. Fetch the notes for the appointment from localStorage using the patientID as the key
      c. If the notes are found, parse them as allNotes
      d. Filter the allNotes array to find the notes for the appointment
      e. Set the appointment notes to the filtered notes array
      f. If the notes are not found, set appointment notes to an empty array

  ### View Notes Modal Component

  View Notes Modal Component will be used to display the notes for a specific appointment. 

    1. Create a ViewNotesModal component and mount it on the Tab Action Button component if the showViewNotesModal is true
    2. Mount ModalHeader component on the View Notes Modal component and pass title and onClose as props
    3. Create a ModalBody component and mount it on the View Notes Modal component 

    #### Modal Body Component

      1. Retrieve hasNotes from View Notes context
      2. If hasNotes is false, display a message that say "No notes available for this appointment."
      3. Map through the appointment notes and create a NoteList component for each note and pass note and index as props

    #### Note List Component

      1. Create a Note Header component and mount it on the Note List component and pass note's index and note.createdAt as props
      2. Display the note's created at timeStamp and the note's title
      3. Create a Note Content component and mount it on the Note List component and pass note.notes as a prop
      4. Create a Note Diagnosis component and mount it on the Note List component and pass note.diagnosis as a prop
      5. Create a Note Prescription component and mount it on the Note List component and pass note.prescription as a prop
      6. Create a Note Follow Up component and mount it on the Note List component and pass note.followUpDate as a prop

  ### Document Tab Context

  Document Tab Context will be used to handle all UI logic for uploading, viewing, downloading, and deleting documents.

    1. Create the following states:
      a. showUploadArea and initialize it to false
      b. selectedFiles and initialize it to an empty array
      c. selectedDocument and initialize it to null
      d. showViewModal and initialize it to false
      e. isDownloading and initialize it to false
      f. showDeleteModal and initialize it to false
      g. documentToDelete and initialize it to null

    2. Create a function `toggleUploadArea` which toggles the showUploadArea state
      a. Set showUploadArea to the opposite of its current value

    3. Create a function `openViewModal` which takes document as a parameter
      a. Set selectedDocument to the document parameter
      b. Set showViewModal to true

    4. Create a function `closeViewModal` which closes the view modal
      a. Set showViewModal to false
      b. Set selectedDocument to null

    5. Create a function `openDeleteModal` which takes document as a parameter
      a. Set documentToDelete to the document parameter
      b. Set showDeleteModal to true

    6. Create a function `closeDeleteModal` which closes the delete modal
      a. Set showDeleteModal to false
      b. Set documentToDelete to null

  ### Document Tab Component

  Document Tab Component will be used to upload, view, download, and delete documents.

    1. Set the active tab to "Documents" by default on the Patient Details Context
    2. Create a component for the Document Tab and mount it on the Tab Content component with id of "documents". Wrap it with the Document Tab Context Provider
    3. Create a component for the Document Tab Header and mount it on the Document Tab component
      a. Add a button for the upload a document
      b. Attach a click event listener to the button that calls the toggleUploadArea function from the Document Tab Context

      #### Document Upload Area Component

      1. Create a component for the Document Upload Area and mount it on the Document Tab component when showUploadArea is true
      2. Create a component for browse files button and mount it on the Document Upload Area component
        a. Attach the following event listeners to
          i . The parent div: onDrragover will call `handleDragOver`, onDrop will call `handleDrop`,
          onClick will call `handleBrowseClick` from file select hook
          ii. The browser button: onClick will call `handleBrowseClick` from file select hook
        
        b. Create an input element of type file in the browse files button and attach the `handleFileSelect` function from the file select hook to the onChange event listener

        a. Attach the following event listeners to
          i . The parent div: onDrragover will call `handleDragOver`, onDrop will call `handleDrop`,
          onClick will call `handleBrowseClick` from file select hook
          ii. The browser button: onClick will call `handleBrowseClick` from file select hook
        
        b. Create an input element of type file in the browse files button and attach the `handleFileSelect` function from the file select hook to the onChange event listener

      2. Display supported file types and maximum file size
      3. If the selectedFiles array is greater than 0, mount SelectedFiles component on the Document Upload Area component

        ##### Selected Files Component

        1. Retrieve selectedFiles from Document Tab Context
        2. If there are no selected files, exit the component
        3. Map through the selectedFiles array and create a SelectedFileCard for each file and pass file and index as props
        4. SelectedFileCard component will display the file name, size, and a remove button
        5. Attach an onClick event listener to the remove button that will call the `removeFile` function from the file select hook and pass the index of the file to be removed

      4. Create a Upload Button component and mount it on the Document Upload Area component
        a. Retrieve `handleFileUpload`, `isUploading`, `canUpload` and `selectedFilesCount` from file upload hook
        b. Display an Upload button with a disabled attribute if `canUpload` is false and attach an onClick event listener to the button that will call the `handleFileUpload` function 
          i. If `isUploading` is true, display a message indicating that the files are being uploaded

    ### File Selection Hook

    File selection hook will be used to handle file selection, drag and drop, validate file size and type, and add files to the selectedFiles array

      1. Retrieve selectedFiles state from Document Tab Context
      2. Create a `validateFiles` function that will validate the file size and type. It will take an array of files as an argument and return an array of valid files
        a. Create a constants
          i. `validFiles` to hold the valid files
          ii. `maxSize` to hold the maximum file size in bytes which is 10MB
          iii. `allowedTypes` to hold the allowed file types which are PDF, JPG, JPEG, PNG, MSWORD

        b. Loop through the files array and check if the file size is greater than the maximum size and if the file type is not in the allowed types. If they are, exit the loop and return. If not, add the file to the validFiles array
      
      3. Create a `handleFileSelection` function that will handle file selection. It will take an event as an argument
        a. Extract files from the event target using `e.target.files`
        b. Check if files exist and have length greater than 0 to ensure valid file selection
        c. If valid files are present:
          i. Call `validateFiles` function to validate the selected files against allowed types and size limits
          ii. Update the selected files state using `setSelectedFiles` with the validated files array
          iii. This ensures only valid files are stored in the component state
      
        d. The function handles both single and multiple file selections
        e. Invalid files are filtered out during validation, maintaining data integrity
        f. The validated files are then available for further processing (upload, preview, etc.)

      4. Create a `handleDrag` function that will handle drag and drop events. It will take an event as an argument
        a. Prevent the default behavior of the event to allow for custom drag and drop handling
        b. Stop the propagation of the event to prevent it from triggering other event listeners

      5. Create a `handleDrop` function that will handle the drop event. It will take an event as an argument
        a. Prevent the default behavior of the event to allow for custom drag and drop handling
        b. Stop the propagation of the event to prevent it from triggering other event listeners
        c. Check if the event contains files
        d. If files are present:
          i. Call `validateFiles` function to validate the dragged files against allowed types and size limits
          ii. Update the selected files state using `setSelectedFiles` with the validated files array
          iii. This ensures only valid files are stored in the component state

      6. Create a `handleBrowseClick` function that will handle will open the file picker dialog when the "Browse" button is clicked
      7. Create a `removeFile` function that will remove a file from the selected files array when the "Remove" button is clicked
      8. Create a `clearFiles` function that will clear all selected files 

    ### File Upload Hook

    Files upload hook will be used to upload the selected files to firebase storage and update local state with the uploaded files

      1. Retrieve the selected following:
        a. `isUploading`, `setIsUploading` and `setShowUploadArea` from Document Tab Context
        b. `selectedFiles` and `clearFiles` from File Selection hook
        c. `addDocument` from `Patient Details Context`
        d. `profile` from `Profile Context`
        e. `appointmentID` from `Appointment Context`

      2. Create a reusable `uploadAndProcessFile` function that will process the file and convert it to a `DocumentType` object which will have the following properties:
        a. `_id`: unique identifier (generated with uuid)
        b. `name`: file name
        c. `type`: normalized MIME type (e.g., "application/pdf", "image/jpeg", etc.)
        d. `size`: file size in bytes
        e. `uploadDate`: current date
        f. `uploadedBy`: uploader's name (from profile context or dummy data)
        g. `uploadedByID`: uploader's ID (from profile context or dummy data)
        h. `content`: file content as a base64 string (from FileReader)
        
      3. Create a `uploadFileToFirebase` function that takes file and document as parameters and returns a promise of `DocumentType` object
        a. Create unique file name by combining file name and random ID
        b. Use `ref` from `storage` to create a reference to the file
        c. Use `uploadBytes` to upload the file to Firebase Storage
        d. Use `getDownloadURL` to get the download URL of the uploaded file

      4. Create a `uploadAndProcessFile` function that takes file as parameter and returns a promise of `DocumentType` object
        a. Call `uploadAndProcessFile` to process the file and get the document
        b. Call `uploadFileToFirebase` to upload the file to Firebase Storage and get the document
        c. Return the document

      3. Create a `handleFilesUpload` function that will be called when the "Upload" button is clicked
        a. Check if there are any files selected, if not, exit the function
        b. Set `isUploading` to true
        c. Use `Promise.all` to map all `selectedFiles` through the `uploadAndProcessFile` function, creating an array of `DocumentType` objects.
        d. Select the first file from `selectedFiles` object
        e. Upload the file to firebase storage using the `uploadBytes` function from the `firebase/storage` module
        f. Call `addDocument` and pass the `DocumentType` object to it
        g. Clear the selected files
        h. Set `showUploadArea` to false

      3. Create a `canUpload` boolean state that will be used to disable the "Upload" button if there are no files selected and the upload process is not in progress

    3. Create a DocumentsList component and mount it to the Document Tab component if `documents` is not empty

      #### DocumentsList Component

      1. Retrieve `documents` from Patient Details Context
      2. Loop through the `documents` array and create a DocumentCard component for each document

      #### DocumentCard Component

      1. Create a DocumentCardHeader component and mount it to the DocumentCard component and pass the document as a prop

        a. Create a function to get file icon based on the file type (image or file)
        b. Create a function to format the date
        c. Display the document's icon, name, uploaded date, and uploaded by

      2. Create a DocumentCardActions component and mount it to the DocumentCard component and pass the document as a prop
        a. Retrieve `openViewModal` and `openDeleteModal` functions from Document Tab Context
        b. Display buttons to download, view, and delete the document
        c. Attach event listeners to the buttons to call the respective functions when clicked: View button calls `openViewModal` function, Delete Button calls `openDeleteModal` function
        d. Attach event listener to the download button to call the `downloadDocument` function from Download Document Hook 

    3. Create a ViewDocumentModal component and mount it to the Document Tab component if `showViewModal` is true from Document Tab Context

      #### View Document Modal Component

      ViewDocumentModal component will be used to display the document in a modal window

        1. Retrieve `closeViewModal` function from Document Tab Context
        2. Reuse the ModalHeader and pass title and `closeViewModal` function as props
        3. Create a ModalBody component and mount it to the ViewDocumentModal component and pass the document as a prop
          a. Create a DocumentInfo component and mount it to the ModalBody component and pass the document as a prop
            i. Create a function to get file icon based on file type (image or document)
            ii. Create a function to get file type based on file extension
            iii. Display the document name, type, and icon

          b. Create a FileViewer component and mount it to the ModalBody component and pass the document as a prop

          ##### File Viewer Component

          1. Create a `renderViewer` function that will render the appropriate viewer based on the file type.
            a. If the file is an image, render an Image component with the image src as the document content
            b. If the file is a pdf, render a PDFViewer component with the pdf src as the document content

        4. Create a ModalFooter component and mount it to the ViewDocumentModal component and pass document and `closeViewModal` as props
          a. Retreive `openInFullView` function from the DocumentFullView hook
          b. Display a close button that calls the `closeViewModal` function when clicked
          c. Create `handleOpenInFullView` function that calls `openInFullView` and onClose functions
          b. Display a open in full view button that calls the `handleOpenInFullView` function when clicked

      ### Document Full View Hook

      Document full view hook will be used to display the document in full view

        1. Create a `openInFullView` function that will navigate to the document full view page. It will take the document as a parameter.
          a. Store the document in the local storage
          b. Navigate to the document full view page in a new tab

        2. Create a `getFullViewDocument` function that will get the document from the local storage and return it

      ### Document Full View Page

      Document full view page will be used to display the document in full view

        1. Create a DocumentFullView page and mount it on the Script component and provide a route to it
        2. Retrieve `document` from the document from storage hook
        3. If `document` is an image, create an ImageViewer component and pass the `document` as a prop and display it
        4. If `document` is a pdf, create a PDFViewer component and pass the `document` as a prop and display it.

      ### Document From Storage Hook

      Document from storage hook will be used to get the document from the local storage

        1. Retrieve the document ID from the URL using the `useParams` hook.
        2. Retrieve the `getFullViewDocument` function from the `useDocumentFullView` hook.
        3. Create a state variable `document` and initialize it to `null`.
        4. Use a `useEffect` to:
          a. Set a timeout to retrieve the document from local storage using `getFullViewDocument`.
          b. If the document does not exist or its `_id` does not match the URL param, navigate back.
          c. If the document exists and matches, set the `document` state.
          d. On cleanup, clear the timeout 

      ### Download Document Hook

      Download document hook will be used to download the document from the server

        1. Create a `downloadDocument` function that will download the document from the server. It will take the document as a parameter.
          a. If the document does not have a `content` property, exit the function.
          b. Create a link element and set its `href` to the `content` property of the document.
          c. Set the `download` attribute to the `name` property 

    4. Create a DeleteDocumentModal component and mount it to the Documen Tab component if `showDeleteModal` is true.'

    #### Delete Document Modal

    Delete document modal will use to confirm the deletion of the document

      1. Retrieve the `closeDeleteModal` function from the Documents Tab Context
      2. Reuse the ModalHeader and pass title and `closeDeleteModal` function as props
      3. Display a message to the user asking them to confirm the deletion of the document
      4. Create a Cancel button and set its `onClick` to `closeDeleteModal` function
      5. Retrieve the `handleDeleteDocument` function from the Delete Document hook
      6. Create a Delete button and set its `onClick` to `handleDeleteDocument` function

    ### Delete Document Hook

    Delete document hook will be used to handle the deletion of the document

      1. Retrieve the `removeDocument` function from the Patient Details Context
      2. Retrieve the `closeDeleteModal` and `documentToDelete` from the Documents Tab Context
      3. Create a `handleDeleteDocument` function
      4. If there is no `documentToDelete`, exit the function.
      5. Call `removeDocument` function with ID of the `documentToDelete` as an argument
      6. Call `closeDeleteModal` function to close the modal

  ### Notes Tab Context

  Notes tab context will be used to store the user's notes and provide it to the Notes tab component

    1. Create the following state variables:
      a. `showAddNoteModal` and initialize it to `false` 
      b. `showViewNoteModal` and initialize it to `false`
      c. `showDeleteNoteModal` and initialize it to `false`
      d. `selectedNote` and initialize it to `null`
      e. `title` and initialize it to an empty string
      f. `content` and initialize it to an empty string
      g. `showAddPrescriptionModal` and initialize it to `false`
      h. `showViewPrescriptionModal` and initialize it to `false`
      i. `showDeletePrescriptionModal` and initialize it to `false`
      j. `selectedPrescription` and initialize it to `null`
      k. `showNoteCommentsModal` and initialize it to `false`

    2. Create `openAddNoteModal` function
      a. Set `showAddNoteModal` to `true`
      b. Set `selectedNote` to `null`

    3. Create `openViewNoteModal` function which takes a note as an argument
      a. Set `showViewNoteModal` to `true`
      b. Set `selectedNote` to the note passed in as an argument

    4. Create `openDeleteNoteModal` function which takes a note as an argument
      a. Set `showDeleteNoteModal` to `true`
      b. Set `selectedNote` to the note passed in as an argument

    5. Create `closeModals` function 
       a. Set `showAddNoteModal` to `false`
        b. Set `showViewNoteModal` to `false`
        c. Set `showDeleteNoteModal` to `false`
        d. Set `selectedNote` to `null`
        e. Set `showAddPrescriptionModal` to `false`
        f. Set `showViewPrescriptionModal` to `false`
        g. Set `showDeletePrescriptionModal` to `false`
        h. Set `selectedPrescription` to `null`

    6. Create `openEditNoteModal` function which takes a note as an argument
        a. Set `showAddNoteModal` to `true`
        b. Set `selectedNote` to the note passed in as an argument
        c. Set `title` to the title of the note passed in as an argument
        d. Set `content` to the content of the note passed in as an argument

    7. Create `openNoteCommentsModal` function which takes a note as an argument
        a. Set `showNoteCommentsModal` to `true`
        b. Set `selectedNote` to the note passed in as an argument

  ### Notes Tab Component

  Notes tab component will be used to display the user's general notes

    1. Set the active tab to "Notes" by default on the Patient Details Context
    2. Create a component for the Notes Tab and mount it on the Tab Content component with id of "notes". Wrap it with the Notes Tab Context Provider
    3. Create a NoteTabHeader component and mount it on the Notes Tab component.
      a. Display a title and number of notes
      b. Create a button to add a new note if the `profile` type is "doctor"
        i. On click, call `openAddNoteModal` function from the Notes Tab Context

    4. Create a AddNoteModal component and mount it on the Notes Tab component when `showAddNoteModal` from the Notes Tab Context is `true`

      ### Add Note Modal Component

      Add note modal component will be used to add a new note to the user's notes

        1. Retrieve the `closeAddNoteModal` function from the Notes Tab Context
        2. Reuse ModalHeader and pass title and `closeAddNoteModal` function
        3. Create a ModalBody component and mount it on the AddNoteModal component
            a. Create a form with a title input and a textarea for the note content
            b. Make it a controlled component and use the `title` and `content` state variables from the Notes Tab Context

        4. Create a ModalFooter component and mount it on the AddNoteModal component
            a. Create a button to submit the note
            i. Make it disabled if the title or content is empty
            ii. Call `handleAddNote` function from AddGeneralNotes hook when clicked
            b. Create a button to close the modal
            i. Call `closeAddNoteModal` function from Notes Tab Context when clicked

      ### Add General Notes Hook

      Add general notes hook will be used to update the `notes` state variable in the Notes Tab Context and save it to the database or local storage

        1. Retrieve `addNote` function from Patient Details Context
        2. Retrieve `title`, `content` states and `closeModals` function from Notes Tab Context
        3. Create `handleAddNote` function to add a new note
            a. If the title and content are empty, exit the function
            b. Create a new note object with the title, content, _id, date, doctorID and doctorName
            c. Call `addNote` function from Patient Details Context with the new note object
            d. Reset the title and content states
            e. Call `closeModals` function from Notes Tab Context

    5. Create a NotesList component and mount it on the Notes Tab component if `notes` state variable is not empty. If `notes` state variable is empty, display a message saying "No notes available for this patient."

    #### Notes List Component

      Notes List component will be used to display the list of notes for a patient

        1. Loop through the `notes` state from Patient Details Context and create a NoteItem component for each note
        2. NoteItem component will display the title, content, doctor name and date of the note
          a. Create NoteItemAction component to display the action buttons for each note
           - If `profile` type is "doctor", 
              i. Add a button to edit the note
                - Attach `openEditNoteModal` function from Notes Tab Context to the button click event
              ii. Add a button to delete the note
                - Attach `openDeleteNoteModal` function from Notes Tab Context to the button click event
              iii. Add a button to view the note in a modal
                - Attach `openViewNoteModal` function from Notes Tab Context to the button click event

            - If `profile` type is "patient",
              i. Add a button to view the note in a modal
                - Attach `openViewNoteModal` function from Notes Tab Context to the button click event
              ii. Add a button to comment on the note
                - Attach `openNoteCommentsModal` function from Notes Tab Context to the button click event
              iii. Add a button to dowload the note
                - Attach `handleExportDocument` function from Export Document hook to the button click event
            
          b. Display the truncated content of the note if it is longer than 120 characters

    6. Create a ViewNoteModal component and mount it on Notes Tab component when `showViewNoteModal` from the Notes Tab Context is `true`

    #### ViewNoteModal component

      ViewNoteModal component will be used to display the full content of a note in a modal

        1. Reuse ModalHeader and pass title and `closeViewNote` function from Notes Tab Context as props
        2. Create a ModalBody component and mount it on the ViewNoteModal component. It will display the full content of the note

    7. Create a DeleteNoteModal component and mount it on Notes Tab component when `showDeleteNoteModal` from the Notes Tab Context is `true`

    #### DeleteNoteModal component

      DeleteNoteModal component will be used to delete a note

        1. Reuse ModalHeader and pass title and `closeDeleteNote` function from Notes Tab Context as props
        2. Display a message asking the user to confirm the deletion of the note
        3. Create a cancel button and set its onClick event to `closeDeleteNote` function from Notes Tab Context
        4. Create a confirm delete button and set its onClick event to `handleDeleteNote` function from Delete Note Hook

    #### Delete Note Hook

      Delete Note Hook will be used to delete a note from the database/local storage and update the `notes` state variable

        1. Retrieve `selectedNote` and `closeModal` from the Notes Tab Context
        2. Retrieve `removeNote` from the Patient Details Context
        3. Create a function `handleDeleteNote` 
          a. If `selectedNote` is defined, 
            - Call `removeNote` function Context with `selectedNote` as argument
            - Call `closeModal` function 

    #### Edit Note Modal component

      Edit Note Modal component will be used to edit a note

        1. Reuse Add Note Modal component but change the title to "Edit Note"
        2. Create a footer similar to the Add Note Modal footer
          a. Create a cancel button and set its onClick event to `closeModal` function from Notes Tab Context
          b. Create a Edit button and set its onClick event to `handleEditNote` function from Edit General Note Hook

    #### Edit General Note Hook

    Edit General Note Hook will be used to edit a general note from the database/local storage and update the `notes` state variable

      1. Retrieve `selectedNote`, `title`, `content`, `closeModal` from the Notes Tab Context
      2. Retrieve `updateNote` from the Patient Details Context 
      3. If there is no `selectedNote`, throw an error and exit the function
      4. Prepare validation logic
        a. Trim `title` and `content` 
        b. Define `canEdit` as `title` and `content` are not empty and if either `title` or `content` is different from `selectedNote.title` or `selectedNote.content`

      5. Create a function `handleEditNote` 
        a. If `canEdit` is `false`, exit the function
        b. Create `updateNote` object with `title`, `content`, `date` and previous `selectedNote` properties
        c. Call `updateNote` function from Patient Details Context with `updateNote` as argument
        d. Call `closeModal` function

    7. Create a NoteCommentModal component and mount it to the Notes Tab component when `showNotesCommentModal` from the Notes Tab Context is `true`

      #### NoteCommentModal component

      NoteCommentModal will be used to display a chat component that will be used to display the comments of the note

        1. Retrieve `selectedNote` and `closeModal` from the Notes Tab Context
        2. Reuse the ModalHeader component and pass `title` and `closeModal` as props
        3. Create a LiveChat component and pass `selectedNote` as prop and wrap it with `LiveChatProvider`

    8. Reuse the NoteCommentModal component in the Notes Tab component in Doctor UI

  ### Medical History Tab Component

  Medical History Tab will be used to display the medical history of the patient

    1. Set the active tab to `medical-history` in the Patient Details Context
    2. Create a Medical History Tab component and mount it on the Tab Content component with id of `medical-history` and wrap it with Medical History Provider
    3. Create a MedicalHistoryTabHeader component and mount it on the Medical History Tab component
      a. Create a title for the tab    

    4. Retrieve `openAddModal` function from Medical History Context
    5. Retrieve medical history items from Patient Details Context (`medicalConditions`, `allergies`, `medications`, `surgeries`)
    6. Create a MedicalHistorySection component and mount it on the Medical History Tab component multiple times with different props:
      a. `title` prop will be the title of the section
      b. `items` prop will be the medical history items
      c. `onAdd` prop will be the `openAddModal` function
      d. `section` prop will be the section of the medical history items (e.g. `medicalConditions`, `allergies`, `medications`, `surgeries`)
      e. `onEdit` prop will be the `openEditModal` function
      f. `onDelete` prop will be the `openDeleteModal` function
       

      #### Medical History Section Component

      Medical History Section will be used to display the medical history of the patient (allergies, medications, etc). It will be a reuseable component that can be used to display any medical history section. 

        1. Create a section title to display the title of the section and a button to add a new item
        2. Duplicate the Medical History Section component multiple times with different props:
          a. `title` prop will be the title of the section
          b. `items` prop will be the medical history items
          c. `onAdd` prop will be the `openAddModal` function with the title of the section as argument
          d. `section` prop will be the section of the medical history items (e.g. `medicalConditions`, `allergies`, `medications`, `surgeries`)
          e. `onEdit` prop will be the `openEditModal` function  

        3. If the `items` is empty, display a message to the user to indicate that there is no medical history for the section
        4. If the `items` is not empty, display a list of items with a delete button and edit button for each item

    7. Create the Modal History Modal component and mount it on the Medical History Tab component if `showModal` from the Medical History Tab context is true

      #### Modal History Modal Component

      Modal History Modal will be a reusable component that can be used to add, edit, and delete medical history items. 

        1. Reuse the Modal Header component and pass the title based on the mode of the modal (add, edit, delete) and `closeModal` function as props
        2. Create a Mo\dal Body component and mount it on the Modal History Modal component
          a. Display a label based on the `targetSection` 
          b. Display a text input field for the item name

        3. Create a Modal Footer component and mount it on the Modal History Modal 
          a. Display a button for adding, editing, and deleting the item based on the mode of the modal
          b. Add an event listener to add button that calls the `addFunction` from the Medical History Action hook and passes the `targetSection` and `item` as arguments
          c. Add an event listener to delete button that calls the `deleteFunction` from the Medical History Action hook and passes the `targetSection` and `editingIndex` as arguments if there is `targetSection` and `editingIndex` is not null
          d. Add an event listener to edit button that calls the `updateFunction` from the Medical History Action hook and passes the `targetSection`, `newValue`  and `editingIndex` as arguments if there is `targetSection` and `editingIndex` is not null

  ### Medical History Tab Context

  Medical History Tab context will be used to open and close the modals for adding, editing, and deleting medical history

    1. Create the following state variables:
      a. `showModal` (boolean) to control the visibility of the modal
      b. `editingIndex` (number) to store the index of the medical history item being edited or deleted
      c. `editingValue` (string) to store the value being edited or deleted
      d. `mode` (string) to store the mode of the modal (add, edit, delete)
      e. `targetSection` (array of strings) to store the target section of the medical history item being edited or deleted (e.g. "allergies", "medications", "surgeries" or "medical conditions")
      f. `originalValue` (string) to store the original value of the medical history item being edited

    2. Create the following functions:
      a. `openAddModal` to open the add modal which takes `section` as a parameter
        i. Set `showModal` to true
        ii. Set `mode` to "add"
        iii. Set `editingIndex` to null
        iv. Set `editingValue` to empty string
        v. Set `targetSection` to the given section

      b. `openEditModal` to open the edit modal with the given index, section and value as parameters 
        i. Set `showModal` to true
        ii. Set `mode` to "edit"
        iii. Set `editingIndex` to the given index
        iv. Set `editingValue` to the given value
        v. Set `targetSection` to the given section
        vi. Set `originalValue` to the given value

      c. `openDeleteModal` to open the delete modal with the given index, section and value as parameters 
        i. Set `showModal` to true
        ii. Set `mode` to "delete"
        iii. Set `editingIndex` to the given index
        iv. Set `editingValue` to the given value (text for delete modal)
        v. Set `targetSection` to the given section

      d. `closeModal` to close the modal 
        i. Set `showModal` to false
        ii. Set `editingIndex` to null
        iii. Set `editingValue` to empty string

  ### Medical History Actions Hook

  Medical history actions hook will be used to add, edit, and delete medical history items and update them in the database/local storage.

    1. Retrieve the following from Patient Details Context:
      a. `addMedicalCondition` to add a new medical condition
      b. `updateMedicalCondition` to update a medical condition
      c. `removeMedicalCondition` to remove a medical condition
      d. `addMedication` to add a new medication
      e. `updateMedication` to update a medication
      f. `removeMedication` to remove a medication
      g. `addAllergy` to add a new allergy
      h. `updateAllergy` to update an allergy
      i. `removeAllergy` to remove an allergy
      j. `addSurgery` to add a new surgery
      k. `updateSurgery` to update a surgery
      l. `removeSurgery` to remove a surgery

    2. Create a `addFunction` which will take `section` and `value` as parameters and call the appropriate function based on the section and value
    3. Create a `removeFunction` which will take `section` and `id` as parameters and call the appropriate function based on the section and id
    4. Create a `editFunction` which will take `section`, `id`, and `newValue` as parameters and call the appropriate function based on the section, id, and newValue
    5. Prevent `addFunction` to add a new item if it already exists in the state  
    6. Prevent `editFunction` to edit an item if it has the same value as the previous one

  #### Prescription Tab

  Prescription tab will be used to add, edit, and delete prescriptions. It will have a table to display the prescriptions and a button to add a new prescription.

    1. Set the active tab to `prescriptions` in in the Patient Details Context
    2. Create a Prescription Tab component and mount it on the Tab Content component with id of `prescriptions` and wrap it with Note Tab Provider
    3. Create a PrescriptionTabHeader component and mount it on the Prescription Tab component
      a. Retrieve `openAddPrescriptionModal` from the Note Tab Provider
      b. Display the title of the tab
      c. Display the number of prescriptions in the tab
      d. Retreive `profile` from `Profile Context`
      e. If `profile` type is `doctor`;
        i. Create a button to add a new prescription
          - Call `openAddPrescriptionModal` when clicked

    4. Retrieve:
      a. `prescriptions` from the Note Tab Provider
      b. `showAddPrescriptionModal` from the Note Tab Provider
      c. `showViewPrescriptionModal` from the Note Tab Provider
      d. `showDeletePrescriptionModal` from the Note Tab Provider

    5. If `prescriptions` is empty, display a message saying "No prescriptions found"
    6. If `prescriptions` is not empty, create a PrescriptionList component and mount it on the Prescription Tab component
    7. If `showAddPrescriptionModal` is true, create a AddPrescriptionModal component and mount it on the Prescription Tab component

    ##### Add Prescription Modal

    Add prescription modal will be used to add a new prescription. It will have a form to add the prescription and a button to submit the form.

      1. Retrieve `selectedPrescription` and `closeModals` from the Note Tab Provider
      2. Mount the ModalHeader component on the Add Prescription Modal component and pass the title (if `selectedPrescription` is not null, pass "Edit Prescription", otherwise pass "Add Prescription"), and the closeModals function as the onClose function as props

      ##### Prescription Context

      Prescription context will be used to store the prescription data and provide it to the Add Prescription Modal component

        1. Create a `prescription` state variable of type `Prescription`, which is an object with the following properties:
          a. `medicineName`: string
          b. `dose`: string
          c. `frequency`: string
          d. `duration`: string
          e. `notes`: string
          f. `_id`: string
          g. `appointmentID`: string
          h. `doctorID`: string
          i. `createdAt`: string
          j. `prescriptionName`: string

        2. Create a `updateField` function which will take `field` and `value` as parameters and update the state variable accordingly
        3. Create a `addPrescription` function which will add a new prescription field in the form
        4. Create a `removeField` function which will remove a prescription field from the form
        

      3. Create a ModalBody component and mount it on the Add Prescription Modal component. Wrap it with `Prescription Provider`. It will a form
        a. Retrieve
          i. `prescriptions`, `updateField`, `addPrescription` and `removeField` from the `Prescription Provider`
          ii. `selectedPrescription` from the `Note Tab Provider`

        b. If `selectedPrescription` is there, update `prescriptions` with array of `selectedPrescription`'s `prescription` field

        c. Create a form with the following fields:
          i. Medicine Name: text input
          ii. Dose: text input
          iii. Frequency: text input
          iv. Duration: text input
          v. Notes: text area
          vi. Prescription Name: text input
      
        d. Make the form controlled components and update the state variables accordingly
        e. Create a button to add new prescription fields
          i. Atach the `addPrescription` function to the button's onClick event

        f. If `prescriptions` is not empty, create a button to remove all prescription fields
          i. Atach the `removeField` function to the button's onClick event
          
      6. Create a ModalFooter component and mount it on the Add Prescription Modal component. Wrap it with `Prescription Provider`. It will have a submit button and a cancel button   
        a. Retrieve the following:
         i. `canSave` and `handleAddPrescription` from the `Add Prescription Hook`
         ii. `selectedPrescription` from the `Note Tab Provider`
         iii. `canUpdate` and `handleEditPrescription` from the `Edit Prescription Hook`

        b. Create `canEdit` flag and set it to `canUpdate` if `selectedPrescription` is there, otherwise set it to `canSave`        
        c. Style the submit button to be disabled if `canEdit` is false
        c. Attach the `handleEditPrescription` function to the submit button's onClick event if `selectedPrescription` is there, otherwise attach the `handleAddPrescription` function
        d. Attach `onClose` prop to the cancel button's onClick event
        
      ##### Add Prescription Hook  

      The Add Prescription Hook is responsible for saving multiple prescriptions to `local storage` and syncing them across the application.  

        1. Retrieve Contexts  
          a. `prescriptions` and `setPrescriptions` from the `Prescription Provider`  
          b. `closeModals` function from the `Notes Tab Provider`  
          c. `profile` state from the `Profile Provider`  
          d. `appointmentID` state from the `Appointment Provider`  
          e. `addPrescription` function from the `Patient Details Provider`  

        2. Validation  
          a. Instead of checking only the last prescription, evaluate all prescriptions in state  
          b. A prescription is considered valid if the following properties are not empty:  
              i. `medicineName`  
              ii. `dose`  
              iii. `frequency`  
              iv. `duration`  
              v. `prescriptionName`

        3. Create New Prescription Objects  
          a. For each valid prescription, generate a new object with:  
              i. `_id`: a unique identifier  
              ii. `medicineName` (trimmed string)  
              iii. `dose` (trimmed string)  
              iv. `frequency` (trimmed string)  
              v. `duration` (trimmed string)  
              vi. `notes` (trimmed string or empty string)  
              vii. `appointmentID` (from Appointment Provider)  
              viii. `doctorID` (from Profile Provider)  
              ix. `createdAt`: the current date and time in ISO format  
              x. `prescriptionName` (trimmed string)

        4. Handle Save (`handleAddPrescription`)  
          a. Exit early if any of the following are true:  
              i. `profile` type is not `"doctor"`  
              ii. `appointmentID` is not defined  
              iii. No valid prescriptions exist  
          b. If conditions are met:  
              i. Replace the prescriptions state with:  
                - All valid prescriptions  
                - A new empty prescription row for future input  
              ii. Call `addPrescription` for each valid prescription  
              iii. Display a success message to the user, indicating how many prescriptions were added  
              iv. Call `closeModals` to close the modal  


      ##### Prescription List Component

      Prescription list component will be used to display the list of prescriptions for a given appointment

        1. Retrieve `prescriptions` from `PatientDetails` context
        2. Loop through the `prescriptions` array and create a PrescriptionItem component for each prescription
        3. Mount the PrescriptionItem component on PrescriptionsList component and pass the prescription object as a prop. Wrap it with `Prescription Provider` 
          a. Display the prescription details (medicine name, dosage, frequency, duration, notes, doctor name, createdAt and updatedAt)
          b. Display buttons to 
            a. view, edit, and delete the prescription if the  user is a doctor
            b. view, notify and export the prescription if the user is a patient

    8. If `showViewPrescriptionModal` is true, create a ViewPrescriptionModal component and mount it on the PrescriptionsList component
      a. Retrieve `closeModals` function from `Note Tab` context
      b. Mount ModalHeader on ViewPrescriptionModal component and pass title and `closeModals` function as props
      c. Create a ModalBody component and mount it on ViewPrescriptionModal component
        i. Display the prescription details (medicine name, dosage, frequency, duration, notes, doctor name and createdAt)

    9. If `showDeletePrescriptionModal` is true, create a DeletePrescriptionModal component and mount it on the PrescriptionsList component
      a. Retrieve the following:
        i. `closeModals` function from `Note Tab` context
        ii. `selectPrescription` function from `Note Tab` context

      b. Mount ModalHeader on DeletePrescriptionModal component and pass title and `closeModals` function as props
      c. Display a message asking the user to confirm the deletion of the `selectedPrescription`  
      d. Create buttons for confirming and canceling the deletion
        i. On cancel, call `closeModals` function
        ii. Retrieve `handleDeletePrescription` function from `DeletePrescription` hook
        iii. On confirm, call `handleDeletePrescription` function

    #### Delete Prescription Hook

    Delete prescription hook will be used to delete the selected prescription and to remove from local storage

      1. Retreive `selectedPrescription` and `closeModals` function from `Note Tab` context
      2. Create a `handleDeletePrescription` function that will be called when the user confirms the deletion
        a. If `selectedPrescription` is not null, delete it from local storage and call `closeModals` function
        b. Show a toast message indicating that the prescription was deleted

        
    #### Edit Prescription Hook

    The Edit Prescription Hook will be used to edit an existing prescription from the database/local storage and update the `prescriptions` state variable

      1. Retrieve `selectedPrescription`, `closeModals` from the `Notes Tab Context`
      2. Retrieve `updatePrescription` from the Patient Details Context
      3. If there is no `selectedPrescription`, throw an error and exit the function
      4. Prepare validation logic
        a. Trim `medicineName`, `dose`, `frequency`, `duration`, and `notes`
        b. Define `canUpdate` as all fields being non-empty after trimming
      5. Create a function `handleEditPrescription`
        a. If `canUpdate` is `false`, exit the function
        b. Create `updatedPrescription` object with trimmed values and previous `selectedPrescription` properties
        c. Call `updatePrescription` function from Patient Details Context with `selectedPrescription._id` and `updatedPrescription` as arguments
        d. Call `closeModals` function
        e. Show success alert to the user

    #### Export Document Hook

    Export Document Hook will be used to export either a prescription or a note to a PDF file.

      1. Create a `handleExportDocument` function with two arguments:
        a. `docData`: the document data, either `PrescriptionType` or `NoteType`
        b. `type`: a string indicating the type of document ("prescription" or "note")

      2. Inside `handleExportDocument`:
        a. Create an instance of `jsPDF` (`doc`)
        b. Set the document title:
            i. If `type` is "prescription", use `docData.prescriptionName`
            ii. If `type` is "note", use `docData.title`

        c. Set font size for content
        d. Add document-specific details:
            i. **Prescription**:
              - Medicine Name
              - Dose
              - Frequency
              - Duration
              - Notes (if any)
              - Prescribed By
              - Prescribed On

            ii. **Note**:
              - Content
              - Author/Doctor Name
              - Date
              
        e. Construct a filename based on `type` and document title/ID
        f. Save the PDF file
        g. Show an alert confirming successful export

### Settings Context

Settings context will be used to store the user's settings and provide it to the Settings page

  1. Consultation settings (fees, duration, currency)
  2. Availability settings (new patients, online/in-person consultations)
  3. Notification preferences with user-specific controls
    a. Base notifications for all users (email, SMS, appointments, bookings)
    b. Additional settings for doctors (payments, system updates)

  4. Create `handlePrescriptionReminderToggle` function which takes `prescriptionID` as a parameter
    a. Calculate new reminder value 
    b. Create an updated notification settings object with updated reminder value
    c. Call `updateNotificationSettings` function with the updated notification settings object
    d. Save the updated notification settings object to the local storage

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
      - Retrieve `userID` from `LoginContext`

    b. Initialize state variables with dummy data
       - Check if the schedule is saved in localStorage, if yes, use it as the initial state. Otherwise, use the dummy data.
    c. Create a state variable for isChanged and set it to false
    d. Create a `loading` state variable and set it to false

  3. Create `fetchSchedule` function to fetch the schedule from the firebase database and call it whenever the `userID` changes
    a. If `userID` is not available, exit the function
    b. Set `loading` to true
    c. Use `getDoc` to fetch the schedule from the firebase database and assign it to the `scheduleDoc` variable
    d. If `scheduleDoc` exists;
      i. Set `schedule` to the `scheduleDoc` data

    e. If `scheduleDoc` does not exist;
      i. Set `schedule` to the dummy data

    f. Set `loading` to false


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
  8. Make the button disabled if the schedule is not changed. And add a loading text while the schedule is being saved
  9. On button click, send the updated schedule to the backend
  10. Retrieve `loading` from ScheduleContext and display a loading spinner while the component is fetching data


### Schedule Management Hook

Schedule management hook handles all schedule-related operations and state management.

  1. Initialize state variables
    a. Get schedule data, setSchedule, isChanged, setIsChanged, and setLoading from ScheduleContext
    b. Get userID from LoginContext
    c. Get showToast function from useToast hook
    d. Create a `isSaving` state variable to track whether the schedule is being saved

  2. Handle status updates
    a. Create handleInputChange function that:
      i. Takes event, date and slotIndex as parameters
      ii. Extracts status and time from selected value
      iii. Formats value to match data structure (time - status)
      iv. Maps through `schedule.availableSlots` to find matching date
      v. Updates the specific slot at slotIndex with new formatted value
      vi. Updates main schedule state with setSchedule
      vii. Sets isChanged flag to true for save button activation

  3. Track state changes
    a. Monitor schedule updates through context
    b. Use isChanged flag to enable/disable save functionality
    
  4. Create `handleSaveSchedule` function to send updated schedule to firebase
    a. If userID is not available, exit function
    b. Set `loading` and `isSaving` to true
    c. Create reference to schedule document in firebase using userID
    d. Save current schedule state to firebase using setDoc
    e. Set isChanged to false to disable save button
    f. Show success toast notification
    g. Handle errors by logging and showing error toast
    h. Set `loading` and `isSaving` to false

### Schedule Slots Component

Schedule slots component will be used to display the doctor's schedule. 

  1. Create a Schedule Slots Component and mount it on the Weekly Calendar Component
  2. Transfer the schedule UI from the Weekly Calendar Component to the Schedule Slots Component

### Dashboard Page

Dashboard page will be used to display the doctor's schedule, statistics, reviews, performance and other relevant information.

  1. Create a Dashboard Page and mount it on the Script Component and provide a route for it
  2. Wrap it with DoctorStatsProvider, AppointmentsProvider and ScheduleProvider
  3. Create a StatsGrid Component to display the doctor's statistics and mount it on the Dashboard Page

    #### StatsGrid Component

    StatsGrid component will be used to display the doctor's statistics.

      1. Retrieve `stats` from `DoctorStatsProvider`
      2. Create an array of `stat` objects `statsArray` with the following structure: `label: string, value: number`
      3. Create a `showAll` state and initialize it to false
      4. Create a `visibleStats` state and initialize it to if `showAll` is true, `statsArray` otherwise `statsArray.slice(0, 3)`
      5. Loop through `visibleStats` and create a card for each `stat` with the `label` and `value` displayed
      6. Create a button to toggle the `showAll` state and display all or less statistics

  4. Create a PerformanceSummary Component to display the doctor's performance summary and mount it on the Dashboard Page

    #### PerformanceSummary Component

    PerformanceSummary component will be used to display the doctor's performance summary.

      1. Retrieve `performance` from `DoctorStatsProvider`
      2. Create a `performanceSummaryArray` with the following structure: `label: string, value: number`
      3. Create a `showAll` state and initialize it to false
      4. Create a `visibleSummary` state and initialize it to if `showAll` is true, `performanceSummaryArray` otherwise `performanceSummaryArray.slice(0, 3)`
      5. Loop through `visibleSummary` and create a card for each `summary` with the `label` and `value` displayed
      6. Create a button to toggle the `showAll` state and display all or less performance summary

  5. Create a ReviewsSection component to display the doctor's reviews and mount it on the Dashboard Page

    #### ReviewsSection Component

    ReviewsSection component will be used to display the doctor's reviews.

      1. Retrieve `reviews` and `ratings` from `DoctorStatsProvider`
      2. Create a SectionHeader component and mount it on the ReviewsSection Component and pass `average` as `rating.average` and `total` as `rating.total`
      3. Create a ReviewsList component and mount it on the ReviewsSection Component and pass `reviews` as `reviews`
         a. Loop through `reviews` and create a ReviewItem component for each review with `review` as `review` prop
         b. Create a ReviewItem component to display the review's `review` and `rating` and mount it on the ReviewsList Component
         c. Create a `visibleCount` state and initialize it to 3
         d. Create a `loadMoreReviews` function to load more reviews and update the `visibleCount` state by adding 3 to it
         e. Slice the `reviews` array by `visibleCount` and assign it to `visibleReviews` 
         f. Loop through `visibleReviews` and create a ReviewItem component for each review with `review` as `review` prop
         g. If `visibleCount` is less than the total number of reviews, display a "Load More" button and attach the `loadMoreReviews` function to it

  6. Create a ScheduleSnapshot component to display the doctor's schedule snapshot and mount it on the Dashboard Page

    #### ScheduleSnapshot Component

    ScheduleSnapshot component will be used to display the doctor's schedule snapshot.

      1. Create a title for the Section
      2. Create a button to go to the Schedule Page
      3. Retrieve `schedule` from `ScheduleProvider` 
      4. From the `schedule` object, retrieve the `todayWorkingHours` and `nextAvailableSlots` 
      5. Display `todayWorkingHours` 
      6. Create a SlotList component and mount it on the ScheduleSnapshot Component and pass `nextAvailableSlots` as `slots` prop

### Sign Up Hook

Sign Up Hook will be used to handle the sign up process.

  1. Retrieve `setName`, `setEmail`, `setPassword`, `setConfirmPassword`, `setIsAuthenticated` and `setUserType` from `LoginContext`
  2. Create a `signUp` function that takes in `name`, `email`, `password`, `confirmPassword` and `userType` as parameters
  3. If any of the parameters are empty, return an error message
  4. If the password and confirm password do not match, return an error message
  5. Check if the email has been used before, if so, return an error message
  6. Check if the email is valid, if not, return an error message
  7. Check if the password is strong enough, if not, return an error message
  8. Create a `userData` object with the `name`, `email`, `password`, `confirmPassword` and `userType` as properties
  9. Use `createUserWithEmailAndPassword` to create a new user with the `email` and `password`
  10. Use `signInWithEmailAndPassword` to sign in the user with the `email` and `password`
  11. Store the `isAuthenticated` and `currentUser` in the `localStorage` 
  12. Store the `userData` in the firebase database
  13. Call `setName`, `setEmail`, `setPassword`, `setConfirmPassword`, `setIsAuthenticated` and `setUserType` with the values from `userData` and `true`
  13. Navigate to the Home Page

### Sign In Hook

Sign In Hook will be used to handle the sign in process.

  1. Retrieve `setName`, `setEmail`, `setPassword`, `setUserType`, `setIsAuthenticated` and `setUserID` from `LoginContext`
  2. Create a `signIn` function that takes in `email` and `password` as parameters
  3. If any of the parameters are empty, return an error message
  4. Retrieve the `userData` from firebase database
  5. Check if the `email` and `password` match the `userData`, if not, return an error message
  6. If a match is found:
    a. Set the context values (setName, setEmail, setPassword, setUserType, setUserID, setIsAuthenticated) with the user's data
    b. Store the `isAuthenticated` and `currentUser` in the `localStorage`
    c. Use `signInWithEmailAndPassword` from `firebase` to sign in the user
    d. Navigate to the home page
    e. Return an object with success: true and userType
    
  7. If no match is found, return an object with success: false and an error message

### Sign Out Hook

Sign Out Hook will be used to handle the sign out process.

  1. Retrieve `setName`, `setEmail`, `setPassword`, `setUserType`, `setIsAuthenticated` and `setUserID` from `LoginContext`
  2. Create a `signOut` function that takes no parameters
  3. Set the context values (setName, setEmail, setPassword, setUserType, setUserID, setIsAuthenticated) to empty strings or false
  4. Remove the `isAuthenticated` and `currentUser` from the `localStorage`
  5. Navigate to the Login Page
  6. Close the sign out modal

### Sign Out Modal Component

Sign Out Modal Component will be used to display a modal when the user clicks on the sign out button. It will have two buttons, one for confirming the sign out and another for canceling it.

  1. Retrieve `closeSignOutModal` from `LoginContext`
  2. Retrieve `signOut` from Sign Out Hook
  3. Attach the `signOut` function to the confirm button and the `closeSignOutModal` function to the cancel button

### Private Route Component

Private Route Component will be used to protect the routes that require authentication.

  1. Retrieve `isAuthenticated` and `loading` from `LoginContext`
  2. If `loading` is true, return null
  3. If `isAuthenticated` is false, return a redirect to the Login Page

### Appointment Details Page

Appointment Details Page will be used to display the details of an appointment. This is a sister page to the Patient Details Page, whereby patients can view their appointments details.

  1. Create Appointment Details Page Component , mount it on Script component, wrap it with AppointmentContextProvider and PatientDetailsProvider, then provide it with the route
  2. Retrieve:
    i. `isAuthenticated` and `loading` from `LoginContext`
    ii. `profile` from `ProfileContext`
    iii. `activeTab` and `appointment` from `AppointmentContext`

  3. If `loading` is true, return null, if `isAuthenticated` is false and `profile` type is a doctor, return a Not Found Page
  4. If `appointment` is not found, return a message saying that there are no appointments
  5. Create AppointmentHeader component and mount it on AppointmentDetailsPage

    #### AppointmentHeader Component

    AppointmentHeader Component will be used to display the header of the appointment details page.

      a. Create DoctorImage component and mount it on AppointmentHeader
        i. Retrieve `doctorInfo` from `AppointmentContext`
        ii. Display the doctor's image 

      b. Create DoctorBasicInfo component and mount it on AppointmentHeader
      i. Retrieve `doctorInfo` from `AppointmentContext`
        ii. Display the doctor's basic information (name, speciality, fee, hospital and hospital location)

  6. Mount TabNavigation on AppointmentDetailsPage
    a. Retrieve `profile` from `ProfileContext`
    b. If `profile` type is a patient, remove the `medicalHistory` tab from the `tabs` array

  7. When `activeTab` is "prescription", reuse TabContent component as a container and pass the `tabID` prop as "prescription"
    a. Create PrescriptionTab component and mount it on TabContent and wrap it with `NotesTabProvider`

    #### PrescriptionTab Component

    PrescriptionTab Component will be used to display the prescription tab of the appointment details page.

      1. Reuse PrescriptionTabHeader component in doctor profile UI
      2. Retrieve the following:
        a. `prescriptions` from `PatientDetailsContext`
        b. `showViewPrescriptionModal` from `NotesTabsContext`

      3. If `prescriptions` is empty, display a message saying that the patient has no prescriptions
      4. If `prescriptions` is not empty, reuse PrescriptionList component
      5. If `showViewPrescriptionModal` is true, reuse ViewPrescriptionModal component

  8. When `activeTab` is "notes", reuse TabContent component as a container and pass the `tabID` prop as "notes"
    a. Create NotesTab component and mount it on TabContent and wrap it with `NotesTabProvider`

    #### NotesTab Component

    NotesTab Component will be used to display the notes tab of the appointment details page.

      1. Reuse NotesTabHeader component in doctor profile UI
      2. Retrieve the following:
        a. `notes` from `PatientDetailsContext`
        b. `showViewNoteModal` from `NotesTabsContext`

      3. If `notes` is empty, display a message saying that the patient has no notes
      4. If `notes` is not empty, reuse NotesList component
      a. If `showViewNoteModal` is true, reuse ViewNoteModal 

  9. When `activeTab` is "documents", reuse TabContent component as a container and pass the `tabID` prop as "documents"
    a. Reuse DocumentsTab component for the doctor profile UI, wrap it with `DocumentsTabProvider`

  10. When `activeTab` is "appointments", reuse TabContent component as a container and pass the `tabID` prop as "appointments"
    a. Reuse AppointmentsTab component for the doctor profile UI

### Live Chat Context

LiveChatContext is a context that provides messages and input state to the LiveChat component

  1. Create the following state variables:
    a. `messages` - an array of messages of type `Message`. Initialize it with an empty array
    b. `input` - a string representing the current input. Initialize it with an empty string
    c. `messageMenuModal` - a boolean indicating whether the message menu modal is visible. Initialize it with false
    d. `selectedMessage` - a `Message` object representing the currently selected message. Initialize it with null
    e. `hoveredMessage` - a `Message` object representing the currently hovered message. Initialize it with null

  2. Store `messages` in local storage when it changes
  3. Create `openMessageMenu` function which takes `message` as an argument and sets `messageMenuModal` to true and `selectedMessage` to the `message` parameter
  4. Create `closeMessageMenu` function which sets `messageMenuModal` to false and `selectedMessage` to null
  5. Create `handleMessageHover` function which takes `message` as an argument and sets `hoveredMessage` to the `message` parameter

### Live Chat Component

LiveChat Component is a component that displays a chat interface with a list of messages and an input field for sending messages.

  1. Create a LiveChat component mount it on relevant parent component and wrap it with `LiveChatProvider`. The parent will either pass `selectedNote` prop or not.
  2. Create a LiveChatHeader component and mount it on LiveChat if `selectedNote` is not passed
    a. Provide a relevant title to the header

  3. Create a LiveChatInput component and mount it on LiveChat component 

    #### LiveChatInput Component

    LiveChatInput Component will be a simple form that will have a textarea input field and a submit button.

      1. Retrieve the the following:
        a. `input` state variable from the `LiveChatContext`
        b. `sendMessage` function from the `Send Message` hook 
      2. Create a textarea ref element and bind it to the `input` state variable
      3. Adjust the textarea height dynamically based on the content
      4. Create a textarea element and make it a controlled component by binding it to the `input` state variable
        a. Add an `onKeyDown` event listener to the textarea to handle the enter key press
      5. Create a button element to send the message

  4. Create a LiveChatMessages component and mount it on LiveChat component

    #### LiveChatMessages Component

    LiveChatMessages Component will be a list of messages that will be displayed in the chat.

      1. Retrieve `messages`, `selectedMessage`, `messageMenuModal` and `closeMessageMenu` states variable from the `LiveChatContext`
      2. Add a scroll to the bottom of the chat when a new message is added
      3. If `messages` is empty, display a message saying "Start a conversation with a doctor"
      4. Loop through the `messages` array and create a LiveChatMessage component for each message and mount it on the LiveChatMessages component and pass `message` as a prop
      5. If `messageMenuModal` is true and `selectedMessage` ID is equal to the message ID, create a message menu component and mount it on the LiveChatMessages component and pass `message` as a prop
      6. On the parent div of the LiveChatMessage component, add an `onClick` event listener and call `closeMessageMenu` function if the `messageMenuModal` is true

      ##### LiveChatMessage Component
      
      LiveChatMessage Component will be a single message that will be displayed in the chat.

        1. Retrieve
          a. `profile` from the `ProfileContext`
          b. `openMessageMenu`, `handleHoverMessage` and `hoveredMessage` from the `LiveChatContext`

        2. Create roles based on the `profile` and `message.sender`
          a. `admin` if the `message.sender` profile is an admin
          b. `receiver` if the `message.sender` profile is doctor, set it as patient. If the `message.sender` profile is patient, set it as doctor
          c. `sender` if the `message.sender` profile is doctor, set it as doctor. If the `message.sender` profile is patient, set it as patient
        3. If the `message.sender` is `sender`, display the message on the right side of the chat and the background color will be green
        4. If the ` message.sender` is `receiver`, display the message on the left side of the chat and the background color will be gray
        5. If the `message.sender` is `admin`, display the message on center of the chat and the background color will be green
        6. Display ticks if `message.sender` is `sender` 
          a. Single gray tick if the message is sent
          b. Two gray ticks if the message is delivered
          c. Two blue ticks if the message is read
          d. A small clock icon if the message is not sent yet

        7. Display a chevron icon when the `hoveredMessage` is the current message
          a. Attach a `onClick` event to the chevron icon and call the `openMessageMenu` function with the current message as argument

      ##### Message Menu Modal

      The MessageMenuModal component will be used to display message options when the user clicks on the chevron icon.
        **We will document when we come to full livechat feature**

### Send Message Hook

Send Message Hook will be used to handle sending chat messages in the LiveChat feature.

  1. Retrieve  the following:
    a. `input`, `setInput`, `messages`, and `setMessages` from `LiveChatContext`
    b. `profile` from `ProfileContext`
    c. `closeModal` from `NoteTabsContext`

  2. Create a `sendMessage` function:
    a. Return early if `input` is empty or only whitespace.
    b. Construct a new `MessageType` object with
      i. `_id`: a unique identifier
      ii. `sender`: the type of user (`doctor`, `patient` or `admin`)
      iii. `senderId`: the user's ID
      iv. `senderName`: the user's name
      v. `text`: the message content
      vi `createdAt`: the current date and time
      vii. `updatedAt`: the current date and time
      viii. `status`: `sent`

    c. Update the `messages` state variable by appending the new `MessageType` object to it.
    d. Store the new message in the local storage.
    e. Clear the `input` state variable.

### React Toastify

React Toastify is a library for displaying toast notifications in React applications. It provides a simple and customizable way to show notifications to the user, such as success messages, error messages, and loading indicators.
 
  1. Import the library CSS in `index.tsx` file
  2. Add a toast container to the `Script` component
  3. Create `useToast` hook to manage the toast notifications 
  4. Add styles for the toast notifications in `styles.css`
  5. Integrate the `useToast` hook to various hooks to display toast notifications

### Firebase Integration

Firebase is a cloud-based platform that provides a variety of services for building and managing web and mobile applications. In this project, we will use Firebase to store and retrieve data from a Firestore database.

  1. Create a Firebase project and enable Firestore in the Firebase console.
  2. Install the Firebase SDK in the project using npm or yarn.
  3. Configure the Firebase SDK with the project's credentials.
  4. Create a Firestore database and define the schema for the data to be stored.