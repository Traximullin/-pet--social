import { type FC } from "react"
import "./index.scss"
import { type IMedia } from "./types"

const Media: FC<IMedia> = (props) => {
    const { className, ...othersProps } = props

    const currentClasses = ["media"]

    if (className) currentClasses.push(className)

    return (
        <img
            className={currentClasses.join(" ")}
            src="https://phonoteka.org/uploads/posts/2022-09/1663809581_1-phonoteka-org-p-fon-les-v-tumane-pinterest-1.jpg"
            alt="media"
            {...othersProps}
        />
    )
}

export default Media
