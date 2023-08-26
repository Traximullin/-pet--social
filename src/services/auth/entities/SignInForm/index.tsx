import { type FC } from "react"
import "./index.scss"
import { useNavigate } from "react-router"
import { Button, Form, Input, Text } from "shared/ui"
import { EPage } from "packages/routing/routing"

const SignInForm: FC = () => {
    const navigation = useNavigate()

    const handleSignInClick = (): void => {
        navigation(EPage.HOME)
    }

    const handleAdditionClick = (): void => {
        navigation(EPage.REGISTATION)
    }

    return (
        <Form className="sign-in-form">
            <Text.Header position="center">
                Sign In
            </Text.Header>
            <div className="sign-in-form__data">
                <Input placeholder="login"/>
                <Input placeholder="password" type="password" />
                <p
                    className="sign-up-form__addition"
                    onClick={handleAdditionClick}
                >
                    i dont have an account
                </p>
            </div>
            <Button onClick={handleSignInClick}>Sign In</Button>
        </Form>
    )
}

export { SignInForm }
