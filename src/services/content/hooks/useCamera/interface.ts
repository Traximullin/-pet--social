import { type MutableRefObject } from "react"

export type TUseCamera = () => MutableRefObject<HTMLVideoElement | null>
