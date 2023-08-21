import { type FC } from "react"
import "./index.scss"
import { type ISwitchHeader } from "./types"

const SwitchHeader: FC<ISwitchHeader> = (props) => {
    const { content, handleSwitchPage, } = props

    return (
        <div className="switch-header">
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
    )
}

export default SwitchHeader
