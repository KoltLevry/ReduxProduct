import { InputProps } from './types'
import { InputContainer, InputElement, StyledLabel } from './styles'

function Input({ 
      name, 
      type = 'text',
       placeholder, 
       label, 
       id, 
       value, 
       onChange, 
       min,
       max,
       
      }: InputProps) {
  return (
    <InputContainer>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>} 
      <InputElement
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={type === "number" ? min : undefined}
        max={type === "number" ? max : undefined}
      />
    </InputContainer>
  );
}

export default Input;