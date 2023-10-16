import type { Store, Event } from "effector"

export interface CreateFieldsFactory {
    resetFields: Event<void>
    setFields: Event<void>
    $fields: Store<null>
}
