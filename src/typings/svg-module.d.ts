declare module "*.svg" {
    import { type ReactElement, type SVGProps } from "react"
    const ReactComponent: (props: SVGProps<SVGElement>) => ReactElement
    export { ReactComponent }
}
