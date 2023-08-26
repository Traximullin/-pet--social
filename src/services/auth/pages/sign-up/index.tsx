import { type FC } from "react"
import { SignUpForm } from "services/auth/entities/SignUpForm"
import { SignLayout } from "services/auth/shared/layout/SignLayout"

const SignUpPage: FC = () => {
    return (
        <SignLayout>
            <SignUpForm />
        </SignLayout>
    )
}

export { SignUpPage }
