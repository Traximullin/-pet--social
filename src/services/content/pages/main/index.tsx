import { type FC } from "react"
import { useUnit } from "effector-react"
import { $content, ShowContent } from "../../entities/content"
import { CreateContent } from "./ui/create-content"

const ContentCreate: FC = () => {
    const content = useUnit($content)

    return content ? <ShowContent src={content} alt="Контент" /> : <CreateContent/>
}

export { ContentCreate }
