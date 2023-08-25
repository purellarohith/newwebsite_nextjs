'use client'

import { useEffect } from "react";
import { usePathname } from 'next/navigation'

function ScrollToTop() {
    const pathName = usePathname();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName]);
    return null;
}

export default ScrollToTop;