import { type FC } from "react"
import { Route, Routes } from "react-router-dom"
import { EPage, HomePage, ProfilePage, SignInPage, SignUpPage } from "./pages"

const Routing: FC = () => {
    return (
        <Routes>
            <Route path={EPage.HOME} element={<HomePage />} />
            <Route path={EPage.LOGIN} element={<SignInPage />} />
            <Route path={EPage.REGISTATION} element={<SignUpPage />} />
            <Route path={EPage.PROFILE} element={<ProfilePage />} />
        </Routes>
    )
}

export default Routing
