import { useState } from "react"
import { type IUsePageView } from "./interface"

const usePagerView = (): IUsePageView => {
    // const pagerViewRef = useRef<null>(null)

    const [step, setStep] = useState(0)

    const handleSwitchPage = (): void => {
        setStep(prev => prev + 1)
    }

    return {
        step,
        handleSwitchPage,
        // pagerViewRef,
    }
}

export default usePagerView
