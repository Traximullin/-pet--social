import { type MutableRefObject } from "react"

export interface IUsePageView {
    step: number
    handleSwitchPage: (arg: number) => void
    pagerViewRef: MutableRefObject<null | {
        setPage: (arg: number) => void
    }>
}
