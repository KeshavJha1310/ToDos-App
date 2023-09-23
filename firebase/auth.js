import { createContext , useContext , useState , useEffect } from "react";
import { onAuthStateChanged , signOut as authSignOut } from "firebase/auth";
import { auth } from "./firebase";


const AuthUserContex = createContext({
    authUser : null,
    isLoading: true
});

export default function useFirebaseAuth(){
    const [authUser , setAuthUser] = useState(null);
    const [isLoading , setIsLoading] = useState(true);

    const clear = () =>{
        setAuthUser(null)
        setIsLoading(false)
    }
    const authSateChanged = async (user) =>{
        setIsLoading(true)
        
        if(!user){
           clear()
           return;
        }
        setAuthUser({
            uid : user.uid,
            email : user.email,
            username : user.display
        })
        setIsLoading(false)
    };

    const signOut = () => {
        authSignOut(auth).then(()=>clear());
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,authSateChanged)
        return () => unsubscribe();
    },[])

    return{
        authUser,
        isLoading,
        setAuthUser,
        signOut
    }
}

export const AuthUserProvider = ({children}) =>{

const auth = useFirebaseAuth();

    return (
        <AuthUserContex.Provider value={auth}>
        {children}
        </AuthUserContex.Provider>
    );
};

export const useAuth = () => useContext(AuthUserContex)