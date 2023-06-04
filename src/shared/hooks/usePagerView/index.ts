import { useState } from "react"
import { type IUsePageView } from "./interface"

const usePagerView = (): IUsePageView => {
    const [step, setStep] = useState(0)

    const handleSwitchPage = (): void => {
        setStep(prev => prev + 1)
    }

    return {
        step,
        handleSwitchPage,
    }
}

export default usePagerView
