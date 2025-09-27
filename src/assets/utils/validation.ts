export const isEmailValid = (email: string): boolean =>{

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return emailRegex.test(email)

}

export const isPasswordStrong = (password: string): boolean =>{

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    return passwordRegex.test(password)
   
}