export interface LoginContextProps{

    email: string
    setEmail: (email: string) => void
    name: string
    setName: (name: string) => void
    password: string
    setPassword: (password: string) => void
    confirmPassword: string
    setConfirmPassword: (confirmPassword: string) => void
    isAuthenticated: boolean
    setIsAuthenticated: (isAuthenticated: boolean) => void
    userType: "patient" | "doctor"
    setUserType: (userType: "patient" | "doctor") => void

}