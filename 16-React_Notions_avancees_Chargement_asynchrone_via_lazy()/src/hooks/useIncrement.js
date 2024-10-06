import {useCallback, useState} from "react";

export function useIncrement ({base = 0, max = Infinity, min = -Infinity}) {
    const [state, setState] = useState(base)
    return {
        count: state,
        increment: useCallback(() => setState(v => v < max ? v+1 : v), [max]),
        decrement: useCallback(() => setState(v => v > min ? v-1 : v), [min])
    }
}
