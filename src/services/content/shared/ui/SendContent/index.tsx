import { type FC } from "react"
import "./index.scss"
import { Button } from "packages/ui-kit/ui"
import { type SendContentProps } from "./type"

const SendContent: FC<SendContentProps> = (props) => {
    const { capture, } = props

    const handleSendContentClick = (): void => {
        const imageSrc = capture()

        console.log("image:", imageSrc)
    }

    return (
        <Button
            className="send-content"
            onClick={handleSendContentClick}
        >
            Send
        </Button>
    )
}

export default SendContent
