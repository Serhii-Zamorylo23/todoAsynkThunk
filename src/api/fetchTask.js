import axios from "axios"

export const fetchTask = async () => {

    const response = await axios.get("https://68f7b2c7f7fb897c6616d5be.mockapi.io/Phonebook/Todo/")
    return response.data
}