
export const getTape = async (): Promise<object> => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve({ test: 3000, })
        }, 3000)
    })
}
