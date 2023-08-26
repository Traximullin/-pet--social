import { type FC } from "react"
import { SignInForm } from "services/auth/entities/SignInForm"
import { SignLayout } from "services/auth/shared/layout/SignLayout"

const SignInPage: FC = () => {
    return (
        <SignLayout>
            <SignInForm />
        </SignLayout>
    )
}

export { SignInPage }
