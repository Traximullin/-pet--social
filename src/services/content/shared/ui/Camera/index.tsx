import { type FC } from "react"
import "./index.scss"
import Webcam from "react-webcam"

const Camera: FC = () => {
    return (
        <div className="camera">
            <Webcam className="camera__video"/>
        </div>
    )
}

export default Camera
