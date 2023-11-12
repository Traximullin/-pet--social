
type Icon = "i-notification" | "i-search"

// исправить
export type IconConfig = Record<Icon, any>

export interface IconProps {
    name: Icon
}
