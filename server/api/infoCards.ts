import data from "./infoCards.json"
export default defineEventHandler(async (event) => {
    return {
        data
    }
})
