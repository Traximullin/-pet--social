import { createEvent, sample } from "effector"
import { $content } from "services/content/entities/content"

export const saveContent = createEvent<string>()

sample({
    clock: saveContent,
    target: $content,
})
