"use client";

import Loader from "@/components/loader/Loader";
import {
  createContext,
  useContext,
  useState
} from "react";

interface AuthContextType {
  loading: boolean;
  setLoading:(bool:boolean)=>void
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<{
    loading: boolean;
  }>({
    loading: false,
  });


  return (
    <AuthContext.Provider
      value={{
        loading: state.loading,
        setLoading:(bool:boolean)=>setState(prev=>({...prev,loading:bool})),
      }}
    >
      {children}
      <Loader isLoading={state.loading} />
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
