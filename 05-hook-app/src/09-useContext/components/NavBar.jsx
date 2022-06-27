import { Link } from "react-router-dom"

export const NavBar = () => {

    //vimos también el navLink para saber por ej cuando esta activo en la página para ponerle css

    return (
        <>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/login'}>Login</Link>
        </>
    )

}
