import {testData} from "./page.json"
const myTest = '1112'
const sections = [
    { slug: 'profile2', title: 'Profile' },
    { slug: 'notifications', title: 'Notifications' }
]


export const load = () => {
    return {
        sections,
        myTest,
        testData
    };
}
