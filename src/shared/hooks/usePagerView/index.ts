import { useEffect, useRef, useState } from "react"
import { type IUsePageView } from "./interface"

const usePagerView = (): IUsePageView => {
    const pagerViewRef = useRef<null>(null)

    const [step, setStep] = useState(0)

    const handleSwitchPage = (pageNumber: number): void => {
        setStep(pageNumber)
    }

    useEffect(() => {
        // pagerViewRef?.current.setPage(step)
    }, [step])

    return {
        step,
        handleSwitchPage,
        pagerViewRef,
    }
}

export default usePagerView
