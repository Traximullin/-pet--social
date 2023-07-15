import { type TSwitchItem } from "../../interface"

export interface ISwitchHeader {
    content: TSwitchItem
    handleSwitchPage: (arg: string) => void
}
