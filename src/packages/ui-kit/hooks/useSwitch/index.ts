import { useState } from "react"
import { type IUseSwitch } from "./interface"

const useSwitch = (defaultValue: string): IUseSwitch => {
    const [currentPage, setCurrentPage] = useState(defaultValue)

    const handleSwitchPage = (page: string): void => {
        setCurrentPage(page)
    }

    return {
        currentPage,
        handleSwitchPage,
    }
}

export default useSwitch
