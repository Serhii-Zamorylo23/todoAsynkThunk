import { useDispatch } from "react-redux"
import styled from "styled-components"
import { filter } from "../redux/reduser";
const SearchFormContainer = styled.form`
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
`
const SearchButton = styled.button`
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
const Filter=()=>{
    const dispatch=useDispatch()

    const getFilterWord = (e) => {
        e.preventDefault()
        const name = e.target.elements.FiterValue.value
        dispatch(filter(name))
    }
    return(
        <>
        <SearchFormContainer onSubmit = {getFilterWord}>
            <Input type = "text" name = "FiterValue" placeholder="Filter"/>
            <SearchButton type = "submit">Search</SearchButton>
        </SearchFormContainer>
        </>
    )
}
export default Filter