import { EPage } from "packages/routing/routing"
import { Button } from "packages/ui-kit/ui"
import { type FC } from "react"
import { useNavigate } from "react-router"

const BackButton: FC = () => {
    const navigate = useNavigate()

    const handleButtonClick = (): void => {
        navigate(EPage.PROFILE)
    }

    return (
        <Button onClick={handleButtonClick}>
            Назад
        </Button>
    )
}

export default BackButton
