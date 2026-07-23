import { createContext, useState } from "react";

const ThemeContext=createContext()

function ThemeProvider({children}){
    const [theme ,setTheme]=useState("light")

    function toggletheme(){
        if(theme==="light")
        setTheme("dark")
    if(theme==="dark")
        setTheme("light")
    }
return (
    <ThemeContext.Provider value={{theme,toggletheme}}>
        {children}
    </ThemeContext.Provider>
)
}
export {ThemeContext,ThemeProvider}
