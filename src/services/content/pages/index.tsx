import { type FC } from "react"
import { ContentLayout } from "../shared/layout"
import { BackButton, Camera, SendContent } from "../shared/ui"

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
