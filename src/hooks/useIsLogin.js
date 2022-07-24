import React from 'react'
import {AuthContext} from "../providers/AuthProviders";


const useIsLogin = () => {
  return React.useContext(AuthContext)
}

export default useIsLogin