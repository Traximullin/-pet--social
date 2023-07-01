import { type FC } from "react"
import "./index.scss"
import { type ISwitch } from "./interface"

const Switch: FC<ISwitch> = () => {
    return (
        <section className="switch">
            <div className="switch__header">
                <div>Card 1</div>
                <div>Card 2</div>
                <div>Card 3</div>
            </div>
            {/* content */}
        </section>
    )
}

export default Switch
