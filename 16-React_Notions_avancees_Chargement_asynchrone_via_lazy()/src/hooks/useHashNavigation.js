import {useEffect, useState} from "react";

export function useHashNavigation () {
    const [hash, setHash] = useState(location.hash)

    useEffect(() => {
        const handleHashChange = () => {
            setHash(location.hash)
        }
        window.addEventListener('hashchange', handleHashChange)
        return () => {
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, []);

    const cleanedHash = hash.replaceAll('#', '').toLowerCase()

    return {
        page: cleanedHash ? cleanedHash.split(':')[0] : 'home',
        param: cleanedHash.split(':')[1]
    }
}
