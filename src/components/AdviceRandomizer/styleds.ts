import styled from '@emotion/styled';

export const AdviceRandomizerContainer = styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
gap: 20px;
`

export const MainTitle = styled.h1`
color: red;
`

export const AppContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`

export const GetAdviceButton = styled.button`
padding: 10px;
font-size: 20px;
background-color: green;
color: white;
cursor: pointer;
border-radius: 5px;

&:active {
    transform: scale(0.95);
}
`

export const AdvicesContainer = styled.div`
display: flex;
flex-direction: column;
height: 400px;
width: 500px;
border: 1px solid black;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
overflow-y: scroll;
border-radius: 5px;

`

export const List = styled.ul``

export const ListItem = styled.li`
padding: 10px;
margin-left: 10px;
`

export const DeleteButton = styled.button`
padding: 10px;
font-size: 20px;
background-color: red;
color: white;
cursor: pointer;
border-radius: 5px;

&:active {
    transform: scale(0.95);
}
`

export const ErrorMessage = styled.p`
padding: 10px;
font-size: 20px;
font-weight: bold;
color: red;
align-self: center;
`