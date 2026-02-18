export interface BankDetails{

    bankName: string
    accountName: string
    accountNumber: string
    branchCode?: string
    swiftCode?: string

}

export interface MPESADetails{

    paybill: string
    accountNumber: string
    businessName: string
    tillNumber?: string
    instructions: string

}

export interface InsuranceDetails{

    provider: string
    claimPhone: string
    email: string
    instructions: string

}

export interface SHADetails{

    provider: string
    claimPortal: string
    membershipRequired: boolean
    instructions: string

}

export const financialAssets ={

    bankTransfer:{

        primary:{

            bankName: "ABSA Bank",
            accountName: "Medicare Hub Ltd",
            accountNumber: "1234567890",
            branchCode: "01",
            swiftCode: "ABSABEKX"

        },
 
        secondary:{

            bankName: "Standard Chartered Bank",
            accountName: "Medicare Hub Ltd",
            accountNumber: "0987654321",
            branchCode: "12",
            swiftCode: "SCBL"
            
        }

    } as Record<string, BankDetails>,

    mpesa:{

        paybill: "523456",
        accountNumber: "{{invoiceID}}",
        businessName: "MEDICARE HUB",
        tillNumber: "123456",
        instructions: "Enter MPESA PIN on your phone to complete payment"

    } as MPESADetails,

    insurance:{

        provider: "Various Insurance Partners",
        claimPhone: "0712345678",
        email: "claims@medicarehub.com",
        instructions: "Please present your insurance card at the reception or upload claim form"

    } as InsuranceDetails,

    sha:{

        provider: "Social Health Authority",
        claimPortal: "https://sha.health.go.ke/claims",
        membershipRequired: true,
        instructions: "Your SHA membership will be verified automatically"

    } as SHADetails,

    cash:{

        instructions: "Please pay at the Medicare Hub reception desk. A receipt will be provided."

    },

    creditCard:{

        processor: "VISA",
        supportedCards: ["STRIPE", "Mastercard", "American Express"],
        instructions: "Your card will be charged securely via Medicare Hub"

    },

    visa:{

        processor: "VISA Secure",
        supportedCards: ["Visa Credit", "Visa Debit", "Visa Electron"],
        instructions: "Your Visa card will be charged securely via Medicare Hub",
        currency: "KES, USD, EUR"

    },

    mastercard:{
        
        processor: "Mastercard Payment Gateway",
        supportedCards: ["Mastercard Credit", "Mastercard Debit", "Mastercard Gold"],
        instructions: "Your Mastercard will be processed securely",
        currency: "KES, USD, EUR"

    }

}


export const getMPESAAccount = (invoiceID: string) =>{

    return financialAssets.mpesa.accountNumber.replace("{{invoiceID}}", invoiceID.slice(0, 6))

}