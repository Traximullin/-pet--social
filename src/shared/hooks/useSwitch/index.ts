import { useState } from "react"
import { type IUseSwitch } from "./interface"

const useSwitch = (): IUseSwitch => {
    const [currentPage, setCurrentPage] = useState("")

    return {
        currentPage,
    }
}

export default useSwitch
