import { useEffect, useRef } from "react"
import { type TUseCamera } from "./interface"

const useCamera: TUseCamera = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        const constraints: MediaStreamConstraints = { video: true, }

        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream
                    videoRef.current.addEventListener("loadedmetadata", () => {
                        void videoRef.current?.play()
                    })
                }
            })
            .catch((error) => {
                console.error("Error accessing camera:", error)
            })

        return () => {
            if (videoRef.current) {
                const stream = videoRef.current.srcObject as MediaStream
                const tracks = stream?.getTracks()
                tracks?.forEach((track) => {
                    track.stop()
                })
            }
        }
    }, [])

    return videoRef
}

export default useCamera
