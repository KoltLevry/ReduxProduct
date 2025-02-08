import styled from '@emotion/styled';

export const PhoneCartWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
/* width: 50vw; 50% від ширини екрану */
/* width: 80%;  80% від батьківського контейнера */
/* width: minmax(200px, 1fr);  якщо в grid */
width: clamp(200px, 50vh, 350px); /* якщо в будь-якому іншому випадку */
min-height: 300px;
background-color: #f5f5f5;
padding: 20px;
font-size: 18px;
`;

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