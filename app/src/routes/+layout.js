import { phone, email, menu } from "../data/header_v1.json"
import { logo, menu as mainMenu } from "../data/header_v2.json"

const content_Header_v1 = {
    phone,
    email,
    menu
}
const content_Header_v2 = {
    logo,
    menu: mainMenu
}

export const load = () => {
    return {
        content_Header_v1,
        content_Header_v2
    };
}
