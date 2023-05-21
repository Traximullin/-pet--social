import { type FC } from "react"
import "./index.scss"
import { useNavigate } from "react-router"
import { EPage } from "pages/pages"
import { Button, Form, Input, Text } from "shared/ui"

const SignInForm: FC = () => {
    const navigation = useNavigate()

    const handleSignInClick = (): void => {
        navigation(EPage.HOME)
    }

    return (
        <Form className="sign-in-form">
            <Text.Header position="center">
                Sign In
            </Text.Header>
            <div className="sign-in-form__data">
                <Input placeholder="login"/>
                <Input placeholder="password" type="password" />
            </div>
            <Button onClick={handleSignInClick}>Sign In</Button>
        </Form>
    )
}

export default SignInForm
