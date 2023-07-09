import { useState } from "react"
import { type IUseSwitch } from "./interface"

const useSwitch = (): IUseSwitch => {
    const [currentPage, setCurrentPage] = useState("default")

    const handleSwitchPage = (page: string): void => {
        setCurrentPage(page)
    }

    return {
        currentPage,
        handleSwitchPage,
    }
}

export default useSwitch
