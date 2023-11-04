import { createEffect, createEvent, restore, sample } from "effector"
import { $form } from "./set-fields"

export const signIn = createEvent()

export const signInFx = createEffect(async () => {
    const mock = async (): Promise<object> => {
        return await new Promise(resolve => setTimeout(() => {
            resolve({ test: 3000, })
        }, 3000))
    }

    const response = await mock()

    return response
})

export const $signInError = restore(signInFx.failData, null)
export const $signInLoading = signInFx.pending
export const signInDone = signInFx.doneData

sample({
    clock: signIn,
    sourse: $form,
    target: signInFx,
})
