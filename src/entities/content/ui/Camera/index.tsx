import { type FC } from "react"
import "./index.scss"
import { useCamera } from "entities/content/hooks"

const Camera: FC = () => {
    const videoRef = useCamera()

    return (
        <div className="test">
            <video
                preload="none"
                ref={videoRef}
            />
        </div>
    )
}

export default Camera
