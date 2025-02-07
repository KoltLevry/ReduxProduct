import styled from '@emotion/styled';

export const MainButton = styled.button`
  min-width: 120px;
  min-height: 80px;
  outline: none;
  border: none;
  border-radius: 14px;
  font-family: Lato, Geneva, Tahoma, sans-serif;
  font-size: 24px;
  box-shadow: 0 4px 9px rgba(0,0,0,0.2);
  background-color: lightcyan;
  cursor: pointer;

  transition: background-color 0.3s ease, color 0.3s ease;

  &:active {
    opacity: 0.9;
    transform: scale(0.9);
  }

  &:hover {
    background-color: lightblue;
    background-color: rgba(123, 239, 187, 0.892);
  }
`;


// import styled from '@emotion/styled';

// interface ButtonStyledProps {
//   disabled: boolean;
//   variant: "primaryFirst" | "secondarySecond";
//   isToggled: boolean;
// }

// export const MainButton = styled.button<ButtonStyledProps>`
//   min-width: 100px;
//   min-height: 60px;
//   outline: none;
//   border: none;
//   padding: 10px;
//   margin-top: 10px;
//   border-radius: 14px;
//   font-family: Lato, Geneva, Tahoma, sans-serif;
//   font-size: 24px;
//   box-shadow: 0 4px 9px rgba(0,0,0,0.2);

//   cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
//   color: ${({ disabled }) => (disabled ? '#a9a9a9' : 'white')};
//   background: ${({ disabled, variant }) => 
//     disabled 
//       ? '#d3d3d3' 
//       : variant === "secondarySecond"
//       ? "white"
//       : "#2828e8e3"};

// color: ${({ variant, disabled }) => 
//     disabled
//       ? "#a9a9a9"
//       : variant === "secondarySecond"
//       ? "blue"
//       : "white"};

//   transition: background-color 0.3s ease, color 0.3s ease;

//   &:hover {
//     background-color: ${({ variant, disabled }) => 
//       disabled
//         ? "#d3d3d3"
//         : variant === "secondarySecond"
//         ? "#f0f8ff"
//         : "#141bd9"};
//   }

//   &:active {
//     opacity: 0.9;
//     transform: scale(0.9);
//   }
// `;