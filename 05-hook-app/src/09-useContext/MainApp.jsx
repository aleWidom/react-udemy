import { Routes, Route, Navigate } from "react-router-dom"
import { HomePage, AboutPage, LoginPage, NavBar } from "./"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return (
    <UserProvider>
    <h1>MainApp</h1>
    <NavBar/>
    <hr/>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>

       {/*  cualquier cosa que escriba me va a llevar a la ruta que ponga en el to por ej */}
        <Route path='/*' element={<Navigate to={'/about'}/>}/>
    </Routes>
    </UserProvider>
  )
}
