import { createContext, useState } from "react";
import firebaseApp from "./firebase/config";
export const firebaseContext = createContext(null);

export const AuthContext = createContext(null);


export default function AuthProvider({children}){
    const [user,setUser] = useState(null)
    return(
        <AuthContext.Provider value={{user ,setUser}}>
{children}

        </AuthContext.Provider>
    )
}

export function FirebaseProvider({ children }) {

    return (
      <firebaseContext.Provider value={{ firebaseApp }}>
        {children}
      </firebaseContext.Provider>
    );
  }