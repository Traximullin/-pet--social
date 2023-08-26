import { EPage } from "packages/routing/routing"
import { type FC } from "react"
import { useNavigate } from "react-router"
import { Button } from "shared/ui"

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
