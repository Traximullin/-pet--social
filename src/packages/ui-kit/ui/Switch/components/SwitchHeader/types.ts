import { type TSwitchItem } from "../../types"

export interface ISwitchHeader {
    content: TSwitchItem
    handleSwitchPage: (arg: string) => void
}
