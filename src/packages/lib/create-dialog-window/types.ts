import type { Store, Event } from "effector"

export interface CreateDialogWindow {
    $dialogState: Store<boolean>
    dialogWindow: {
        open: Event<void>
        close: Event<void>
    }
}
