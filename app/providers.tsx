"use client";


import {PropsWithChildren} from "react"
import { ThemeProvider } from "../src/features/theme/ThemeProvider";
export type ProvidersProps = PropsWithChildren

export const Providers = (props: ProviderProps)
    return (
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
    >
        <Toaster />
        {props.children}
    </ThemeProvider>

    );

};