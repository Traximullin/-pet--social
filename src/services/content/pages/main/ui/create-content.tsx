import { useUnit } from "effector-react"
import { useRef, type FC, useCallback } from "react"
import { saveContent } from "services/content/features/save-content"
import { ContentLayout } from "services/content/shared/layout"
import { BackButton, Camera, SendContent } from "services/content/shared/ui"
import { type CameraRef } from "services/content/shared/ui/Camera/types"

const CreateContent: FC = () => {
    const cameraRef: CameraRef = useRef(null)
    const onSaveContent = useUnit(saveContent)

    const capture = useCallback(() => {
        if (cameraRef.current) {
            const imageSrc = cameraRef.current.getScreenshot()
            console.log(imageSrc)
            if (imageSrc) {
                onSaveContent(imageSrc)
            }
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

export { CreateContent }
