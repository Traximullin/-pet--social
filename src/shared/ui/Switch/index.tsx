import { type FC } from "react"
import "./index.scss"
import { type ISwitch } from "./interface"
import useSwitch from "shared/hooks/useSwitch"

const data = [
    <div key="1">1</div>,
    <div key="2">2</div>,
    <div key="3">3</div>
]

const Switch: FC<ISwitch> = () => {
    const { currentPage, } = useSwitch()

    const step = 0

    return (
        <section className="switch">
            <div className="switch__header">
                <div>Card 1</div>
                <div>Card 2</div>
                <div>Card 3</div>
            </div>
            <div className="switch__content">
                {data[step]}
            </div>
        </section>
    )
}

export default Switch
