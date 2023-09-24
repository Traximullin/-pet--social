import { forwardRef, type FC } from "react"
import "./index.scss"
import Webcam from "react-webcam"
import { type CameraRef, type CameraProps } from "./types"

const Camera: FC<CameraProps> = forwardRef((props: CameraProps, ref: CameraRef) => {
    return (
        <div className="camera">
            <Webcam
                className="camera__video"
                screenshotFormat="image/jpeg"
                ref={ref}
            />
        </div>
    )
})

Camera.displayName = "Camera"

export default Camera
