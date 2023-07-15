import { type FC } from "react"
import "./index.scss"
import { type ISwitch } from "./interface"
import useSwitch from "shared/hooks/useSwitch"
import SwitchHeader from "./components/SwitchHeader"

const Switch: FC<ISwitch> = (props) => {
    const { content, } = props

    // TODO продумать как пробрасывать defaultValue
    const { currentPage, handleSwitchPage, } = useSwitch("list")

    return (
        <section className="switch">
            <SwitchHeader
                content={content}
                handleSwitchPage={handleSwitchPage}
            />
            <div className="switch__content">
                {content[currentPage]}
            </div>
        </section>
    )
}

export default Switch
