import { type FC } from "react"
import "./index.scss"
import { withProviders } from "./providers/index"
import Routing from "packages/routing"

const App: FC = () => {
    return (
        <Routing />
    )
}

export default withProviders(App)
