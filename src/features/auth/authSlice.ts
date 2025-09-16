import { createSlice} from "@reduxjs/toolkit"
import { Users } from "lucide-react"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token:null,
        user: null,
    },
    reducers:{
        setCredentials:(state, action) =>{
            const {user,access}=action.payload
            state.user = user
            state.token = access
        },
        logOut:(state, action)=>{
            state.user = null
            state.token = null

        },
    }
})
export const {setCredentials, logOut} = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state:any) => state.auth.user
export const selectCurrentToken = (state:any) => state.auth.token