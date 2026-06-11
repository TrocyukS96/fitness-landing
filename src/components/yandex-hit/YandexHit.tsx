'use client';

import { usePathname } from "next/navigation"
import { useEffect } from "react";

declare global {
    interface Window {
        ym: (id: number, method: string, ...args: string[]) => void;
    }
}


export function YandexHit() {
    const pathname = usePathname()

    useEffect(() => {
        if (typeof window === 'undefined') return
        if (!window.ym) return

        const url = window.location.pathname + window.location.search
        window.ym(105538684, "hit", url as string)
    }, [pathname])

    return null
}