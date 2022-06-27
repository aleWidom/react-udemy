
import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  //en el caso de haber más context con el nombre UserContext va a ir para el que yendo para arriba en las etiquetas este más cercano
const {user} = useContext(UserContext)

    return (
        <>
        <h1>LoginPage</h1>
        <hr/>
        <pre>{JSON.stringify(user)}</pre>
        </>
      )
}
