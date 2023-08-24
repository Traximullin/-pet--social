import { type FC } from "react"
import "./index.scss"
import { useCamera } from "services/content/hooks"

const Camera: FC = () => {
    const videoRef = useCamera()

    return (
        <div className="camera">
            <video
                className="camera__video"
                preload="none"
                ref={videoRef}
            />
        </div>
    )
}

export default Camera
