export const createHeroContent = (navigate: Function) =>({

    doctor:{

        heading: "Welcome Back Doctor",
        subtext: "Manage your appointments and patient care efficiently with MediCare Hub. View your schedule, access patient records, and provide quality healthcare services all in one place.",
        buttonText: "View Schedule",
        path: "/doctor/schedule",
        buttonAction: () => navigate("/schedule")

    },

    patient:{

        heading: "Welcome Back Patient",
        subtext: "MediCare Hub is a user-friendly platform that streamlines online appointment booking, connecting patients with doctors and specialists effortlessly. With a few simple steps, you can browse available slots, choose a provider, and confirm your appointment, making healthcare more accessible and convenient than ever.",
        buttonText: "Book Appointment",
        path: "#speciality",
        buttonAction: () => navigate("#speciality")

    }

})