"use client";

import {PropsWithChildren}  from "react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
// import { signOut } from "@/auth/auth";
import {singOutAction} from "./auth.action";
import {LogOut} from "lucide-react";


export type LoggedInDropdownProps = PropsWithChildren

export const LoggedInDropdown = (props: LoggedInDropdownProps) => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {props.children}
            </DropdownMenuTrigger>
            <DropdownMenuContent >
                    <DropdownMenuItem onClick={()=>{
                             singOutAction();
                        }}> 
                            <LogOut size={16} className="mr-2" /> 
                            Logout
                    </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};