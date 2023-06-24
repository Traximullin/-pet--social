import { useRef, type FC, useEffect } from "react"
import "./index.scss"

const Test: FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        const constraints: MediaStreamConstraints = { video: true, }

        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises
                    videoRef.current.play()
                }
            })
            .catch((error) => {
                console.error("Error accessing camera:", error)
            })

        return () => {
            if (videoRef.current) {
                const stream = videoRef.current.srcObject as MediaStream
                const tracks = stream.getTracks()
                tracks.forEach((track) => {
                    track.stop()
                })
            }
        }
    }, [])

    return (
        <div className="test">
            <video
                ref={videoRef}
            />
        </div>
    )
}

export default Test
