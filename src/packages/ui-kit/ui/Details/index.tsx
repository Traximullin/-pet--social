import { type FC } from "react"
import "./index.scss"
import { ReactComponent as DetailsSvg } from "assets/svg/details.svg"

const Details: FC = () => {

    const handleClick = (): void => {
        alert("Details")
    }

    return (
        <div className="details" onClick={handleClick}>
            <DetailsSvg />
        </div>
    )
}

export default Details
