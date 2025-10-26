import axios from "axios"

export const DeleteTask = async (id) =>{

    const response = await axios.delete(`https://68f7b2c7f7fb897c6616d5be.mockapi.io/Phonebook/Todo/${id}`)
    
    return response.data
}