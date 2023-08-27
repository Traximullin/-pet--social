import { type FC } from "react"
import "./index.scss"
import { type IHorizontal } from "./types"

const Horizontal: FC<IHorizontal> = (props) => {
    const { children, } = props

    const handleScroll = (e: any): void => {
        const container = e.target
        const scrollAmount = e.deltaY

        container.scrollTo({
            top: 0,
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            left: container.scrollLeft + scrollAmount,
            behavior: "smooth",
        })
    }

    return (
        <div className="horizontal" onWheel={handleScroll}>
            {children}
        </div>
    )
}

export default Horizontal
