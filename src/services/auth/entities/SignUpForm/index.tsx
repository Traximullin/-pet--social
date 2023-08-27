import { type FC } from "react"
import "./index.scss"
import { useNavigate } from "react-router-dom"
import { EPage } from "packages/routing/routing"
import { Button, Form, Input, Text } from "packages/ui-kit/ui"

const SignUpForm: FC = () => {
    const navigation = useNavigate()

    const handleSignInClick = (): void => {
        navigation(EPage.LOGIN)
    }

    const handleAdditionClick = (): void => {
        navigation(EPage.LOGIN)
    }

    return (
        <Form className="sign-up-form">
            <Text.Header position="center">
                Sign Up
            </Text.Header>
            <div className="sign-up-form__data">
                <Input placeholder="login"/>
                <Input placeholder="password" type="password" />
                <p
                    className="sign-up-form__addition"
                    onClick={handleAdditionClick}
                >
                    i already have an account
                </p>
            </div>
            <Button onClick={handleSignInClick}>Sign Up</Button>
        </Form>
    )
}

export { SignUpForm }
