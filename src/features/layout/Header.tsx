import { LoggedInButton } from "../auth/LoggedInButton";
import Image from "next/image";
import {Layout} from "@/components/layout";
import {ModeToggle} from "../theme/ModeToggle";

export const Header = async () =>{
    return(

        <header className="w-full border-b border-border py-1">
        <Layout className="flex items-center gap-4 ">
            <div className="flex-1">
            <Image 
                src="" width={32} 
                height = {32}
                alt="Icone page"/>
            <LoggedInButton />
            </div>
        <div className="flex items-center gap-2">
        <ModeToggle/>
        <LoggedInButton />
        </div>
    </Layout>
    </header>
    );
};