"use server"

import {signIn, signOut} from "@/auth/auth"


export const signInAction = async () =>{
    await signIn()
}