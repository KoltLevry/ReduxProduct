import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const InputElement = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px;
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 18px;

  &::placeholder {
    color: #a19f9f;
  }
`;

export const StyledLabel = styled.label`
  font-size: 24px;
  color: #333;
  margin-bottom: 4px;
`;
