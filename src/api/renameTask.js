import axios from "axios"

export  const renameTask = async (id,newTaskName) => {
    console.log(newTaskName)
    const response = await axios.put(`https://68f7b2c7f7fb897c6616d5be.mockapi.io/Phonebook/Todo/${id}`,{
        task: newTaskName
    })
    return response.data
}