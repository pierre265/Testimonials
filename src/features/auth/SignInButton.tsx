"use client"

import {signInAction} from "./auth.action";
import {Button} from "@/components/ui/button";
import {LogIn} from "lucide-react";



export const SignInButton = () =>{
    return (
        <form>
            <Button
            variant="secondary" size="sm"
            type="submit"
                onClick={async () =>{
                    "use server";
                    await signInAction();
                }}
            >
                <LogIn size={16} className="mr-2" /> 
              Sign In  
            </Button>
        </form>
    );
};