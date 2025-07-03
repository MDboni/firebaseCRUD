import { useState } from "react"
import { createContext } from "react"
import { auth } from "../Fairebase/Fairebase.init"
import { createUserWithEmailAndPassword } from "firebase/auth"

export const AuthContext = createContext(null)

const ProviderContext = ({children}) => {
    const[user,setUser]=useState(null)
    const [loading,setLoading] = useState(true)

    const CreateUser = (email,password)=>{
      setLoading(false)
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const allData ={
        user,
        loading,
        CreateUser
    }
  return (
    <AuthContext.Provider value={allData}>
       {children}
    </AuthContext.Provider>
  )
}

export default ProviderContext