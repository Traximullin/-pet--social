import { type FC } from "react"
import "./index.scss"
import { useUnit } from "effector-react"
import { useNavigate } from "react-router"
import { EPage } from "packages/routing/routing"
import { Button, Form, Input, Text } from "packages/ui-kit/ui"
import { $form, setFields } from "./model/set-fields"
import type { FieldsType } from "./types"

const SignInForm: FC = () => {
    const navigation = useNavigate()

    const [form, setForm] = useUnit([$form, setFields])

    const handleSignInClick = (): void => {
        alert(JSON.stringify(form))
        navigation(EPage.HOME)
    }

    const handleAdditionClick = (): void => {
        navigation(EPage.REGISTATION)
    }

    const handleFormChange = (value: string, key: FieldsType): void => {
        setForm({ key, value, })
    }

    return (
        <Form className="sign-in-form">
            <Text.Header position="center">
                Sign In
            </Text.Header>
            <div className="sign-in-form__data">
                <Input
                    value={form?.login || ""}
                    placeholder="login"
                    onChange={({ target, }) => { handleFormChange(target.value, "login") }}
                />
                <Input
                    value={form?.password || ""}
                    placeholder="password"
                    type="password"
                    onChange={({ target, }) => { handleFormChange(target.value, "password") }}
                />
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
