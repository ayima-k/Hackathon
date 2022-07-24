import React from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/firebase";


export const AuthContext = React.createContext({})

export const AuthProviders = ({children}) => {
  const [isAuth, setIsAuth] = React.useState(null)
  
  React.useEffect(() => {
    const Listen = onAuthStateChanged(auth, user => {
      if (user){
        
        setIsAuth(user)
      }else{
        setIsAuth(null)
      }
    })
    return () => Listen()
  }, [isAuth])
  
  const value = React.useMemo(() => {
    return {
      isAuth,
    }
  }, [isAuth])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}