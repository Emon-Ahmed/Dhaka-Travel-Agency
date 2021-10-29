import { useContext } from 'react'
import {AuthContext} from "../Context/AuthProvider"

export default function useAuth() {
    return  useContext(AuthContext);
}
