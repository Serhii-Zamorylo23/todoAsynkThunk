import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import RenameModal from "./RenameModal";
import { DeleteTaskThunk } from "../thunk/DeleteTaskThunk";
import { fetchTaskThunk } from "../thunk/fetchTaskThunk";
import { togleTaskThunk } from "../thunk/togleTaskThunk";
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  column-gap: 10px;
  background: #4f46e5;
  color: white;
  padding: 15px 20px;
  margin: 10px 0;
  border-radius: 12px;
  font-size: 18px;
  row-gap: 15px;
  align-items: center;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease forwards;
  transition: all 0.2s ease;

  &:hover {
    background: #6366f1;
    transition: all 0.2s ease;
  }
`;

const DeleteTaskButton = styled.button`
  background: #ef4444;
  border: none;
  color: white;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover {
    background: #f87171;
  }
`;
const RenameButton = styled.button`
  background: #efc50c;
  border: none;
  color: white;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
`;
const BtnsContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;
const TaskItem = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const visibleTasks = tasks.filter(
    (task) =>
      typeof task.task === "string" &&
      task.task.toLowerCase().includes(filter.toLowerCase())
  );
  
  const [open, setOpen] = useState(false);
  const deleteTask = (e) => {
    dispatch(DeleteTaskThunk(e.target.id));
  };
  useEffect(()=>{
    dispatch(fetchTaskThunk())
  },[tasks])
  const openModal = () => {
    setOpen((prev) => !prev);
  };
  const CompleteCheckbox = (task) => {
    dispatch(togleTaskThunk({ id: task.id, isComplete: task.isComplete }));
  }
  const [id, setId] = useState(null);
  return (
    <>
      {visibleTasks.map((task) => (
        <Item key={task.id}>
          <input type="checkbox" checked={task.isComplete} onChange={()=>CompleteCheckbox(task)}/>
          {task.task}
          <BtnsContainer>
            <DeleteTaskButton id={task.id} onClick={deleteTask}>
              Delete
            </DeleteTaskButton>
            <RenameButton
              id={task.id}
              onClick={() => {
                openModal();
                setId(task.id);
              }}
            >
              Rename
            </RenameButton>
          </BtnsContainer>
          {open && id === task.id && (
            <RenameModal close={() => setOpen(false)} id={task.id} />
          )}
        </Item>
      ))}
    </>
  );
};
export default TaskItem;
