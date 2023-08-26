import { type FC } from "react"
import { Route, Routes } from "react-router-dom"
import { EPage } from "./pages"
import { ProfilePage } from "services/profile/pages/main"
import HomePage from "services/home/pages/main"
import ContentCreate from "services/content/pages"
import { TreePage } from "services/tree/pages/main"
import { SignInPage } from "services/auth/pages/sign-in"
import { SignUpPage } from "services/auth/pages/sign-up"

const Routing: FC = () => {
    return (
        <Routes>
            <Route path={EPage.HOME} element={<HomePage />} />
            <Route path={EPage.LOGIN} element={<SignInPage />} />
            <Route path={EPage.REGISTATION} element={<SignUpPage />} />
            <Route path={EPage.PROFILE} element={<ProfilePage />} />
            <Route path={EPage.TREE} element={<TreePage />} />
            <Route path={EPage.CREATE_CONTENT} element={<ContentCreate />} />
        </Routes>
    )
}

export default Routing
