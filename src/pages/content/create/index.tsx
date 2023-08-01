import { type FC } from "react"
import { BackButton, Camera, SendContent } from "entities/content/ui"
import { ContentLayout } from "entities/content/layout"

const ContentCreate: FC = () => {

    return (
        <ContentLayout
            backButton={<BackButton />}
            control={<SendContent />}
        >
            <Camera/>
        </ContentLayout>
    )
}

export default ContentCreate
