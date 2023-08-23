export { default as SignInPage } from "./sign-in"
export { default as SignUpPage } from "./sign-up"
export { default as TreePage } from "./tree"
export { default as ContentCreate } from "./content/create"

export enum EPage {
    HOME = "/",
    LOGIN = "/login",
    REGISTATION = "/registration",
    PROFILE = "/profile",
    TREE = "/tree",
    CONTENT = "/content",
    CREATE_CONTENT = "/content/create",
}
