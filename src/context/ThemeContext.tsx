import { createContext, useContext, useEffect } from "react"

interface ThemeContextProps{

    toggleTheme: () => void

}

const ThemeContext = createContext<ThemeContextProps | null>(null)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) =>{
    
    const toggleTheme = () =>{
        
        const isDarkMode = document.documentElement.classList.toggle("dark")

        localStorage.setItem("theme", isDarkMode ? "dark" : "light")

    }


    useEffect(() =>{
    
       const savedTheme = localStorage.getItem("theme")

       if(savedTheme === "dark"){
           
        document.documentElement.classList.add("dark")

       }
    
    }, [])


    return(

        <ThemeContext.Provider value={{ toggleTheme }}>

            {children}

        </ThemeContext.Provider>

    )
    
}


export const useTheme = () =>{
    
    const context = useContext(ThemeContext)

    if(!context) throw new Error('useTheme must be used within a ThemeProvider')

    return context

}