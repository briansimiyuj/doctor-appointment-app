import appointmentImage from "./about_image.png"
import heroImage from "./Hero.jpg"
import aboutImage from "./about_image.png"
import contactImage from "./contact_image.png"
import logo from "./logo.svg"
import dropDownIcon from "./dropdown_icon.svg"
import menuIcon from "./menu_icon.svg"
import crossIcon from "./cross_icon.png"
import chatsIcon from "./chats_icon.svg"
import verifiedIcon from "./verified_icon.svg"
import arrowIcon from "./arrow_icon.svg"
import infoIcon from "./info_icon.svg"
import uploadIcon from "./upload_icon.png"
import profilePic from "./profile_pic.png"
import groupProfilePic from "./group_profiles.png"
import stripeLogo from "./stripe_logo.png"
import razorpayLogo from "./razorpay_logo.png"
import GoogleLogo from "./google.png"
import doc1 from "./doc1.jpg"
import doc2 from "./doc2.jpg"
import doc3 from "./doc3.jpg"
import doc4 from "./doc4.jpg"
import doc5 from "./doc5.jpg"
import doc6 from "./doc6.jpg"
import doc7 from "./doc7.jpg"
import doc8 from "./doc8.jpg"
import doc9 from "./doc9.jpg"
import doc10 from "./doc10.jpg"
import doc11 from "./doc11.jpg"
import doc12 from "./doc12.jpg"
import doc13 from "./doc13.jpg"
import doc14 from "./doc14.jpg"
import Dermatologist from "./Dermatologist.svg"
import Gastroenterologist from "./Gastroenterologist.svg"
import GeneralPhysician from "./General_physician.svg"
import Gynecologist from "./Gynecologist.svg"
import Neurologist from "./Neurologist.svg"
import Pediatrician from "./Pediatricians.svg"

export const assets ={
  
    appointmentImage,
    aboutImage,
    logo,
    menuIcon,
    crossIcon,
    chatsIcon,
    verifiedIcon,
    contactImage,
    dropDownIcon,
    arrowIcon,
    infoIcon,
    uploadIcon,
    profilePic,
    groupProfilePic,
    stripeLogo,
    razorpayLogo,
    heroImage,
    GoogleLogo,

}


export const specialityData =[

    {
        speciality:"Dermatologist",
        image: Dermatologist
    },

    {
        speciality:"Gastroenterologist",
        image: Gastroenterologist
    },

    {
        speciality:"General Physician",
        image: GeneralPhysician
    },

    {
        speciality:"Gynecologist",
        image: Gynecologist
    },

    {
        speciality:"Neurologist",
        image: Neurologist
    },

    {
        speciality:"Pediatrician",
        image: Pediatrician
    }

]


export const doctors =[

    {
        _id: 'doc1',
        name: 'Dr. Michael Johnson',
        image: doc1,
        speciality: 'Cardiologist',
        degree: 'MBBS, MD',
        experience: '5 Years',
        about: 'Dr. Michael is dedicated to ensuring heart health and providing advanced cardiac care through innovative treatment options.',
        fees: 70,
        address:{
            line1: '12th Street, Nairobi',
            line2: 'Upper Hill, Kenya'
        }
    },

    {
        _id: 'doc2',
        name: 'Dr. Sophia Mwangi',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD',
        experience: '6 Years',
        about: 'Dr. Sophia is passionate about women’s health, specializing in comprehensive care and prenatal services.',
        fees: 65,
        address:{
            line1: '5th Avenue, Nairobi',
            line2: 'Westlands, Kenya'
        }
    },

    {
        _id: 'doc3',
        name: 'Dr. Amina Hussein',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Amina focuses on skincare treatments, emphasizing early diagnosis of skin disorders and cosmetic dermatology.',
        fees: 40,
        address:{
            line1: 'Eastside Road',
            line2: 'Mombasa, Kenya'
        }
    },
    
    {
        _id: 'doc4',
        name: 'Dr. David Smith',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. David is passionate about child healthcare, ensuring kids grow healthy with personalized treatment plans.',
        fees: 50,
        address:{
            line1: '15th Main, Accra',
            line2: 'Osu, Ghana'
        }
    },
    
    {
        _id: 'doc5',
        name: 'Dr. Marcus Brown',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, DM',
        experience: '7 Years',
        about: 'Dr. Marcus provides specialized care for neurological disorders with a focus on innovative diagnostic tools.',
        fees: 90,
        address:{
            line1: 'Independence Avenue',
            line2: 'Kigali, Rwanda'
        }
    },
    
    {
        _id: 'doc6',
        name: 'Dr. Olivia Otieno',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS, DM',
        experience: '5 Years',
        about: 'Dr. Olivia combines advanced neurological techniques with compassionate care for her patients.',
        fees: 80,
        address:{
            line1: 'Kilimani Road',
            line2: 'Nairobi, Kenya'
        }
    },
    
    {
        _id: 'doc7',
        name: 'Dr. John Daniels',
        image: doc7,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. John focuses on delivering preventive and primary healthcare for all age groups.',
        fees: 40,
        address:{
            line1: 'Southend Crescent',
            line2: 'Cape Town, South Africa'
        }
    },

    {
        _id: 'doc8',
        name: 'Dr. Emily Wanjiru',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Emily provides holistic gynecological care and emphasizes reproductive health education.',
        fees: 60,
        address:{
            line1: '3rd Lane, Kisumu',
            line2: 'Central, Kenya'
        }
    },

    {
        _id: 'doc9',
        name: 'Dr. Fatima Abdi',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Fatima is an expert in treating skin conditions and promoting skincare for all skin types.',
        fees: 35,
        address:{
            line1: 'Makupa Road',
            line2: 'Mombasa, Kenya'
        }
    },
    
    {
        _id: 'doc10',
        name: 'Dr. Peter Wilson',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Peter provides exceptional medical care tailored to meet the unique needs of children.',
        fees: 45,
        address:{
            line1: 'Rose Avenue',
            line2: 'Durban, South Africa'
        }
    },

    {
        _id: 'doc11',
        name: 'Dr. Grace Nduta',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS, DM',
        experience: '4 Years',
        about: 'Dr. Grace specializes in diagnosing and treating neurological conditions with an empathetic approach.',
        fees: 75,
        address:{
            line1: 'Limuru Road',
            line2: 'Nairobi, Kenya'
        }
    },

    {
        _id: 'doc12',
        name: 'Dr. Robert Green',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS, DM',
        experience: '6 Years',
        about: 'Dr. Robert provides expertise in treating complex neurological disorders using the latest techniques.',
        fees: 85,
        address:{
            line1: 'Central Street',
            line2: 'Pretoria, South Africa'
        }
    },

    {
        _id: 'doc13',
        name: 'Dr. Stella Omondi',
        image: doc13,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Stella is committed to promoting community health through accessible and inclusive care.',
        fees: 55,
        address:{
            line1: '12th Avenue, Nakuru',
            line2: 'Kenya'
        }
    },

    {
        _id: 'doc14',
        name: 'Dr. Linda Achieng',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD',
        experience: '5 Years',
        about: 'Dr. Linda provides personalized care, focusing on promoting women’s reproductive health.',
        fees: 70,
        address:{
            line1: '5th Street, Nairobi',
            line2: 'Lavington, Kenya'
        }
    }

]