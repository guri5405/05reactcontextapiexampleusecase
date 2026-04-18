import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './component/ThemeBtn';
import Card from './component/Card';


function App() {
  const [themeMode, setThememode] = useState("light");
  const lightTheme = () =>{ setThememode("light")}
  const darkTheme = () => {setThememode("dark")}

  //  actual change in themeAC
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])
  return (
             <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
             
              <div className="flex flex-wrap min-h-screen items-center ">
                    <div className="w-full">
                        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                          {/* theme btns */}
                          <ThemeBtn />
                            
                        </div>

                        <div className="w-full max-w-sm mx-auto">
                          {/* cards */}
                          <Card />
                          
                        </div>
                    </div>
                </div>
                </ThemeProvider>

      )
}

export default App
