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
import avatar from "./avatar.png"
import profilePic from "./profile_pic.png"
import coverImage from "./coverImage.jpg"
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
import patient1 from "./patient1.jpg"
import patient2 from "./patient2.jpg"
import patient3 from "./patient3.jpg"
import patient4 from "./patient4.jpg"
import patient5 from "./patient5.jpg"
import analytics from "./analytics.jpg"
import medicalReport from "../dummyData/dummyDocuments/Medical Report.pdf"
import medicalCertificate from "../dummyData/dummyDocuments/sample medical certificate.pdf"
import sampleRadiologyReport from "../dummyData/dummyDocuments/sample radiology.pdf"
import samplePrescription from "../dummyData/dummyDocuments/sample prescription.pdf"
import sampleDischargeSummary from "../dummyData/dummyDocuments/sample discharge summary.pdf"
import sampleXray from "../dummyData/dummyDocuments/sample xray.jpg"
import sampleUltrasound from "../dummyData/dummyDocuments/sample ultrasound image.webp"
import sampleCTScan from "../dummyData/dummyDocuments/sample CT Scan.jpeg"
import { DocumentType } from "../types/DocumentType"

export const assets ={
  
    appointmentImage,
    analytics,
    aboutImage,
    logo,
    menuIcon,
    crossIcon,
    chatsIcon,
    coverImage,
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
    avatar

}


export const doctorImages ={
    
    doc1,
    doc2,
    doc3,
    doc4,
    doc5,
    doc6,
    doc7,
    doc8,
    doc9,
    doc10,
    doc11,
    doc12,
    doc13,
    doc14,

}



export const patientImages ={
    
    patient1,
    patient2,
    patient3,
    patient4,
    patient5,

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

export const dummyDocuments: DocumentType[] =[

    {
        _id: "1",
        name: "Sample Radiology Report",
        type: "application/pdf",
        uploadDate: new Date("2023-01-01"),
        uploadedBy: "Dr. Smith",
        size: 1024,
        content: sampleRadiologyReport
    },

    {
        _id: "2",
        name: "Sample Prescription",
        type: "application/pdf",
        uploadDate: new Date("2023-01-02"),
        uploadedBy: "Dr. Johnson",
        size: 2048,
        content: samplePrescription
    },

    {
        _id: "3",
        name: "Sample Discharge Summary",
        type: "application/pdf",
        uploadDate: new Date("2023-01-03"),
        uploadedBy: "Dr. Lee",
        size: 4096,
        content: sampleDischargeSummary
    },

    {
        _id: "4",
        name: "Sample X-ray",
        type: "image/jpeg",
        uploadDate: new Date("2023-01-04"),
        uploadedBy: "Dr. Brown",
        size: 8192,
        content: sampleXray
    },
    
    {
        _id: "5",
        name: "Sample Ultrasound",
        type: "image/webp",
        uploadDate: new Date("2023-01-05"),
        uploadedBy: "Dr. Green",
        size: 16384,
        content: sampleUltrasound
    },
    
    {
        _id: "6",
        name: "Sample CT Scan",
        type: "image/jpeg",
        uploadDate: new Date("2023-01-06"),
        uploadedBy: "Dr. White",
        size: 32768,
        content: sampleCTScan
    },
    
    {
        _id: "7",
        name: "Medical Report",
        type: "application/pdf",
        uploadDate: new Date("2023-01-07"),
        uploadedBy: "Dr. Black",
        size: 65536,
        content: medicalReport
    },
    
    {
        _id: "8",
        name: "Medical Certificate",
        type: "application/pdf",
        uploadDate: new Date("2023-01-08"),
        uploadedBy: "Dr. Grey",
        size: 131072,
        content: medicalCertificate
    }
    
]