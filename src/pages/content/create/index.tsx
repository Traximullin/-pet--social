import { type FC } from "react"
import { BackButton, Camera } from "entities/content/ui"
import { ContentLayout } from "entities/content/layout"

const ContentCreate: FC = () => {

    return (
        <ContentLayout
            backButton={<BackButton />}
        >
            <Camera/>
        </ContentLayout>
    )
}

export default ContentCreate
