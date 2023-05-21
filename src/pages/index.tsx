import { type FC } from "react"
import { Route, Routes } from "react-router-dom"

const Routing: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<div>1</div>} />
        </Routes>
    )
}

export default Routing
