import styled from '@emotion/styled';

export const PhoneCall = styled.button`
padding: 10px;
border: none;
background-color: lightgreen;
color: white;
font-weight: bold;
border-radius: 20px;
font-size: 24px;
cursor: pointer;

&:active {
    transform: scale(0.95);
}

`

export const ButtonsValue = styled.div`
display: flex;
gap: 20px;
justify-content: center;
`

export const ButtonStorageValue = styled.button`
padding: 10px;
border-radius: 10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
font-size: 16px;
cursor: pointer;

&:hover {
    background-color: lightgoldenrodyellow;
}
&:active {
    transform: scale(0.95);
}
`