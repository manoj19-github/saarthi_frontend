
import { ThemeProvider } from "@/providers/ThemeProvider";
import { FC, ReactNode } from "react"
import "./globals.css"
interface RootLayoutProps{
  children:ReactNode;
}

const RootLayout:FC<RootLayoutProps> = ({children}):JSX.Element=>{
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

export default RootLayout