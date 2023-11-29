import { createEvent, sample } from "effector"
import { $comments } from "services/comment/entities/comments"

export const sendComment = createEvent()

sample({
    clock: sendComment,
    fn: () => ["Новый комментарий"],
    target: $comments,
})
