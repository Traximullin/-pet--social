import { type FC } from "react"
import { Button } from "shared/ui"

const AddContent: FC = () => {

    const handleAddContentClick = (): void => {
        alert("Add content!")
    }

    return (
        <Button
            onClick={handleAddContentClick}
            size="small"
        >
            Add content
        </Button>
    )
}

export default AddContent
