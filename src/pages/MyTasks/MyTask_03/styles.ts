import styled from '@emotion/styled';

export const MyTask03Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #f0f0f0; */
  height: 100%;
`;


export const NumberFactContainer = styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
gap: 20px;
background-color: #d6fffad0;
padding: 40px;
border-radius: 15px;

`

export const GetFactButton = styled.button`
padding: 10px;
font-size: 20px;
background-color:#444;
color: white;
cursor: pointer;
border-radius: 5px;
width: 100%;

&:active {
    transform: scale(0.95);
}
`

export const FactsContainer = styled.div`
display: flex;
flex-direction: column;
height: 400px;
width: 500px;
border: 1px solid black;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
overflow-y: scroll;
border-radius: 5px;
background-color: #f0f0f0;
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

export const TopButtonDiv = styled.div`
display: flex;
gap: 30px;
`

export const BottomButtonDiv = styled.div`
display: flex;
gap: 30px;
`
export const DeleteAllFactsButton = styled.button`
padding: 10px;
font-size: 20px;
background-color: lightcoral;
color: #444;
cursor: pointer;
border-radius: 5px;

&:active {
    transform: scale(0.95);
}
`

export const ShuttleFacts = styled.button`
padding: 10px;
font-size: 20px;
background-color: yellowgreen;
color: #333;
cursor: pointer;
border-radius: 5px;

&:active {
    transform: scale(0.95);
}
`