import { type FC } from "react"
import "./index.scss"
import { type IPopup } from "./types"

const Popup: FC<IPopup> = (props) => {
    const { children, } = props

    return (
        <div className="popup">
            <div className="popup__header">
                Header
            </div>
            <div className="popup__content">
                {children}
            </div>
        </div>
    )
}

export default Popup
