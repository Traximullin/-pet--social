import { type ImgHTMLAttributes } from "react"

type Icon = "i-notification" | "i-search"

// исправить
export type IconConfig = Record<Icon, any>

export interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
    name: Icon
}
