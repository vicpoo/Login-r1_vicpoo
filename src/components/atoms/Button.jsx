import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 80%;
    height: 50px;
    background-color: #035e76;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    box-shadow: 10px 5px 5px 0px rgba(0,0,0,0.75);
    margin: 6px 0;

    &:hover {
        background-color: #024056;
    }
`;

function Button(props){
    return(
        <ButtonStyled onClick={props.onClick}>{props.text}</ButtonStyled>
    )
}

export default Button;