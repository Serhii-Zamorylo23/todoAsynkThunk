import TaskItem from "./TaskItem";
import { useDispatch} from "react-redux";
import styled from "styled-components";
import Filter from "./Filter";
import { addTaskThunk } from "../thunk/AddTaskThunk";
import { useEffect } from "react";
import { fetchTaskThunk } from "../thunk/fetchTaskThunk";
const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 10px;
`
const Input = styled.input`
padding: 10px 15px;
font-size: 16px;
border-radius: 12px;
border: 1px solid #ddd;
width: 250px;
transition: all 0.2s ease;

&:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 8px rgba(79, 70, 229, 0.3);
  outline: none;
}
`;
const AddButton = styled.button`
  padding: 10px 20px;
  background: #4f46e5;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #6366f1;
    transform: scale(1.05);
  }
`;
const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 400px;
  margin: 0 auto;
`;

const List = () => {
  const dispatch = useDispatch()
  const handleName = (e) => {
    e.preventDefault()
    const name = e.target.elements.userName.value
    if(name.length > 0){
      dispatch( addTaskThunk(name))
    } else{
      alert("Please write task")
    }
  }
  useEffect(()=>{
    dispatch(fetchTaskThunk())
  },[])
  return (
    <>
      <FormContainer onSubmit = {handleName}>
        <Input type = "text" name = "userName"/>
        <AddButton type = "submit">Add</AddButton>
      </FormContainer>
      <Filter/>
      <TaskList>
        <TaskItem/>
      </TaskList>
    </>
  );
};
export default List
