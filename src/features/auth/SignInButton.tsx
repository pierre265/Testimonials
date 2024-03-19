import {signIn} from "@/auth/auth";
import {Button} from "@/components/ui/button";
import {LogIn} from "lucide-react";



export const SignInButton = () =>{
    return (
        <form>
            <Button
            variant="secondary" size="sm"
            type="submit"
                formAction={async () =>{
                    "use server";
                    await signIn();
                }}
            >
                <LogIn size={16} className="mr-2" /> 
              Sign In  
            </Button>
        </form>
    );
};