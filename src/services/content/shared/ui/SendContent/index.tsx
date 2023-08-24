import { type FC } from "react"
import "./index.scss"
import { Button } from "shared/ui"

const SendContent: FC = () => {

    const handleSendContentClick = (): void => {
        alert("send content!")
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
