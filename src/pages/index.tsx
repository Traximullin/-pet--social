import { type FC } from "react"
import { Route, Routes } from "react-router-dom"
import { EPage, HomePage, SignInPage } from "./pages"

const Routing: FC = () => {
    return (
        <Routes>
            <Route path={EPage.HOME} element={<HomePage />} />
            <Route path={EPage.LOGIN} element={<SignInPage />} />
        </Routes>
    )
}

export default Routing
