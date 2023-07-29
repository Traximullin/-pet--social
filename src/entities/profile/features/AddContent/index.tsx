import { EPage } from "pages/pages"
import { type FC } from "react"
import { useNavigate } from "react-router"
import { Button } from "shared/ui"

const AddContent: FC = () => {
    const navigation = useNavigate()

    const handleAddContentClick = (): void => {
        navigation(EPage.CREATE_CONTENT)
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
