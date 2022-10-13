import React, {useEffect, useState} from "react";

const useIsMobile = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(width <= 768)
    const [isNotMobile, setIsNotMobile] = useState(width > 768)

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
        setIsMobile(width <= 768)
        setIsNotMobile(width > 768)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);


    return [
        isMobile,
        isNotMobile
    ]
}

export default useIsMobile