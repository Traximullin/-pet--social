import { type FC } from "react"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages"

const Routing: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export default Routing
