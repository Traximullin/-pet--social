import { type FC } from "react"
import "./index.scss"
import { type ISwitch } from "./interface"
import useSwitch from "shared/hooks/useSwitch"

const Switch: FC<ISwitch> = (props) => {
    const { content, } = props

    const { currentPage, handleSwitchPage, } = useSwitch()

    return (
        <section className="switch">
            <div className="switch__header">
                {/* !TODO Вынести в отдельный компонент */}
                {
                    Object
                        .keys(content)
                        .map((item, index) => (
                            <div
                                key={`heade-item-${index}`}
                                onClick={() => { handleSwitchPage(item) }}
                            >
                                {item}
                            </div>
                        ))
                }
            </div>
            <div className="switch__content">
            </div>
        </section>
    )
}

export default Switch
