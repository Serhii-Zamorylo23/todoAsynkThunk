import { useDispatch, useSelector } from "react-redux"
import { renameTaskThunk } from "../thunk/renameTaskThunk"
import { fetchTaskThunk } from "../thunk/fetchTaskThunk"
const RenameModal = ({close,id}) => {
    const dispatch = useDispatch()
    const rename = (e) => {
        e.preventDefault()
        const name = e.target.elements.RenameTask.value
        const idTask= id
        console.log(idTask)
        dispatch(renameTaskThunk({ id, newTaskName:name })); 
        dispatch(fetchTaskThunk())
        close(prev=>!prev)
    }
    
    return(
            <form onSubmit = {rename}>
                
                <input type = "text" name = "RenameTask" />
                <button type = "sumbit">Save</button>

            </form>
    )
}

export default RenameModal