import { type FC } from "react"
import { SignLayout } from "shared/layout"
import { SignInForm } from "entities/sign-in/form"

const SignInPage: FC = () => {
    return (
        <SignLayout>
            <SignInForm />
        </SignLayout>
    )
}

export default SignInPage
