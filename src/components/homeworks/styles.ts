import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MyTasksWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
gap: 20px;
width: 100%;
height: 100%;
`

export const SideBar = styled.div`
display: flex;
gap: 20px;
`

export const TaskBox = styled(Link)`
text-decoration: none;
padding: 10px;
background-color: #bee181;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
color: rgb(34, 69, 244);
font-size: 18px;
font-weight: bold;

&:hover {
    cursor: pointer;
}

&:active {
    transform: scale(0.95);
}

`

export const MainPage = styled.div`
display:flex;
flex-direction: column;
/* height: 100%; */
flex: 1;
padding: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

`