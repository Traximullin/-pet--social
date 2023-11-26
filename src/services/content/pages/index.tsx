import { useRef, type FC, useCallback } from "react"
import { ContentLayout } from "../shared/layout"
import { BackButton, Camera, SendContent } from "../shared/ui"
import { type CameraRef } from "../shared/ui/Camera/types"

const ContentCreate: FC = () => {
    const cameraRef: CameraRef = useRef(null)

    const capture = useCallback(() => {
        if (cameraRef.current) {
            const imageSrc = cameraRef.current.getScreenshot()
            console.log("imageSrc", imageSrc)
            return imageSrc
        }

        return null
    }, [cameraRef])

    return (
        <ContentLayout
            backButton={<BackButton />}
            control={<SendContent capture={capture}/>}
        >
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-expect-error */}
            <Camera ref={cameraRef as any} />
        </ContentLayout>
    )
}

export { ContentCreate }
