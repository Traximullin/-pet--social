import { useState } from "react"
import { type TUseInputMask } from "./interface"

const useInputMask: TUseInputMask = (initialValue, mask) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (event: any): void => {
        const inputValue = event.target.value
        const cleanedValue = inputValue.replace(/[^0-9]/g, "")
        let maskedValue = ""

        let valueIndex = 0
        for (let i = 0; i < mask.length; i++) {
            const maskChar = mask[i]
            if (maskChar === "_") {
                if (cleanedValue[valueIndex]) {

                    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                    maskedValue += cleanedValue[valueIndex]
                    console.log("maskedValue", maskedValue)
                    valueIndex++
                } else {
                    maskedValue += "_"
                }
            } else {
                maskedValue += maskChar
            }
        }

        setValue(maskedValue)
    }

    return {
        value, onChange: handleChange,
    }
}

export default useInputMask
