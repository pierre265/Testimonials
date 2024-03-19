"use client"

import { ThemeProvider as NextThemesProvider} from
import { type ThemeProviderprops} from "next-themes";


export function ThemeProvider({children,...rest}:ThemeProviderprops) {
    return <NextThemesProvider {...props}>{children}
}