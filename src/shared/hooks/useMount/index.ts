import { useEffect } from "react"
import { type TUseMount } from "./interface"

const useMount: TUseMount = (callback) => {
    useEffect(callback, [])
}

export default useMount
