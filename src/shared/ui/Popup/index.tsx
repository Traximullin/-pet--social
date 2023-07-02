import { type FC } from "react"
import "./index.scss"

const Popup: FC = () => {
    return (
        <div className="popup">
            <div className="popup__header">
                Header
            </div>
            <div className="popup__content">
                Popup
            </div>
        </div>
    )
}

export default Popup
