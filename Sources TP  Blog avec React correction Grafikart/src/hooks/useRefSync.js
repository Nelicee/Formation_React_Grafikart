import {useRef} from "react";

export function useRefSync (data) {
    const dataRef = useRef(data)
    dataRef.current = data
    return dataRef
}
