import Routing from "pages"
import { type FC } from "react"
import "./index.scss"
import { withProviders } from "./providers/index"

const App: FC = () => {
    return (
        <Routing />
    )
}

export default withProviders(App)
