import { GET_TAPE_MOCK } from "./mock-data"

export const getTape = async (): Promise<object> => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(GET_TAPE_MOCK)
        }, 3000)
    })
}
