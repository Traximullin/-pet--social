import { type FC } from "react"
import { SignLayout } from "shared/layout"
import { Button, Form, Text } from "shared/ui"

const SignInPage: FC = () => {
    return (
        <SignLayout>
            <Form>
                <Text.Header position="center">Войти</Text.Header>
                <Button>
                    Привет
                </Button>
            </Form>
        </SignLayout>
    )
}

export default SignInPage
