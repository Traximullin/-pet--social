import { sample } from "effector"
import { resetForm } from "services/auth/features/sign-in"

const closedPage = false

sample({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    clock: closedPage,
    target: resetForm,
})
