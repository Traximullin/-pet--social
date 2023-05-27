import { type FC } from "react"
import { SignLayout } from "shared/layout"
import { SignUpForm } from "entities/sign-up/form"

const SignUpPage: FC = () => {
    return (
        <SignLayout>
            <SignUpForm />
        </SignLayout>
    )
}

export default SignUpPage
