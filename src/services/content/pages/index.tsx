import { useRef, type FC, useCallback } from "react"
import { ContentLayout } from "../shared/layout"
import { BackButton, Camera, SendContent } from "../shared/ui"
import { type CameraRef } from "../shared/ui/Camera/types"
import { useUnit } from "effector-react"
import { saveContent } from "../features/save-content/model/save-content"
import { $content, ShowContent } from "../entities/content"

const ContentCreate: FC = () => {
    const cameraRef: CameraRef = useRef(null)
    const onSaveContent = useUnit(saveContent)
    const content = useUnit($content)

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
            {content ? <ShowContent src={content} alt="Контент" /> : <Camera ref={cameraRef as any} />}
        </ContentLayout>
    )
}

export { ContentCreate }
