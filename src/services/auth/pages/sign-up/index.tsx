import { type FC } from "react"
import { SignUpForm } from "services/auth/features/sign-up/sign-up-form"
import { SignLayout } from "services/auth/shared/layout/SignLayout"

const SignUpPage: FC = () => {
    return (
        <SignLayout>
            <SignUpForm />
        </SignLayout>
    )
}

export { SignUpPage }
