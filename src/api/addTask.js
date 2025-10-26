import axios from "axios"

export const addTask = async (task) => {
    
    const response = await axios.post(`https://68f7b2c7f7fb897c6616d5be.mockapi.io/Phonebook/Todo`,{task:task})
    return response.data
}
