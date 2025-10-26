import axios from "axios"

export const togleTask = async ({id,isComplete}) => {

    const response = await axios.put(`https://68f7b2c7f7fb897c6616d5be.mockapi.io/Phonebook/Todo/${id}`,
    {isComplete:!isComplete})
    return response.data
}