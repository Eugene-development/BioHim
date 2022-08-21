import { phone, email, menu } from "../data/header_v1.json"

const content_Header_v1 = {
    phone,
    email,
    menu
}

export const load = () => {
    return {
        content_Header_v1
    };
}
