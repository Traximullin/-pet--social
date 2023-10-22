import { createApi, createStore } from "effector"
import type { CreateDialogWindow } from "./types"

export const createDialogWindow = (): CreateDialogWindow => {
    const $dialogState = createStore<boolean>(false)

    const dialogWindow = createApi($dialogState, {
        open: () => true,
        close: () => false,
    })

    return {
        $dialogState,
        dialogWindow,
    }
}
