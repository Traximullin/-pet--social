import { type FC } from "react"
import { SignLayout } from "shared/layout"
import { Form, Text } from "shared/ui"

const SignInPage: FC = () => {
    return (
        <SignLayout>
            <Form>
                <Text.Header position="center">Войти</Text.Header>
            </Form>
        </SignLayout>
    )
}

export default SignInPage
